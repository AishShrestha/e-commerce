function Card({ post }: { post: any }) {
  return (
    <div className="w-full h-96 break-words hover:scale-105">
      <div className="w-full h-3/4 justify-center mb-4">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-mono overflow-wrap-break-word h-1/4 p-2">
        {post.title}
      </h2>
    </div>
  );
}

export default Card;
