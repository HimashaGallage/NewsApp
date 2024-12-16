import React from 'react';
import { timestampToDate } from '../../utils/dateUtils';

const NewsCard = ({ newsItem }) => {
  const { url, image, source, datetime, headline } = newsItem;

  return (
    <a 
      className="group flex flex-row sm:flex-col sm:p-4 bg-primary transition duration-75 hover:bg-hover"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image}
        alt={`alt`}
        className="w-1/3 p-2 sm:ml-0 sm:w-full h-40 sm:object-cover"
      />
      <div className="float-right w-2/3 sm:w-full ml-1 sm:ml-0 p-2">
        <div className="text-sm bg-primary text-secondary transition duration-75 group-hover:bg-hover">
          {source}
          {datetime && (
            <span className="float-right text-secondary transition duration-75 group-hover:bg-hover">
              {timestampToDate({ timestamp: datetime })}
            </span>
          )}
        </div>
        <h2 className="text-base font-semibold mt-2 text-secondary transition duration-75 group-hover:bg-hover">
          {headline}
        </h2>
      </div>
    </a>
  );
};

export default NewsCard;