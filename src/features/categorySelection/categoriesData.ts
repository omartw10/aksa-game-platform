export type Category = {
  id: string;
  title: string;
  image: string;
  questionCount: number;
};

export const CATEGORIES: Category[] = [
  { id: "science", title: "علوم", image: "https://picsum.photos/seed/science/400/300", questionCount: 12 },
  { id: "history", title: "تاريخ", image: "https://picsum.photos/seed/history/400/300", questionCount: 10 },
  { id: "geography", title: "جغرافيا", image: "https://picsum.photos/seed/geography/400/300", questionCount: 15 },
  { id: "arts", title: "فنون", image: "https://picsum.photos/seed/arts/400/300", questionCount: 8 },
  { id: "sports", title: "رياضة", image: "https://picsum.photos/seed/sports/400/300", questionCount: 14 },
  { id: "literature", title: "أدب", image: "https://picsum.photos/seed/literature/400/300", questionCount: 11 },
  { id: "music", title: "موسيقى", image: "https://picsum.photos/seed/music/400/300", questionCount: 9 },
  { id: "cinema", title: "سينما", image: "https://picsum.photos/seed/cinema/400/300", questionCount: 13 },
  { id: "nature", title: "طبيعة", image: "https://picsum.photos/seed/nature/400/300", questionCount: 16 },
  { id: "technology", title: "تكنولوجيا", image: "https://picsum.photos/seed/technology/400/300", questionCount: 18 },
  { id: "general", title: "ثقافة عامة", image: "https://picsum.photos/seed/general/400/300", questionCount: 20 },
  { id: "food", title: "طعام وشراب", image: "https://picsum.photos/seed/food/400/300", questionCount: 7 },
];
