'use client';

import React from 'react';
import { handleGoogleSignIn } from '@/services/auth/googleAuth';

const SignInButton: React.FC = () => {

  return (
    <div className="flex items-center justify-center bg-gray-600 rounded-lg cursor-pointer hover:opacity-80">
      <button onClick={handleGoogleSignIn} className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-clip-text text-transparent p-2 rounded-lg cursor-pointer">Sign in with Google</button>
    </div>
  ) 
};

export default SignInButton;