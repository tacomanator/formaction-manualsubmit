"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { add } from "../actions";

const schema = z.object({
  name: z.string().min(3),
});

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const {
    formState: { errors },
  } = form;

  const [state, action] = useFormState(add, {
    status: "unsubmitted",
    message: null,
  });

  return (
    <form
      ref={formRef}
      action={action}
      onSubmit={(e) => {
        e.preventDefault();
        return form.handleSubmit(() => {
          action(new FormData(formRef.current!));
        })(e);
      }}
    >
      <fieldset className="space-x-2">
        <label htmlFor="name">Name</label>
        <input type="text" {...form.register("name")} className="border" />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
      </fieldset>
      <input type="submit" className="text-blue-500" />
    </form>
  );
}
