// This script creates a content collection of articles from records fetched from the Airtable API
import { defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";

// Create content collection
const articles = defineCollection({

  // Load records from Airtable base
  loader: airtableLoader({

    // Remember to hide in environment variables before open-sourcing
    base: "x8mCb4g7BRaEgj",
    table: "AfOGmIkNU7GU6B",
    token: "patMsnAV1tR0ixNdV.6d666b812606dbebbdf95536a8226019d82aca59d46d3b3bc6333b11e4ad7cfd",
  }),
});

export const collections = { articles };