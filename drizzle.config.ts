import { table } from "console";
import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
import { ne } from "drizzle-orm";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("There is no database url");
}

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // extra config
  migrations: {
    table: "__drizzle_migration",
    schema: "public",
  },
  verbose: true,
  strict: true,
});
