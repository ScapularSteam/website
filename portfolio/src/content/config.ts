// This script creates a content collection of articles from records fetched from the Airtable API
import { z, defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";
import base from "airtable";

// Create content collection
const articles = defineCollection({

  // Load records from Airtable base
  loader: airtableLoader({

    // Remember to hide in environment variables before open-sourcing
    base: "appx8mCb4g7BRaEgj",
    table: "tblAfOGmIkNU7GU6B",
    token: "patMsnAV1tR0ixNdV.6d666b812606dbebbdf95536a8226019d82aca59d46d3b3bc6333b11e4ad7cfd",
  }),

  schema: z.object ({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    date_published: z.coerce.date(),
    cover_image: z.string(),
    likes: z.number(),
  })
});

console.log('Articles fetched from base', base)
export const collections = { articles };