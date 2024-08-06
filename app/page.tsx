import { Button } from "@/components/ui/button";

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
    </div>
  );
}
