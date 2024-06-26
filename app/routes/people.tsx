import db from "../../db/drizzle";
import { user } from "../../db/schema";
import { asc } from "drizzle-orm";
import { useLoaderData, Form, redirect, useActionData } from "@remix-run/react";
import { json, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import InputGroup from "~/components/InputGroup";
import { FaEnvelope, FaPhone, FaUserSecret } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const users = await db.select().from(user).orderBy(asc(user.id));
  return json({ users });
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const phone = String(formData.get("phone"));
  const errors = {};

  if (!email.includes("@")) {
    return (errors.email = "invalid email address");
  }

  if (!name || !password || !phone) {
    errors.name = "oops something went wrong";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  await db.insert(user).values({
    name: name,
    email: email,
    password: password,
    phone: phone,
  });

  return redirect("/");
}

export function SignUp() {
  const actionData = useActionData<typeof action>();

  return (
    <Form method="post">
      <InputGroup name="name">
        <FaPerson />
      </InputGroup>
      <InputGroup name="email">
        <FaEnvelope />
      </InputGroup>
      <InputGroup name="password" type="password">
        <FaUserSecret />
      </InputGroup>
      <InputGroup name="phone" type="tel">
        <FaPhone />
      </InputGroup>
      <button
        className="btn btn-outline btn-accent w-full flex justify-center mx-auto text-lg"
        style={{ maxWidth: "453px" }}
      >
        Submit
      </button>
    </Form>
  );
}

export default function index() {
  const { users } = useLoaderData<typeof loader>();
  console.log(users);
  return (
    <div className="container" style={{ maxWidth: "50%;", margin: "auto" }}>
      <h1 className="text-2xl mb-5">welcome!</h1>
      <SignUp />
    </div>
  );
}
