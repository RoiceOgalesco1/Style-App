import React from 'react';
import Button from './Button';

const OutfitCard = ({ outfit, getCategoryName, formatDate, onDelete }) => {
  return (
    <div className="card-small flex flex-col items-center w-48">
      {/* Outfit Header */}
      <div className="mb-2 text-center">
        <h3 className="text-sm font-bold text-[#2D2D2D]">
          Outfit #{outfit.id}
        </h3>
        <p className="text-muted text-small">
          {formatDate(outfit.date)}
        </p>
      </div>
      {/* Photos Vertical Stack */}
      <div className="flex flex-col gap-2 w-full">
        {Object.entries(outfit.photos).map(([index, photo]) => (
          <div key={index} className="relative group w-full">
            <div className="image-container-square">
              <img
                src={photo.preview}
                alt={`${getCategoryName(parseInt(index))} - ${photo.name}`}
                className="image"
              />
              <div className="image-overlay">
                <p className="image-text">
                  {getCategoryName(parseInt(index))}
                </p>
                <p className="image-subtext">
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