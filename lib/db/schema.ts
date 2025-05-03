import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey(),

  // file specific info
  name: text("name").notNull(),
  path: text("path").notNull(),
  type: text("type").notNull(),
  size: integer("size").notNull(),
  file_url: text("file_url").notNull(),

  // ownership info
  user_id: text("user_id").notNull(), // get from clerk
  parent_id: uuid("parent_id"), // root folders wont have this id

  // data info
  isFolder: boolean("isFolder").default(false).notNull(),
  isStarred: boolean("isStarred").default(false).notNull(),
  isTrash: boolean("isTrash").default(false).notNull(),

  // Time
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updateAt: timestamp("updateAt").defaultNow().notNull(),
});

// Relationship
export const filesRelations = relations(files, ({ one, many }) => ({
  parent: one(files, {
    fields: [files.parent_id],
    references: [files.id],
  }),

  children: many(files),
}));

export const File = typeof files.$inferSelect;
export const NewFile = typeof files.$inferSelect;
