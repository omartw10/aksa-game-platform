export type Category = {
  id: string;
  title: string;
  image: string;
  questionCount: number;
  group?: string; // مفتاح اختياري لتجميع الفئات
};

export const CATEGORIES: Category[] = [
  { id: "science", title: "علوم", image: "../public/images/Science.png", questionCount: 12 },
  { id: "history", title: "تاريخ", image: "../public/images/History.png", questionCount: 10 },
  { id: "geography", title: "جغرافيا", image: "../public/images/Geography.png", questionCount: 15 },
  { id: "arts", title: "فنون", image: "../public/images/Art.png", questionCount: 8 },
  { id: "sports", title: "رياضة", image: "../public/images/Sports.png", questionCount: 14 },
  { id: "literature", title: "أدب", image: "../public/images/Literature.png", questionCount: 11 },
  { id: "music", title: "موسيقى", image: "../public/images/Music.png", questionCount: 9 },
  { id: "cinema", title: "سينما", image: "../public/images/Cinema.png", questionCount: 13 },
  { id: "nature", title: "طبيعة", image: "../public/images/Nature.png", questionCount: 16 },
  { id: "technology", title: "تكنولوجيا", image: "../public/images/Technology.png", questionCount: 18 },
  { id: "general", title: "ثقافة عامة", image: "../public/images/General.png", questionCount: 20 },
  { id: "food", title: "طعام وشراب", image: "../public/images/Food.png", questionCount: 7 },
  { id: "game-racing", title: "سباق السيارات", image: "../public/images/Racing.png", questionCount: 12, group: "ألعاب متعددة" },
  { id: "game-football", title: "كرة القدم السريعة", image: "../public/images/football.png", questionCount: 10, group: "ألعاب متعددة" },
  { id: "game-puzzle", title: "ألغاز وتحديات", image: "../public/images/Puzzle.png",  questionCount:4, group: "ألعاب متعددة" },
  { id: "game-strategy", title: "استراتيجية", image: "../public/images/Strategy.png", questionCount:8, group: "ألعاب متعددة" }
  
];
