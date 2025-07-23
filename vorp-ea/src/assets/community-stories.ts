export type StoryType = {
  name: string
  excerpt: string
  fullStory: string
  image: string
  location?: string
}

export const stories: StoryType[] = [
  {
    name: "Community Initiative",
    excerpt:
      "This opportunity is a big one for us. We're finally able to share our voices with the world.",
    fullStory: `Sharing Our Voices

For too long, our stories stayed buried — unheard and unseen. But when VORP-EA opened their platform, everything changed.

For the first time, we stood not as statistics, but as storytellers. Young mothers, local youth, even elders — all finally had the mic.

"This opportunity is a big one for us," said Brian, a youth leader. "We're finally able to share our voices with the world."

Now, the world is listening. And we’re just getting started.
`,
    image: new URL('@/assets/images/kiambio.jpg', import.meta.url).href,
    location: "Nairobi, Kenya",
  },
  {
    name: "Kandara CH Visit",
    excerpt:
      "A day to remember, VORP-EA shared more than a meal they shared hope and kindness.",
    fullStory: `A Day to Remember

It started like any other afternoon in Kasarani — until VORP-EA arrived. Not with speeches or headlines, but with presence. They shared warm meals, yes, but more than that — they shared hope.

Volunteers sat with us, listened to our stories, and reminded us we matter. Old Mama Achieng held her parcel tight and whispered, "This isn’t just food. It’s dignity."

That day, VORP-EA didn’t just feed bellies — they lifted spirits. In a world that often forgets the forgotten, they reminded us we are seen.`,
    image: new URL('@/assets/images/kandara.jpg', import.meta.url).href,
    location: "Murang'a, Kenya",
  },
  {
    name: "SRH Session",
    excerpt:
      "The kind donations of sanitary towels was only topped by the Sexual and Reproductive Health talk.",
    fullStory: `More Than Just Donations

At first, it was the generous gift of sanitary towels that brought smiles to the girls. But what stayed with them longer was the honest, empowering conversation that followed.

"The kind donations of sanitary towels was only topped by the Sexual and Reproductive Health talk," one student shared with a quiet smile.

It wasn’t just supplies — it was knowledge, dignity, and the start of open dialogue in a place where silence once ruled.
`,
    image: new URL('@/assets/images/srh-session.jpg', import.meta.url).href,
    location: "Kasarani, Kenya",
  },
  {
    name: "Kasarani Boxing Club",
    excerpt:
      "A gift of gloves. Gloves to punch through to brighter futures for all the discplined young lives still fighting.",
    fullStory: `Punching Through Barriers

A simple gift — gloves. But to the youth of Kasarani Boxing Club, they were more than equipment.

"A gift of gloves. Gloves to punch through to brighter futures for all the disciplined young lives still fighting," Coach Ian remarked, eyes shining with pride.

Each pair carried a message: you’re seen, you matter, and your fight is worth it.`,
    image: new URL('@/assets/images/kasarani-boxing-club.jpg', import.meta.url).href,
    location: "Kampala, Uganda",
  },
]
