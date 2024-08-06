import { Button } from "@/components/ui/button";
import Description from "@/components/ui/Description/description";
import Plateforme from "@/components/ui/Plateforme/plateforme";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center pt-[20dvh]">
      <h1 className="text-7xl font-medium text-center">
        L&apos;IA au service de votre
        <br />
        expertise médicale
      </h1>
      <h2 className="mt-4 text-center text-muted-foreground">
        Obtenez rapidement des réponses fiables et sourcées à toutes vos
        questions
        <br />
        pour une prise en charge efficace
      </h2>
      <div className="mt-4 space-x-4">
        <Button variant={"secondary"}>Connexion</Button>
        <Button>Essayer Médée</Button>
      </div>
      <div className="w-full h-52 bg-blue-200 rounded-xl mt-8" />
      <div className="w-full">
        {/* 1 er bloc : "Médée" */}
        <h4 className="text-sm mt-16 mb-4">Médée</h4>
        <Description />

        {/* 2nd bloc : "Notre plateforme" */}
        <h4 className="text-sm mt-16 mb-4">Notre plateforme</h4>
        <Plateforme />

        {/* 3eme bloc : "Avantages" */}
        <div className="relative flex flex-col items-center mt-16">
          <div className="absolute bg-blue-200 w-[100vw]">
            <div className="max-w-5xl mx-auto">
              <h4 className="text-sm mb-4 mt-16">Avantages</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh]" />
    </div>
  );
}
