import React from 'react';

const OutfitPhotoVertical = ({ photo, category, name }) => {
  return (
    <div className="relative group w-full">
      <div className="aspect-square rounded-md overflow-hidden border border-[#bda28d] w-full h-32">
        <img
          src={photo.preview}
          alt={`${category} - ${photo.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
        <p className="text-white text-xs font-medium leading-tight">
          {category}
        </p>
        <p className="text-white/80 text-[11px] leading-tight">
          {photo.name}
        </p>
      </div>
    </div>
  );
};

export default OutfitPhotoVertical; 