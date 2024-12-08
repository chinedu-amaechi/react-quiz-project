"use client";

import "./category-selection.css";
import { useUser } from "@/app/contexts/user-context";

const categories = [
  { name: "Python", image: "/python.png" },
  { name: "CSS", image: "/css.png" },
  { name: "Java", image: "/java.png" },
  { name: "React", image: "/react.png" },
  { name: "C++", image: "/cplusplus.png" },
  { name: "JavaScript", image: "/javascript.png" },
  { name: "HTML", image: "/html.png" },
];

export default function CategorySelection({ onSelectCategory }) {
  const { user } = useUser();

  return (
    <div className="category-selection">
      <h2>Welcome, {user.name}! Select a Quiz Category:</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category"
            onClick={() => onSelectCategory(category.name)}
          >
            <div className="category-container">
              <img src={category.image} alt={category.name} />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
