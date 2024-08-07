import { ContentListType } from "@/types/types";
import { BookOpenCheck, BrainCircuit, Timer } from "lucide-react";
import { Card } from "../card";
import { Badge } from "../badge";

export default function Avantages() {
  const avantages: ContentListType[] = [
    {
      title: "Aide à la décision",
      content:
        "En fournissant des réponses claires et sourcées aux questions des médecins, Médée soutient la prise de décision clinique, améliorant ainsi la qualité des soins.",
      Icon: <BrainCircuit className="h-4 w-4" />,
    },
    {
      title: "Gestion de la complexité",
      content:
        "Notre solution est capable de traiter et de synthétiser des informations complexes, aidant les médecins à naviguer dans les enjeux de santé publique les plus délicats.",
      Icon: <BookOpenCheck className="h-4 w-4" />,
    },
    {
      title: "Optimisation du temps",
      content:
        "En réduisant le temps de recherche d'information, Médée permet aux médecins de se concentrer davantage sur l'aspect humain de leur pratique.",
      Icon: <Timer className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex flex-row space-x-6">
      {avantages.map((avantage, i) => (
        <Card key={i} className="w-1/3">
          <Badge variant={"secondary"} className="p-2 mr-2">
            {avantage.Icon}
          </Badge>
          <p className="text-lg font-medium mt-2">{avantage.title}</p>
          <p className="mt-2 text-muted-foreground">{avantage.content}</p>
        </Card>
      ))}
    </div>
  );
}
