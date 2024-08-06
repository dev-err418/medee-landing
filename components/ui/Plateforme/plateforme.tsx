import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../badge";
import { Eye, Tablets, TrendingUp } from "lucide-react";

export default function Plateforme() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <p className="font-medium text-5xl">
          Gagnez du temps et de l&apos;efficacité
        </p>
        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Badge variant={"secondary"} className="p-2 mr-2">
                <TrendingUp className="h-4 w-4" />
              </Badge>
              Aide à la décision clinique
            </AccordionTrigger>
            <AccordionContent>
              Restez à jour sans effort : un fil d&apos;actualité
              personnalisable résume les dernières avancées médicales,
              soulignant leur impact sur la pratique quotidienne.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <Badge variant={"secondary"} className="p-2 mr-2">
                <Tablets className="h-4 w-4" />
              </Badge>
              Recherche complète de médicaments
            </AccordionTrigger>
            <AccordionContent>
              Restez à jour sans effort : un fil d&apos;actualité
              personnalisable résume les dernières avancées médicales,
              soulignant leur impact sur la pratique quotidienne.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <Badge variant={"secondary"} className="p-2 mr-2">
                <Eye className="h-4 w-4" />
              </Badge>
              Veille médicale personnalisée
            </AccordionTrigger>
            <AccordionContent>
              Restez à jour sans effort : un fil d&apos;actualité
              personnalisable résume les dernières avancées médicales,
              soulignant leur impact sur la pratique quotidienne.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-1/2 px-8">
        <div className="h-full w-full rounded-xl bg-blue-200" />
      </div>
    </div>
  );
}
