import heroImage from "../assets/hero-model.jpg";
import Button from "../components/Button";

function Home() {
  return (
    <div
      className=" relative min-h-screen bg-cover bg-center bg-no-repeat flex justify-center pl-4 z-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-15"></div>
      <div className=" flex flex-col items-center justify-center h-full md:mt-60 z-10 mt-80">
        <h1 className="text-6xl text-white font-bold ">Elevate Your Style</h1>
        <p className="text-white text-lg">
          Bold, timeless, and effortlessly stylish. Designed for confidence,
          crafted for comfort. Wear your story, own your look.
        </p>
        <Button className="mt-3 bg-white text-black" to="/all-products">
          Explore Now
        </Button>
      </div>
    </div>
  );
}

export default Home;
