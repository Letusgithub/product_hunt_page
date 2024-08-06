import React, { useState } from "react";
import lips from "@/assets/lips.avif";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

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
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <Image src={lips} alt="Video Dubber" />
          <div className="tracking-wide text-xl text-black font-bold">
            VideoDubber - Fast Video Translator
          </div>
          <p className="mt-2 text-2xl text-gray-500">
            Translate videos in your own voice, globalize in a click!
          </p>
          <div className="mt-4 flex items-center">
            <div className="relative inline-block text-left group">
              <button className="bg-white text-black font-bold py-2 px-4 rounded border-2 flex items-center">
                Visit
                <FaChevronDown className="ml-2" />
              </button>
              <div className="hidden group-hover:block origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-0 delay-2000">
                <div className="py-1">
                  <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Link href="https://videodubber.ai" className="font-bold">
                      Website videodubber.ai
                    </Link>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Link href="https://videodubber.ai" className="font-bold">
                      Learn More videodubber.ai
                    </Link>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Link href="https://videodubber.ai" className="font-bold">
                      Learn More videodubber.ai
                    </Link>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Link href="https://videodubber.ai" className="font-bold">
                      Learn More videodubber.ai
                    </Link>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Link href="https://videodubber.ai" className="font-bold">
                      Learn More videodubber.ai
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleUpvote}
              className={`ml-4 py-2 px-4 rounded font-bold flex items-center text-white ${
                upvoted ? "" : ""
              }`}
              style={{
                background: upvoted
                  ? "linear-gradient(227deg, rgb(255, 69, 130), rgb(255, 97, 84))"
                  : "linear-gradient(227deg, rgb(255, 69, 130), rgb(255, 97, 84))",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path
                  fill="currentColor"
                  d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"
                />
              </svg>
              Upvote {upvotes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
