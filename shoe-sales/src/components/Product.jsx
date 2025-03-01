import React from "react";

export const Product = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: "$159.99",
      image:
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/covmdnim1rkbkbxtm23v/NIKE+AIR+MAX+270+%28GS%29.png",
      brand: "Nike",
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      price: "$189.99",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0b40ded7f464b9b8b44aef900bbae6a_9366/Ultraboost_22_HP9930_01_standard.jpg",
      brand: "Adidas",
    },
    {
      id: 3,
      name: "Jordan 1 Retro High",
      price: "$179.99",
      image:
        "https://www.trippykkc.com/classes/thumb-generator/thumb.php?src=https://www.trippykkc.com/upload/2023/12/657057864e09fOjUA9.jpg&size=x800",
      brand: "Jordan",
    },
    {
      id: 4,
      name: "Puma RS-X³",
      price: "$119.99",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/373904/01/sv01/fnd/PNA/fmt/png/RS-X3-Sneakers",
      brand: "Puma",
    },
    {
      id: 5,
      name: "Nike Zoom Fly 5",
      price: "$149.99",
      image:
        "https://www.arirunningstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/_/d/_dm8968-500__01.jpg",
      brand: "Nike",
    },
    {
      id: 6,
      name: "Adidas NMD_R1",
      price: "$149.99",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c3bd9dda9fdd4a7cbc9aad1e00dd0045_9366/NMD_R1_GZ9260_01_standard.jpg",
      brand: "Adidas",
    },
    {
      id: 7,
      name: "Converse Chuck Taylor",
      price: "$79.99",
      image:
        "https://www.converse.co.th/media/catalog/product/cache/8fcecb462959d400cda3532b9c3dc9f0/m/9/m9160_a_08x1_1_1.png",
      brand: "Converse",
    },
    {
      id: 8,
      name: "Vans Old Skool",
      price: "$69.99",
      image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$583x583$",
      brand: "Vans",
    },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Trending Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100 rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 font-semibold">
                {product.brand}
              </p>
              <h3 className="font-medium text-lg text-gray-800">
                {product.name}
              </h3>
              <p className="text-red-600 font-bold mt-2">{product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
