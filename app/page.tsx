import Ripple from "@/components/magicui/ripple";
import Avantages from "@/components/ui/Avantages/avantages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Description from "@/components/ui/Description/description";
import { Input } from "@/components/ui/input";
import Plateforme from "@/components/ui/Plateforme/plateforme";
import { SendHorizonal } from "lucide-react";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Page() {
  const words = [
    "Mises à jour vaccins HPV",
    "Effets secondaires XYZ",
    "Rhumatologie, recommendation HAS",
  ];
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
      <div className="w-full h-80 rounded-xl mt-8 relative">
        <div className="relative flex flex-col h-12 justify-center">
          <div className="absolute z-20 w-[500px] self-center mt-[14rem] h-14 flex items-center pl-6">
            <Badge variant={"secondary"} className="absolute end-4 p-2">
              <SendHorizonal className="h-4 w-4 text-muted-foreground" />
            </Badge>
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorColor="rgb(37 99 235)"
              delaySpeed={800}
              deleteSpeed={40}
            />
          </div>
          <Input
            disabled
            className="absolute top-0 z-10 bg-[rgba(256,256,256,0.8)] h-14 rounded-xl w-[500px] self-center mt-[calc(20rem/3)]"
          />
        </div>
        <Ripple />
      </div>
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
            <div className="max-w-5xl mx-auto my-16">
              <h4 className="text-sm mb-4">Avantages</h4>
              <Avantages />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh]" />
    </div>
  );
}
