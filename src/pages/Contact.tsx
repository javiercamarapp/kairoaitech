import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Button asChild variant="ghost" className="rounded-full">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </Link>
        </Button>
      </div>
      
      <LetsWorkTogether />
    </main>
  );
}
