import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function CategoryProducts({ category }: { category: string }) {
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
    {
      id: 3,
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
    {
      id: 3,
      title: "Modern Streetwear",
      imageUrl:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold font-mono m-auto mt-10 p-6">
        {category}
      </h1>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/${category.toLowerCase()}/${product.id}`}
            className="transition-transform hover:scale-105"
          >
            <Card post={product} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={(page) => console.log(page)}
      />
    </>
  );
}

export default CategoryProducts;
