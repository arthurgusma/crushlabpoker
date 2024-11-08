"use client";

import { handleGoogleSignIn } from "@/services/auth/googleAuth";

const HomeForm = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = await handleGoogleSignIn();

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
 
  return (
    <section className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="text-main-light-green p-2 rounded-lg cursor-pointer bg-main-gold opacity-75 hover:opacity-100">Sign in with Google</button>
        </form>
    </section>
  );
};

export default HomeForm;