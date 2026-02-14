import type { LucideIcon } from "lucide-react";
import { PhoneCall, VolumeX, Zap, ListChecks } from "lucide-react";

export type HelperId = "callFriend" | "skipTurn" | "doubleScore" | "twoAnswers";

export type HelperConfig = {
  id: HelperId;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export const HELPERS: HelperConfig[] = [
  {
    id: "callFriend",
    name: "كلم صاحبك",
    description: "يسمح للفريق بالاتصال بصديق لمساعدته في الإجابة.",
    icon: PhoneCall,
    color: "#22c55e",
  },
  {
    id: "skipTurn",
    name: "سكت المثقف",
    description: "يمنع أحد لاعبي الفريق الآخر من الكلام أثناء الإجابة.",
    icon: VolumeX,
    color: "#ef4444",
  },
  {
    id: "doubleScore",
    name: "دبلها",
    description: "تضاعف النقاط في حال كانت الإجابة صحيحة.",
    icon: Zap,
    color: "#facc15",
  },
  {
    id: "twoAnswers",
    name: "اجابتين",
    description: "يمنح الفريق فرصتين للإجابة بدل واحدة.",
    icon: ListChecks,
    color: "#3b82f6",
  },
];
