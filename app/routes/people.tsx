import db from "../../db/drizzle";
import { user } from "../../db/schema";
import { asc } from "drizzle-orm";
import { useLoaderData, Form, redirect, useActionData } from "@remix-run/react";
import { json, LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";

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
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="input input-bordered w-full max-w-xs"
      />
      <input type="text" placeholder="Email" name="email" />
      <button className="btn btn-outline btn-accent">click me!</button>
      {/* <Input placeholder="Name" className="max-w-1/2" name="name"></Input>
      {actionData?.errors?.name ? (
        <em className="text-red-500">{actionData?.errors.name}</em>
      ) : null}
      <Input placeholder="Email" type="email" name="email" />
      {actionData?.errors?.email ? <em>{actionData?.errors.email}</em> : null}
      <Input placeholder="password" type="password" name="password" />
      <Input placeholder="phone" type="phone" name="phone" />
      <Button variant="outline" className="p-2 flex m-auto" type="submit">
        Submit
      </Button> */}
    </Form>
  );
}

export default function index() {
  const { users } = useLoaderData<typeof loader>();
  console.log(users);
  return (
    <div className="container" style={{ maxWidth: "50%;", margin: "auto" }}>
      <h1>welcome!</h1>
      <SignUp />
    </div>
  );
}
