import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" p-5 rounded-lg shadow-lg border-t-4 border-blue-400">
        <h1 className="font-bold text-xl my-4">Login</h1>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button className="font-bold px-6 py-2 bg-blue-400 text-white cursor-pointer">Login</button>
        </form>

        <div className="w-fit bg-red-500 text-white text-sm px-3 py-1 rounded-md mt-2">Error Message</div>

        <Link href={'/register'} className="text-right text-sm flex justify-end gap-1 items-end">
          Don't have an account <span className="underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
