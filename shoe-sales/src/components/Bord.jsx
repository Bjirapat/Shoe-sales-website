import React from "react";
export const Bord = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3"
        className="w-full h-full object-cover opacity-75"
        alt="Latest sneaker collection"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
        <p className="text-xl mb-6">Latest Sneaker Drops</p>
        <button className="bg-red-600 px-8 py-3 rounded-md hover:bg-red-700">
          Shop Now
        </button>
      </div>
    </div>
  );
};
