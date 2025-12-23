import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SOLUTIONS_CONTEXT = `
Eres un asistente de Kairo AI que ayuda a encontrar soluciones de inteligencia artificial para empresas.

SOLUCIONES DISPONIBLES DE KAIRO AI:

1. ASISTENTE LEGAL IA - Para despachos de abogados y empresas legales
   - Análisis de contratos y documentos legales
   - Respuestas automáticas a consultas legales frecuentes
   - Gestión inteligente de casos

2. ASISTENTE MÉDICO IA - Para clínicas y hospitales
   - Gestión de citas y recordatorios automáticos
   - Respuestas a preguntas frecuentes de pacientes
   - Seguimiento post-consulta automatizado

3. ASISTENTE INMOBILIARIO IA - Para inmobiliarias
   - Calificación automática de prospectos
   - Tours virtuales y respuestas 24/7
   - Seguimiento automático de leads

4. ASISTENTE RESTAURANTE IA - Para restaurantes y cafeterías
   - Gestión de reservaciones automáticas
   - Pedidos por WhatsApp/chat
   - Respuestas sobre menú y disponibilidad

5. ASISTENTE HOTELERO IA - Para hoteles y hospedaje
   - Reservaciones automáticas 24/7
   - Información de servicios y amenidades
   - Check-in/check-out asistido

6. ASISTENTE FITNESS IA - Para gimnasios y centros deportivos
   - Gestión de membresías y clases
   - Respuestas sobre horarios y servicios
   - Seguimiento de clientes

7. ASISTENTE AUTOMOTRIZ IA - Para talleres y agencias
   - Agendado de citas de servicio
   - Seguimiento de reparaciones
   - Cotizaciones automáticas

8. ASISTENTE E-COMMERCE IA - Para tiendas en línea
   - Atención al cliente 24/7
   - Seguimiento de pedidos
   - Recomendaciones personalizadas

9. ASISTENTE EDUCATIVO IA - Para escuelas y academias
   - Información de cursos y inscripciones
   - Respuestas a dudas frecuentes
   - Seguimiento de alumnos

10. ASISTENTE SEGUROS IA - Para aseguradoras
    - Cotizaciones automáticas
    - Gestión de siniestros
    - Atención a clientes 24/7

Responde SIEMPRE en español y en formato JSON con la siguiente estructura:
{
  "solutions": [
    {
      "title": "Nombre de la solución",
      "description": "Descripción corta de cómo ayuda al negocio",
      "benefits": ["beneficio1", "beneficio2", "beneficio3"]
    }
  ],
  "message": "Mensaje personalizado explicando por qué estas soluciones son ideales para su negocio"
}

Sugiere máximo 3 soluciones relevantes basadas en la consulta. Si no encuentras algo específico, sugiere las soluciones más cercanas.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    
    if (!query || query.trim().length < 2) {
      return new Response(
        JSON.stringify({ solutions: [], message: "" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SOLUTIONS_CONTEXT },
          { role: "user", content: `El usuario busca soluciones de IA para: "${query}". Sugiere las mejores soluciones de Kairo AI para este tipo de negocio o necesidad.` }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes, intenta de nuevo en unos segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Error al procesar la búsqueda");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    
    // Parse the JSON response from the AI
    let parsedResponse;
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        parsedResponse = { solutions: [], message: "No se encontraron soluciones específicas." };
      }
    } catch {
      console.error("Error parsing AI response:", content);
      parsedResponse = { solutions: [], message: "Error al procesar resultados." };
    }

    return new Response(JSON.stringify(parsedResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Search solutions error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
