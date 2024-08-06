// components/Header.js
"use client";

import {
  Header as MantineHeader,
  Container,
  Text,
  Group,
  Button,
} from "@mantine/core";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <MantineHeader height={80} p="xs" className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center h-full w-full px-4">
        {/* Left: Icon and Search Bar */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="currentColor"
            className="mr-4"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#FF6154"
                d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
              ></path>
              <path
                fill="#FFF"
                d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
              ></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2 w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {["Launches", "Products", "News", "Community", "Advertise"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Right: Subscribe and Sign In */}
        <div className="flex items-center space-x-4">
          <Button
            style={{
              background: "rgb(254, 246, 242)",
              color: "rgb(255, 97, 84)",
            }}
          >
            Subscribe
          </Button>
          <Button style={{ background: "rgb(255, 97, 84)" }}>Sign In</Button>
        </div>
      </div>
    </MantineHeader>
  );
};

export default Header;
