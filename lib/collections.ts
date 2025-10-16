import type { Animation, Collection } from "./types";

// Collection format mapping
export const collectionFormats: Record<string, string> = {
  'brainrot': 'gif',
  'combat': 'gif',
  'meshrig': 'gif',
  'gun': 'gif',
  'finalization': 'gif',
  'lifestyle': 'gif'
} as const

// Collection folder name mapping (for case sensitivity)
export const collectionFolders: Record<string, string> = {
  'brainrot': 'brainrot',
  'combat': 'combat',
  'meshrig': 'meshrig',
  'gun': 'gun',
  'finalization': 'finalization',
  'lifestyle': 'lifestyle'
} as const

// Collection image counts and formats
export const collectionImages: Record<string, { count: number; formats: string[] }> = {
  'brainrot': { 
    count: 6,
    formats: ['gif']
  },
  'combat': { 
    count: 5,
    formats: ['gif']
  },
  'meshrig': { 
    count: 10,
    formats: ['gif']
  },
  'gun': { 
    count: 4,
    formats: ['gif']
  },
  'finalization': { 
    count: 6,
    formats: ['gif']
  },
  'lifestyle': { 
    count: 16,
    formats: ['gif']
  }
} as const

// Aspect ratios for different image types
const aspectRatios = [
  { width: 1800, height: 1200 }, // 3:2
  { width: 1800, height: 1350 }, // 4:3
  { width: 1800, height: 1080 }, // 16:9
  { width: 1200, height: 1800 }, // 2:3 (portrait)
] as const

// Function to get images for a collection
function getCollectionAnimations(collectionSlug: string): Animation[] {
  // Get the proper folder name from our mapping instead of generating it
  const folderName = collectionFolders[collectionSlug]
  if (!folderName) return []

  const collectionInfo = collectionImages[collectionSlug]
  if (!collectionInfo) return []
  
  return Array.from({ length: collectionInfo.count }, (_, i) => {
    const index = i + 1
    const format = collectionSlug === 'bali' && index >= 10 && index <= 15 ? 'jpg' : collectionFormats[collectionSlug]
    const imagePath = `/animations/${folderName}/${collectionSlug}-${index}.${format}`
    const dimensions = aspectRatios[index % aspectRatios.length]

    return {
      id: `${collectionSlug}-${index}`,
      src: imagePath,
      width: dimensions.width,
      height: dimensions.height,
      alt: `${collectionSlug} image ${index}`,
    }
  })
}

// Function to get cover image path
function getCoverImagePath(folderName: string): string {
  const collectionSlug = folderName.toLowerCase().replace(' ', '-')
  const format = collectionFormats[collectionSlug] || 'jpg'
  return `/animations/${folderName}/cover.${format}`
}

// Collections data
const collections: Collection[] = [
  {
    id: "1",
    slug: "brainrot",
    title: "Brainrot: Viral & Expressive Emotes",
    description: "High-energy, trend-based animations for maximum player engagement.",
    fullDescription:
      "This collection is a curated set of high-energy, modern animations designed to capture the fast-paced nature of internet culture. Perfect for in-game emotes and viral marketing, these movements are crafted to be instantly recognizable and highly shareable, adding a unique, expressive layer to your game. Boost player interaction with animations that are both current and unforgettable.",
    coverImage: getCoverImagePath("brainrot"),
    tags: ["Emotes", "Viral", "Engaging"],
    featured: true,
    animations: getCollectionAnimations("brainrot"),
  },
  {
    id: "2",
    slug: "meshrig",
    title: "Advanced Mesh Rigs & Custom Characters",
    description: "Animations for complex mesh rigs and non-standard characters.",
    fullDescription:
    "This collection showcases my proficiency in animating complex mesh rigs and custom-modeled characters. Going beyond standard Roblox rigs, I specialize in bringing unique character designs to life with fluid, bone-based animations. Each piece highlights meticulous weight painting and precise keyframing to ensure flawless deformation and expressive movements, perfect for high-fidelity projects and games that require a unique artistic vision.",
    coverImage: getCoverImagePath("meshrig"), // Certifique-se de que a imagem de capa seja relevante
    tags: ["Technical", "Custom", "High-Fidelity"],
    featured: true,
    animations: getCollectionAnimations("meshrig"),
  },
  {
    id: "3",
    slug: "gun",
    title: "FPS Gun Animations",
    description: "Fluid and realistic gun animations for a tactical gameplay experience.",
    fullDescription:
      "This collection features a high-fidelity set of animations tailored for first-person shooter games. Each movement, from weapon equipping and reloads to intricate firing sequences, is crafted with an emphasis on realistic timing and impact. These animations are designed to enhance player immersion, providing a tactile and responsive feel that elevates the core combat loop of any FPS title.",
    coverImage: getCoverImagePath("gun"), // Verifique se a imagem de capa é relevante
    tags: ["Weapon", "FPS", "Action"],
    featured: true,
    animations: getCollectionAnimations("gun"),
  },
  {
    id: "4",
    slug: "finalization",
    title: "Finishing Moves: Land of Fire and Ice",
    description: "Epic finishing animations combining power and style",
    fullDescription:
      "This collection showcases our finishing move animations for combat, blending dramatic flair with impactful gameplay. From fiery sword strikes to icy special attacks, each animation is designed to feel powerful, cinematic, and satisfying, giving players a visually striking conclusion to battles.",
    coverImage: getCoverImagePath("finalization"),
    tags: ["Combat", "Action", "Weapon"],
    featured: false,
    animations: getCollectionAnimations("finalization"),
  },
  {
    id: "5",
    slug: "combat",
    title: "Combat Animations",
    description: "Fluid and dynamic combat sequences for Roblox characters",
    fullDescription:
      "This collection showcases our combat animations, designed to bring action-packed sequences to life in Roblox games. From sword swings and martial arts moves to special attack effects, each animation is crafted to feel responsive, realistic, and immersive, enhancing gameplay and player engagement.",
    coverImage: getCoverImagePath("combat"),
    tags: ["Combat", "Action", "Weapon"],
    featured: false,
    animations: getCollectionAnimations("combat"),
  },
  {
    id: "6",
    slug: "lifestyle",
    title: "Lifestyle & Urban Animations",
    description: "A diverse collection of lifestyle and urban-themed animations",
    fullDescription:
      "A diverse collection of lifestyle and urban-themed animations, capturing everyday moments and street culture. From casual poses to dynamic street scenes, these animations are perfect for adding a touch of realism and relatability to your projects.",
    coverImage: getCoverImagePath("lifestyle"),
    tags: ["Casual", "Body", "Urban"],
    featured: false,
    animations: getCollectionAnimations("lifestyle"),
  },
]

// Export functions
export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))
