import React from 'react';
import { CardProps } from '@/interfaces';
import { FaSearch } from 'react-icons/fa'; // or any icon you want

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      className="bg-gray-700 rounded-lg shadow hover:shadow-md transition cursor-pointer"
      onClick={onClick}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <FaSearch className="text-white text-sm hover:text-gray-300" />
        </div>
        {description && <p className="text-gray-300 text-sm mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default Card;

