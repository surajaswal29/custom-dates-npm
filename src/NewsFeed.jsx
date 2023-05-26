import React from "react";

const NewsFeed = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-lg font-semibold">My Social Media</h1>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />

        {/* Navigation */}
        <nav className="flex mb-4">
          <a href="#" className="mr-4 text-blue-500">
            Home
          </a>
          <a href="#" className="mr-4 text-gray-500">
            Profile
          </a>
          <a href="#" className="text-gray-500">
            Settings
          </a>
        </nav>

        {/* News Feed */}
        <div className="space-y-4">
          {/* Post 1 */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="user-avatar.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <p className="font-semibold">John Doe</p>
              </div>
              <button className="text-blue-500">Like</button>
            </div>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Comments */}
            <div className="mt-2">
              {/* Comment 1 */}
              <div className="flex items-center mb-2">
                <img
                  src="comment-avatar.png"
                  alt="Comment Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="font-semibold">Jane Smith</p>
                <button className="text-blue-500 ml-auto">Like</button>
              </div>
              <p className="text-gray-800">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>

              {/* Comment 2 */}
              <div className="flex items-center mb-2">
                <img
                  src="comment-avatar.png"
                  alt="Comment Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="font-semibold">Alex Johnson</p>
                <button className="text-blue-500 ml-auto">Like</button>
              </div>
              <p className="text-gray-800">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>

              {/* View more comments */}
              <button className="text-blue-500 mt-2">
                View more comments...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
