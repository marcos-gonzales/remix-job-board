import {
  serial,
  text,
  timestamp,
  pgTable,
  smallint,
  integer,
  json,
  varchar,
} from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: integer("id").primaryKey(),
  name: varchar("name"),
  email: varchar("email"),
  password: varchar("password"),
  phone: varchar("phone"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const employers = pgTable("employers", {
  id: integer("id").primaryKey(),
  company_name: varchar("company_name"),
  name: varchar("name"),
  email: varchar("email"),
  phone: varchar("phone"),
});

export const jobs = pgTable("jobs", {
  id: integer("id").primaryKey(),
  title: varchar("title"),
  description: varchar("description"),
  open_positions: smallint("open_positions"),
  category_id: integer("category_id"),
  qualifications: json("qualifications"),
  salary: varchar("salary"),
  job_type: varchar("job_type"),
  location: varchar("location"),
  employer_id: integer("employer_id"),
  user_id: integer("user_id"),
});

export const category = pgTable("categories", {
  id: integer("id").primaryKey(),
  name: varchar("name"),
});

export const admin = pgTable("admins", {
  id: integer("id").primaryKey(),
  name: varchar("name"),
  email: varchar("email"),
  password: varchar("password"),
});
