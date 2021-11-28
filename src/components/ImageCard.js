import React from "react";

const ImageCard = ({image}) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt="Sunset in the mountains"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-500">
          Photo by {image.user}
        </div>
        <ul className="flex  text-gray-500 text-sm items-center px-3 py-1 space-x-3">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>

          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs  text-gray-500 mr-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
