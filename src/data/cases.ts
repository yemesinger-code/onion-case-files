export interface Case {
  id: number;
  titleEn: string;
  titleHe: string;
  suspectEn: string;
  suspectHe: string;
  sceneEn: string;
  sceneHe: string;
}

export const cases: Case[] = [
  {
    id: 1,
    titleEn: "The Vanishing Bubbles",
    titleHe: "הבועות הנעלמות",
    suspectEn: "Baking Soda",
    suspectHe: "סודה לשתייה",
    sceneEn: "Kitchen Sink",
    sceneHe: "כיור המטבח",
  },
  {
    id: 2,
    titleEn: "The Color-Changing Cabbage",
    titleHe: "הכרוב משנה הצבעים",
    suspectEn: "Red Cabbage",
    suspectHe: "כרוב אדום",
    sceneEn: "Stove Top",
    sceneHe: "כיריים",
  },
  {
    id: 3,
    titleEn: "The Dancing Raisins",
    titleHe: "הצימוקים הרוקדים",
    suspectEn: "Raisins",
    suspectHe: "צימוקים",
    sceneEn: "Glass of Soda",
    sceneHe: "כוס סודה",
  },
  {
    id: 4,
    titleEn: "The Invisible Ink Mystery",
    titleHe: "תעלומת הדיו הבלתי נראה",
    suspectEn: "Lemon Juice",
    suspectHe: "מיץ לימון",
    sceneEn: "Writing Desk",
    sceneHe: "שולחן כתיבה",
  },
  {
    id: 5,
    titleEn: "The Floating Egg Case",
    titleHe: "תיק הביצה המרחפת",
    suspectEn: "Salt",
    suspectHe: "מלח",
    sceneEn: "Water Glass",
    sceneHe: "כוס מים",
  },
  {
    id: 6,
    titleEn: "The Erupting Volcano",
    titleHe: "הר הגעש המתפרץ",
    suspectEn: "Vinegar",
    suspectHe: "חומץ",
    sceneEn: "Baking Tray",
    sceneHe: "מגש אפייה",
  },
];
