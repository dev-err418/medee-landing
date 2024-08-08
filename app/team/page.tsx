import { FounderType } from "@/types/types";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  const founders: FounderType[] = [
    {
      img: "/J_no_bg.png",
      name: "Jérémie Richard",
      role: "Assure la communication, le démarchage et le suivi auprès des clients",
      motivation:
        "Révolutionner l'accès à l'information médicale pour améliorer les soins",
      obsession: "Convaincre les professionnels de santé les plus réfractaires",
      fit: "Son sens de l'écoute et son enthousiasme contagieux sont essentiels pour bien comprendre les besoins des utilisateurs",
      super: "",
    },
    {
      img: "/A_no_bg.png",
      name: "Arthur Spalanzani",
      role: "Responsable du développement technique global de la solution",
      motivation: "Repousser les limites de l'IA au service de la santé",
      obsession: "Peaufiner le moindre détail du système jusqu'à la perfection",
      fit: "Son expertise technique et son engagement sans faille garantissent une solution à la pointe de l'innovation",
      super: "pizza",
    },
  ];

  return (
    <div className="flex flex-col w-full py-[20dvh]">
      <h1 className="text-7xl font-medium text-center">Les fondateurs</h1>
      <p className="mt-2 text-muted-foreground text-center">
        Pas de blouse blanche mais une solution conçue
        <br />
        pour vous et avec vous !
      </p>
      <div className="relative flex flex-col w-full items-center mt-8">
        <Image
          alt="Jérémie - CEO"
          src={"/team_J.png"}
          height={125}
          width={250}
          className="absolute left-[-10%] top-[10%]"
        />
        <Image
          alt="Arthur - CTO"
          src={"/team_A.png"}
          height={125}
          width={250}
          className="absolute top-[-10%] right-[-10%]"
        />
        <img
          alt="Arthur & Jérémie"
          src="/A&J.png"
          className="max-w-2xl rounded-xl"
        />
        {/* <div className="flex flex-col w-full justify-between max-w-2xl mt-8 space-y-8"> */}
        <p className="mt-16 text-4xl font-medium">En savoir plus</p>
        <Carousel className="max-w-2xl mt-4" opts={{ loop: true }}>
          <CarouselContent>
            {founders.map((founder, i) => (
              <CarouselItem key={i}>
                <Card className="flex flex-col items-center p-4">
                  <Image
                    alt={founder.name}
                    src={founder.img}
                    height={100}
                    width={100}
                    className="rounded-full bg-blue-200"
                  />
                  <p className="font-medium text-xl mt-2">{founder.name}</p>
                  <p className="text-muted-foreground text-center text-sm">
                    {founder.role}
                  </p>
                  <div className="w-full mt-4 space-y-2">
                    <p>
                      <b>Motivation 💪 :</b> {founder.motivation}
                    </p>
                    <p>
                      <b>Obsession 👀 :</b> {founder.obsession}
                    </p>
                    <p>
                      <b>Founder fit 🤝 :</b> {founder.fit}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
}
