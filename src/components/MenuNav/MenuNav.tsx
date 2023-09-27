import React from "react";

interface menuDataProps {
  menuData: {
    section: string;
    items: { name: string; price: number }[];
  }[];
}

export default function MenuNav({ menuData }: menuDataProps) {
  return (
    <div>
      <ul className="flex flex-row overflow-x-auto h-10">
        <li className="menu-nav-list">Promotions</li>
        <li className="menu-nav-list">Lunch Specials</li>
        <li className="menu-nav-list">Daily Specials</li>
        <li className="menu-nav-list">Soups</li>
        <li className="menu-nav-list">Salads</li>
        <li className="menu-nav-list">Appetizers</li>
        <li className="menu-nav-list">House Rolls</li>
        <li className="menu-nav-list">Hand Rolls</li>
        <li className="menu-nav-list">A La Carte</li>
        <li className="menu-nav-list">Sushi Sets</li>
        <li className="menu-nav-list">Maki Sets</li>
        <li className="menu-nav-list">Sashimi Sets</li>
        <li className="menu-nav-list">Poke Bowls</li>
        <li className="menu-nav-list">Rice</li>
        <li className="menu-nav-list">Bento Boxes</li>
        <li className="menu-nav-list">Ramen & Udon</li>
        <li className="menu-nav-list">Chinese Food</li>
        <li className="menu-nav-list">Dinner Specials</li>
        <li className="menu-nav-list">Party Trays</li>
        <li className="menu-nav-list">Beverages</li>
        <li className="menu-nav-list">Alcohol</li>
        <li className="menu-nav-list">Desserts</li>
      </ul>
      <div>{menuData[0].section}</div>
    </div>
  );
}
