import React from "react";
export const NewIn = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">New Arrivals</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="aspect-square bg-gray-100 relative">
          <img
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3"
            alt="New arrival product"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm">
            New
          </div>
        </div>
      </div>
    </div>
  );
};
