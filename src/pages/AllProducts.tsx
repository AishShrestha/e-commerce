import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

function AllProducts() {
  const products = [
    {
      id: 1,
      title: "Stylish Hoodie",
      imageUrl:
        "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Modern Streetwear",
      imageUrl:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Modern Streetwear",
      imageUrl:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60",
    },
  ];

  const categories = ["MENS", "WOMENS", "KIDS"];

  const ProductSection = ({ title }: { title: string }) => (
    <>
      <h1 className="text-3xl font-bold font-mono m-auto mt-10 p-6">{title}</h1>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/${title.toLowerCase()}/${product.id}`}
            className="transition-transform hover:scale-105"
          >
            <Card post={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <Button className="bg-black text-white" to={`/${title.toLowerCase()}`}>
          Load More
        </Button>
      </div>
    </>
  );

  return (
    <>
      {categories.map((category) => (
        <ProductSection key={category} title={category} />
      ))}
    </>
  );
}

export default AllProducts;
