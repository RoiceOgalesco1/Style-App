import React from 'react';
import Button from './Button';

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
          <div key={index} className="relative group w-full">
            <div className="aspect-square rounded-md overflow-hidden border border-[#bda28d] w-full h-32">
              <img
                src={photo.preview}
                alt={`${getCategoryName(parseInt(index))} - ${photo.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                <p className="text-white text-xs font-medium leading-tight">
                  {getCategoryName(parseInt(index))}
                </p>
                <p className="text-white/80 text-[11px] leading-tight">
                  {photo.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Delete Button */}
      <Button
        onClick={() => onDelete(outfit.id)}
        variant="danger"
        size="small"
        className="mt-3"
      >
        Delete
      </Button>
    </div>
  );
};

export default OutfitCard; 