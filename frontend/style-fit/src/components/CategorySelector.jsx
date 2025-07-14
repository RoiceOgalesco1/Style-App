import React from 'react';
import ImageCard from './ImageCard';
import Button from './Button';

const CategorySelector = ({ 
  category, 
  images, 
  selectedItem, 
  onSelectItem,
  onUploadClick 
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-[#bda28d]">
      <div className="flex items-center mb-4">
        <span className={`px-3 py-0.5 rounded-full text-xs font-medium text-white ${category.color}`}>
          {category.name}
        </span>
        <span className="ml-2 text-xs text-[#769898]">
          {images.length} items available
        </span>
      </div>

      {images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map(image => (
            <ImageCard
              key={image.id}
              image={image}
              isSelected={selectedItem?.id === image.id}
              onSelect={() => onSelectItem(category.key, image)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-6">
          <p className="text-[#769898] mb-2">No {category.name.toLowerCase()} items uploaded yet.</p>
          <Button
            onClick={onUploadClick}
            variant="primary"
            size="small"
          >
            Upload {category.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategorySelector; 