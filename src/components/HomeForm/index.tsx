// create a form to handle sign in and sign up

'use client';

import { useState } from "react";
import SignInButton from "../SignInButton";

const HomeForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <section className="bg-gray-700 p-4 rounded-lg p-10 h-96 w-96 mt-10 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
            <SignInButton />
        </form>
    </section>
  );
};

export default HomeForm;