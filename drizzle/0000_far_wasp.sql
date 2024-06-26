CREATE TABLE IF NOT EXISTS "admins" (
	"id" serial NOT NULL,
	"name" varchar,
	"email" varchar,
	"password" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial NOT NULL,
	"name" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "employers" (
	"id" serial NOT NULL,
	"company_name" varchar,
	"name" varchar,
	"email" varchar,
	"phone" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "jobs" (
	"id" serial NOT NULL,
	"title" varchar,
	"description" varchar,
	"open_positions" smallint,
	"category_id" integer,
	"qualifications" json,
	"salary" varchar,
	"job_type" varchar,
	"location" varchar,
	"employer_id" integer,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial NOT NULL,
	"name" varchar,
	"email" varchar,
	"password" varchar,
	"phone" varchar,
	"created_at" timestamp,
	"updated_at" timestamp
);
