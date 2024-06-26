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
  id: serial("id"),
  name: varchar("name"),
  email: varchar("email"),
  password: varchar("password"),
  phone: varchar("phone"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const employers = pgTable("employers", {
  id: serial("id"),
  company_name: varchar("company_name"),
  name: varchar("name"),
  email: varchar("email"),
  phone: varchar("phone"),
});

export const jobs = pgTable("jobs", {
  id: serial("id"),
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
  id: serial("id"),
  name: varchar("name"),
});

export const admin = pgTable("admins", {
  id: serial("id"),
  name: varchar("name"),
  email: varchar("email"),
  password: varchar("password"),
});
