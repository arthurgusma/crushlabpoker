"use client";

import { UserContext } from "@/context/UserContext";
import { handleGoogleSignIn } from "@/services/auth/googleAuth";
import { useContext } from "react";

const HomeForm = () => {
  const { setUser } = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = await handleGoogleSignIn();

    if (user)
      setUser(user);
  }
 
  return (
    <section className="bg-gray-700 p-4 rounded-lg p-10 h-96 w-96 mt-10 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent p-2 rounded-lg cursor-pointer">Sign in with Google</button>
        </form>
    </section>
  );
};

export default HomeForm;