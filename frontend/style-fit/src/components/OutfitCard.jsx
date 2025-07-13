import React from 'react';
import OutfitPhotoVertical from './OutfitPhotoVertical';

const OutfitCard = ({ outfit, getCategoryName, formatDate, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-3 shadow-md border border-[#bda28d] flex flex-col items-center w-48">
      {/* Outfit Header */}
      <div className="mb-2 text-center">
        <h3 className="text-sm font-bold text-[#2D2D2D]">
          Outfit #{outfit.id}
        </h3>
        <p className="text-[#769898] text-xs">
          {formatDate(outfit.date)}
        </p>
      </div>
      {/* Photos Vertical Stack */}
      <div className="flex flex-col gap-2 w-full">
        {Object.entries(outfit.photos).map(([index, photo]) => (
          <OutfitPhotoVertical
            key={index}
            photo={photo}
            category={getCategoryName(parseInt(index))}
            name={photo.name}
          />
        ))}
      </div>
      {/* Delete Button */}
      <button
        onClick={() => onDelete(outfit.id)}
        className="mt-3 px-3 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default OutfitCard; 