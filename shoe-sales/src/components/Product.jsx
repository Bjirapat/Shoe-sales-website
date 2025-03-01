import React from "react";
export const Product = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "adidas Ultraboost",
      price: "$159.99",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Jordan Retro",
      price: "$169.99",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3",
    },
    {
      id: 4,
      name: "Puma RS-X",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Trending Now</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-red-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
