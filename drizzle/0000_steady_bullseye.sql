CREATE TABLE "files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"path" text NOT NULL,
	"type" text NOT NULL,
	"size" integer NOT NULL,
	"file_url" text NOT NULL,
	"user_id" text NOT NULL,
	"parent_id" uuid,
	"isFolder" boolean DEFAULT false NOT NULL,
	"isStarred" boolean DEFAULT false NOT NULL,
	"isTrash" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updateAt" timestamp DEFAULT now() NOT NULL
);
