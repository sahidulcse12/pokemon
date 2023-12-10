import { Inter } from "next/font/google";
import { useEffect } from "react";
import LoadCard from "./loadCard";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div>
      <LoadCard />
    </div>
  );
};

export default Home;
