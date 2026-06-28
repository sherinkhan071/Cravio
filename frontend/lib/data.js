import { CardDescription } from "@/components/ui/card";
import { Camera ,BookOpen , ChefHat,Search, Icon } from "lucide-react";
import { Label } from "radix-ui";
export const SITE_STATS = [
   { Label:"free scans",val:"10/mo"},
   { Label:"Recipes generated",val:"1M+"},
   { Label:"Cost to start",val:"0$"},
   { Label:"App store rating", val:"4.9"},
];
export const FEATURES = [
  {
    title: "Scan your pantry",
    description:
      "Photo recognition that actually works. Knows what you have instantly.",
    icon: Camera,
    limit: "100 scans/mo free",
  },
  {
    title: "AI Chef Suggestions",
    description:
      "Turn random ingredients into a gourmet meal. Zero food waste.",
    icon: ChefHat,
    limit: "5 meals/mo free",
  },
  {
    title: "Search Any Dish",
    description:
      "Find any recipe instantly. Filter by cuisine, time, or dietary needs.",
    icon: Search,
    limit: "Unlimited searches",
  },
  {
    title: "Digital Cookbook",
    description:
      "Save your favorites. Export as PDF. Share with family.",
    icon: BookOpen,
    limit: "3 saves/mo free",
  },
];

 export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Scan",
    desc: "Let the camera look into your fridge.",
  },
  {
    step: "02",
    title: "Select",
    desc: "Choose a recipe based on your mood.",
  },
  {
    step: "03",
    title: "Savor",
    desc: "Follow simple steps. Eat delicious food.",
  },
];
 export function getCategoryEmoji(category){
   
 }
 export function getCountryFlag(country){
    const flagMap = {
        American:"US",
        British:"GB",
        Canadian:"CA",
        Chinese:"CN",
        Croatian:"HR",
        Dutch:"NL"   
    }
 }


