"use server";

export async function getAll() {
  return [{ name: "bob" }, { name: "alice" }, { name: "jane" }];
}

export async function add(prev: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  console.log(data);

  return { status: "success", message: null };
}
