import { useParams } from "react-router-dom";
import { articles } from "../Services/GlobalApi";
import CommentSection from "../Components/CommentSection";
import DarkModeToggle from "../Components/DarkModeToggle";
const ArticleDetail = () => {
    
  const { id } = useParams(); // Get the article ID from the URL
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-gray-600 mt-2">{article.category}</p>
      <p className="mt-4">{article.content}</p>
      {/* Comment Section */}
      <CommentSection />
      
    </div>
  );
};

export default ArticleDetail;
