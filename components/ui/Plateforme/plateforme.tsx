"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../badge";
import { Eye, Tablets, TrendingUp } from "lucide-react";
import { ContentListType } from "@/types/types";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Plateforme() {
  const fonctionnalites: ContentListType[] = [
    {
      title: "Aide à la décision clinique",
      content:
        "Restez à jour sans effort : un fil d'actualité personnalisable résume les dernières avancées médicales, soulignant leur impact sur la pratique quotidienne.",
      Icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Recherche complète de médicaments",
      content:
        "Restez à jour sans effort : un fil d'actualité personnalisable résume les dernières avancées médicales, soulignant leur impact sur la pratique quotidienne.",
      Icon: <Tablets className="h-4 w-4" />,
    },
    {
      title: "Veille médicale personnalisée",
      content:
        "Restez à jour sans effort : un fil d'actualité personnalisable résume les dernières avancées médicales, soulignant leur impact sur la pratique quotidienne.",
      Icon: <Eye className="h-4 w-4" />,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prevValue) => {
        if (prevValue >= 100) {
          setSelectedIndex((prevIndex) => {
            console.log(prevIndex);
            console.log("prev + 1 % 3", (prevIndex + 1) % 3);
            return (prevIndex + 1) % 3;
          });

          return 0;
        }

        return prevValue + 0.1;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  function handleAccordionItemSelect(index: number) {
    setSelectedIndex(index);
    setProgressValue(0);
  }

  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <p className="font-medium text-5xl mb-2">
          Gagnez du temps et de l&apos;efficacité
        </p>
        <Accordion type="single" value={`item-${selectedIndex}`}>
          {fonctionnalites.map((fonctionnalite, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger
                className={`${selectedIndex != i && "opacity-50"}`}
                onClick={() => handleAccordionItemSelect(i)}
              >
                <Badge variant={"secondary"} className="p-2 mr-2">
                  {fonctionnalite.Icon}
                </Badge>
                {fonctionnalite.title}
              </AccordionTrigger>
              <AccordionContent>{fonctionnalite.content}</AccordionContent>
              <Progress value={selectedIndex == i ? progressValue : 0} />
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
