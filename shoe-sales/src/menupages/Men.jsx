import React from "react";
export const Men = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Men's Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[200px] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3"
            alt="Men's footwear"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Footwear</span>
          </div>
        </div>
        {/* Add more categories as needed */}
      </div>
    </div>
  );
};
