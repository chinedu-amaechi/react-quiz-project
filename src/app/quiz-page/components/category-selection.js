"use client";

import "./category-selection.css";
import { useUser } from "@/app/contexts/user-context";

const categories = [
  { name: "Android", image: "/android.png" },
  { name: "Angular", image: "/angular.png" },
  { name: "ASP.NET", image: "/aspnet.png" },
  { name: "AWS", image: "/aws.png" },
  { name: "C++", image: "/cplusplus.png" },
  { name: "C#", image: "/csharp.png" },
  { name: "Cryptography", image: "/cryptography.png" },
  { name: "CSS", image: "/css.png" },
  { name: "Django", image: "/django.png" },
  { name: "Docker", image: "/docker.png" },
  { name: "Ethical Hacking", image: "/ethicalhacking.png" },
  { name: "GitHub", image: "/github.png" },
  { name: "Go", image: "/go.png" },
  { name: "GCP", image: "/gcp.png" },
  { name: "Hadoop", image: "/hadoop.png" },
  { name: "HTML", image: "/html.png" },
  { name: "Java", image: "/java.png" },
  { name: "JavaScript", image: "/javascript.png" },
  { name: "Kubernetes", image: "/kubernetes.png" },
  { name: "Linux", image: "/linux.png" },
  { name: "macOS", image: "/macos.png" },
  { name: "Microsoft Azure", image: "/azure.png" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Network Security", image: "/networksecurity.png" },
  { name: "Node.js", image: "/nodejs.png" },
  { name: "PostgreSQL", image: "/postgresql.png" },
  { name: "Python", image: "/python.png" },
  { name: "React", image: "/react.png" },
  { name: "Ruby on Rails", image: "/rubyonrails.png" },
  { name: "SQL", image: "/sql.png" },
  { name: "Tableau", image: "/tableau.png" },
  { name: "Terraform", image: "/terraform.png" },
  { name: "TensorFlow", image: "/tensorflow.png" },
  { name: "Vue.js", image: "/vue.png" },
  { name: "Windows", image: "/windows.png" }
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
