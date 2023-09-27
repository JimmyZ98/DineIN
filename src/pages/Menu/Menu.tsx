import React from "react";
import MenuNav from "../../components/MenuNav/MenuNav";
import { FaSearch } from "react-icons/fa";

// interface menuDataProps {
//   menuProps: { section: string; items: { name: string; price: number }[] }[];
// }

const menuData = [
  {
    section: "Promotions",
    items: [
      { name: "Salmon Avocado Roll", price: 4 },
      { name: "Yam & Avocado Roll", price: 3.5 },
    ],
  },
  {
    section: "Lunch Specials",
    items: [
      { name: "s1 - Cali & Salmon Rolls", price: 10 },
      { name: "s2 - Cali & Dynamite Rolls", price: 10 },
    ],
  },
  {
    section: "Daily Specials",
    items: [
      { name: "All Day Sepcial", price: 14 },
      { name: "Combo 1", price: 8.25 },
    ],
  },
  {
    section: "Appetizers",
    items: [
      { name: "Edamame", price: 5.5 },
      { name: "Veg Tempura", price: 6.25 },
    ],
  },
];

export default function Menu() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Menu</h1>
        <FaSearch className="text-orange" />
      </div>
      <MenuNav menuData={menuData} />
    </section>
  );
}
