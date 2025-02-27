import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";

const categories = [
  { name: "Home", path: "/" },
  { name: "World", path: "/category/world" },
  { name: "Politics", path: "/category/india" },
  { name: "Sports", path: "/category/sports" },
  { name: "Technology", path: "/category/world" },
  { name: "India", path: "/category/india" },
  { name: "Health", path: "/category/sports" },
  { name: "Entertainment", path: "/category/sports" },

];

const CategoriesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white bg-black rounded-lg"
      
      >
        <TfiMenuAlt />
        {isOpen ? "Close Menu" : ""}
      </button>

      {/* Category Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-start p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-black text-lg mb-4"
          >
            <TfiMenuAlt />
          </button>

          {/* Category List */}
          <ul className="mt-4 w-full">
            {categories.map((category, index) => (
              <li key={index} className="w-full">
                <Link
                  to={category.path}
                  className="block w-full px-4 py-3 text-white  lg hover:bg-white-500"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoriesMenu
