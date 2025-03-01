import React from "react";
export const Brands = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Brands</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
          <span className="text-2xl font-bold">Nike</span>
        </div>
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
          <span className="text-2xl font-bold">adidas</span>
        </div>
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
          <span className="text-2xl font-bold">Puma</span>
        </div>
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
          <span className="text-2xl font-bold">Jordan</span>
        </div>
      </div>
    </div>
  );
};
