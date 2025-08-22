'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const cards = [
  { id: 1, restaurantName: "Monnet Restaurant", rating: 3, name: "Light Breakfast", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia expedita quod a!", price: 16 },
  { id: 2, restaurantName: "Monnet Restaurant", rating: 3, name: "Light Breakfast", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia expedita quod a!", price: 16 }
]

function HomeRight() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div
      className="relative w-full min-h-screen bg-orange-400 bg-repeat-y px-4 "
      style={{
        backgroundImage: "url('/HomePage/HomeRight/bg-image-home-right.png')",
      }}
    >
      {/* Search bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/6 sm:w-1/2 md:w-1/6 flex items-center gap-2 bg-white/15 rounded-lg px-3 py-2 shadow z-10">
        <Search className="w-4 h-4 text-white" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white placeholder-white w-1/2"
        />
      </div>

      {/* Join Us button */}
      <div className="absolute top-5 right-5 z-10">
        <button className="px-3 py-1 text-sm sm:text-base font-medium bg-white shadow text-orange-400 hover:bg-gray-100 hover:text-orange-400/80 transition-colors duration-300">
          Join Us
        </button>
      </div>

      {/* Center button + Cards */}
      <div className="absolute inset-0 top-10 flex flex-col items-center justify-center pt-20">
        <Link
          href="/"
          className="px-6 py-2 bg-lime-500 opacity-85 text-white shadow rounded hover:bg-lime-600 transition-opacity duration-200"
        >
          See all menu
        </Link>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-4xl mx-auto px-2 sm:px-4">
          {cards.map((card) => (
            <Card key={card.id} className="px-4 py-2 rounded-md bg-white/80 opacity-90 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-base sm:text-lg">{card.restaurantName}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < card.rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-sm sm:text-md">{card.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{card.description}</p>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <span className="font-semibold text-sm sm:text-base">${card.price}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-orange-400 hover:bg-transparent hover:text-orange-400/80"
                >
                  Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
