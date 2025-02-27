import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const addComment = () => {
    if (input.trim() !== "") {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Comments</h2>
      
      {/* Comment Input Box */}
      <div className="mt-3">
        <textarea
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          rows="3"
          placeholder="Write a comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-3 border-b dark:border-gray-700 text-gray-700 dark:text-white"
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
