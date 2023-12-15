'use client';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log('name :', name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are necasarry');
      return;
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className=" p-5 rounded-lg shadow-lg border-t-4 border-blue-400">
        <h1 className="font-bold text-xl my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="font-bold px-6 py-2 bg-blue-400 text-white cursor-pointer">Register</button>
        </form>
        {error && <div className="w-fit bg-red-500 text-white text-sm px-3 py-1 rounded-md mt-2">{error} </div>}

        <Link href={'/'} className="text-right text-sm flex justify-end gap-1 items-end">
          Have an account <span className="underline">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
