export type StoryType = {
  name: string
  excerpt: string
  fullStory: string
  image: string
  location?: string
}

export const stories: StoryType[] = [
  {
    name: "Nicole Rozzie",
    excerpt:
      "This opportunity is a big one for us. We're finally able to share our voices with the world.",
    fullStory: `This opportunity has opened doors I never thought possible. Growing up, our community’s voice was often ignored, but now, through VORP-EA, we are being heard. I’ve found my courage, my platform, and my purpose.`,
    image: new URL('@/assets/images/story-rozzie.jpg', import.meta.url).href,
    location: "Mombasa, Kenya",
  },
  {
    name: "Ghost Team",
    excerpt:
      "I am content with what I have. I do not need riches, just peace and dignity.",
    fullStory: `For years, I lived in the shadows, hiding from violence and poverty. VORP-EA showed me that peace isn't just a dream — it's something we can create. Dignity and community have returned to my life.`,
    image: new URL('@/assets/images/story-ghost.jpg', import.meta.url).href,
    location: "Garissa, Kenya",
  },
  {
    name: "Raider",
    excerpt:
      "Tonight is the first night I will sleep without fear in many years.",
    fullStory: `Conflict robbed me of sleep and security. But now, through the reconciliation dialogues led by VORP-EA, my village has found healing. I can finally rest, knowing tomorrow holds hope instead of fear.`,
    image: new URL('@/assets/images/story-raider.jpg', import.meta.url).href,
    location: "Lodwar, Kenya",
  },
  {
    name: "Jalia",
    excerpt:
      "In French they say, ‘I am reborn.’ That is what this feels like for me.",
    fullStory: `VORP-EA’s menstrual health program changed my life. I no longer miss school during my period. I feel empowered, educated, and ready to help other girls rise. I truly feel reborn.`,
    image: "/images/jalia.jpg",
    location: "Kampala, Uganda",
  },
  // You can add more stories following this structure
]
