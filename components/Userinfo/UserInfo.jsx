import React from 'react';

const UserInfo = () => {
  return (
    <div className="grid font-bold place-items-center h-screen">
      <div className="my-6 shadow-lg p-8 bg-zinc-100/60 flex flex-col gap-2">
        <div className="">
          Email : <span>alansolihin@gmail.com</span>
        </div>
        <div className="">
          Name : <span>Dons</span>
        </div>
        <button className="bg-red-500 text-white my-6 py-3 mt-2 rounded-sm">Log out</button>
      </div>
    </div>
  );
};

export default UserInfo;
