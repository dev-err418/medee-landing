import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../badge";
import { Eye, Tablets, TrendingUp } from "lucide-react";
import { ContentListType } from "@/types/types";

export default function Plateforme() {
  const fonctionnalites: ContentListType[] = [
    {
      title: "Aide à la décision clinique",
      content:
        "Restez à jour sans effort : un fil d&apos;actualité personnalisable résume les dernières avancées médicales, soulignant leur impact sur la pratique quotidienne.",
      Icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Recherche complète de médicaments",
      content:
        "Restez à jour sans effort : un fil d&apos;actualité personnalisable résume les dernières avancées médicales, soulignant leur impact sur la pratique quotidienne.",
      Icon: <Tablets className="h-4 w-4" />,
    },
    {
      title: "Veille médicale personnalisée",
      content:
        "Restez à jour sans effort : un fil d&apos;actualité personnalisable résume les dernières avancées médicales, soulignant leur impact sur la pratique quotidienne.",
      Icon: <Eye className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <p className="font-medium text-5xl mb-2">
          Gagnez du temps et de l&apos;efficacité
        </p>
        <Accordion type="single" defaultValue="item-0">
          {fonctionnalites.map((fonctionnalite, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>
                <Badge variant={"secondary"} className="p-2 mr-2">
                  {fonctionnalite.Icon}
                </Badge>
                {fonctionnalite.title}
              </AccordionTrigger>
              <AccordionContent>{fonctionnalite.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-1/2 px-8">
        <div className="h-full w-full rounded-xl bg-blue-200" />
      </div>
    </div>
  );
}
