"use client";

import { Button } from "../button";
import { commingSoon } from "../SystemToast/systemToast";
import { useToast } from "../use-toast";

export default function HeroButtons() {
  const { toast } = useToast();

  return (
    <div className="mt-4 space-x-4">
      <Button variant={"secondary"} onClick={() => commingSoon(toast)}>
        Connexion
      </Button>
      <Button onClick={() => commingSoon(toast)}> Essayer Médée</Button>
    </div>
  );
}
