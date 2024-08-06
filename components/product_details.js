import React, { useState } from "react";
import lips from "@/assets/lips.avif";
import Image from "next/image";

const ProductDetails = () => {
  const [upvotes, setUpvotes] = useState(161);
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) {
      setUpvotes(upvotes - 1);
    } else {
      setUpvotes(upvotes + 1);
    }
    setUpvoted(!upvoted);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <Image src={lips} alt="Video Dubber" />
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            VideoDubber - Fast Video Translator
          </div>
          <p className="mt-2 text-gray-500">
            Translate videos in your own voice, globalize in a click!
          </p>
          <div className="mt-4 flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Visit
            </button>
            <button
              onClick={handleUpvote}
              className={`ml-4 py-2 px-4 rounded font-bold ${
                upvoted ? "bg-red-500 text-white" : "bg-red-400 text-white"
              }`}
            >
              Upvote {upvotes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
