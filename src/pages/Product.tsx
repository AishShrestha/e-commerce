import { useParams } from "react-router-dom";
import Button from "../components/Button";

function Product() {
  const { id } = useParams();

  // This would typically come from an API or props
  const product = {
    id: id,
    title: "Modern Streetwear Hoodie",
    price: 89.99,
    description:
      "Premium quality streetwear hoodie made with 100% cotton. Perfect for everyday wear.",
    imageUrl:
      "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=500&auto=format&fit=crop&q=60",
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* Right side - Product Details */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold font-mono">{product.title}</h1>
          <p className="text-2xl font-semibold">${product.price}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Size</h3>
            <div className="flex gap-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 border border-gray-300 rounded-md hover:border-black focus:border-black focus:outline-none"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <Button className="w-full bg-black text-white py-4" to="">
              Add to Cart
            </Button>
            <Button className="w-full border border-black py-4" to="">
              Buy Now
            </Button>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>100% Premium Cotton</li>
              <li>Machine washable</li>
              <li>Regular fit</li>
              <li>Drawstring hood</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
