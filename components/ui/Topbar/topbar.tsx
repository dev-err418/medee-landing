"use client";

import Image from "next/image";
import { Button } from "../button";
import { MoveUpRight } from "lucide-react";
import { useToast } from "../use-toast";
import { commingSoon } from "../SystemToast/systemToast";

export default function Topbar() {
  const { toast } = useToast();

  return (
    <div className="flex flex-row w-full max-w-7xl mx-auto justify-between items-center pt-4 px-4">
      <div className="flex flex-row items-center">
        <Image
          alt="Médée logo"
          height={50}
          width={50}
          src={"/logo_dark_small.png"}
        />
        <p className="ml-3 font-medium text-xl">Médée</p>
      </div>
      <div className="space-x-2">
        <Button variant={"outline"}>
          Equipe <MoveUpRight className="h-4 w-4 ml-1" />
        </Button>
        <Button variant={"outline"}>
          Prix <MoveUpRight className="h-4 w-4 ml-1" />
        </Button>
        <Button variant={"outline"}>
          Contact <MoveUpRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <Button
        onClick={() => {
          commingSoon(toast);
        }}
      >
        Connexion
      </Button>
    </div>
  );
}
