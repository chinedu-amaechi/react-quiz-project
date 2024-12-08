"use client";

import "./category-selection.css";
import { useUser } from "@/app/contexts/user-context";

const categories = {
  "Frontend Development": [
    { name: "HTML", image: "/html.png" },
    { name: "CSS", image: "/css.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "React", image: "/react.png" },
    { name: "Angular", image: "/angular.png" },
    { name: "Vue.js", image: "/vue.png" }
  ],
  "Backend Development": [
    { name: "Node.js", image: "/nodejs.png" },
    { name: "ASP.NET", image: "/aspnet.png" },
    { name: "Django", image: "/django.png" },
    { name: "Ruby on Rails", image: "/rubyonrails.png" }
  ],
  "Programming Languages": [
    { name: "Python", image: "/python.png" },
    { name: "Java", image: "/java.png" },
    { name: "C++", image: "/cplusplus.png" },
    { name: "C#", image: "/csharp.png" },
    { name: "Go", image: "/go.png" }
  ],
  "Database and Data Management": [
    { name: "SQL", image: "/sql.png" },
    { name: "MongoDB", image: "/mongodb.png" },
    { name: "PostgreSQL", image: "/postgresql.png" }
  ],
  "Cloud Computing": [
    { name: "AWS", image: "/aws.png" },
    { name: "Microsoft Azure", image: "/azure.png" },
    { name: "Google Cloud Platform", image: "/gcp.png" }
  ],
  "DevOps and Tools": [
    { name: "Docker", image: "/docker.png" },
    { name: "Kubernetes", image: "/kubernetes.png" },
    { name: "GitHub", image: "/github.png" },
    { name: "Terraform", image: "/terraform.png" }
  ],
  "AI and Data Science": [
    { name: "TensorFlow", image: "/tensorflow.png" },
    { name: "Tableau", image: "/tableau.png" },
    { name: "Hadoop", image: "/hadoop.png" }
  ],
  "Cybersecurity": [
    { name: "Ethical Hacking", image: "/ethicalhacking.png" },
    { name: "Network Security", image: "/networksecurity.png" },
    { name: "Cryptography", image: "/cryptography.png" }
  ],
  "Operating Systems": [
    { name: "Linux", image: "/linux.png" },
    { name: "Windows", image: "/windows.png" },
    { name: "macOS", image: "/macos.png" },
    { name: "Android", image: "/android.png" }
  ]
};

export default function CategorySelection({ onSelectCategory }) {
  const { user } = useUser();

  return (
    <div className="category-selection">
      <h2>Welcome, {user.name}! Select a Quiz Category:</h2>
      {Object.entries(categories).map(([categoryName, categoryItems], index) => (
        <div key={index} className="category-frame">
          <h3>{categoryName}</h3>
          <div className="categories">
            {categoryItems.map((category, index) => (
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
      ))}
    </div>
  );
}
