import { Link } from "react-router-dom";
import { articles } from "../Services/GlobalApi";

const IntroPost = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Latest News</h1>
      {articles.map((article) => (
        <div key={article.id} className="p-4 border-b">
            <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"/>
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p>{article.summary}</p>
          <Link to={`/article/${article.id}`} className="text-blue-500 mt-2 block">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IntroPost;
