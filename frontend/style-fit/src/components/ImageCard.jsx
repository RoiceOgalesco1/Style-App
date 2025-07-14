import React from 'react';

const ImageCard = ({ 
  image, 
  isSelected, 
  onSelect
}) => {
  return (
    <div
      onClick={() => onSelect(image)}
      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
        isSelected
          ? 'border-[#d49f91] ring-2 ring-[#d49f91] ring-opacity-50'
          : 'border-[#bda28d] hover:border-[#769898]'
      }`}
    >
      <div className="relative w-full h-24">
        <img
          src={image.preview}
          alt={image.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
          <p className="text-white text-xs font-medium leading-tight">
            {image.name}
          </p>
        </div>
        {isSelected && (
          <div className="absolute top-1 right-1 w-5 h-5 bg-[#d49f91] rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard; 