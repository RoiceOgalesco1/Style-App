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
  const getCategoryBadgeClass = (categoryKey) => {
    const badgeClasses = {
      headwear: 'category-badge-headwear',
      top: 'category-badge-top',
      bottom: 'category-badge-bottom',
      footwear: 'category-badge-footwear'
    };
    return `category-badge category-badge-large ${badgeClasses[categoryKey] || 'category-badge-headwear'}`;
  };

  return (
    <div className="card">
      <div className="flex items-center mb-4">
        <span className={getCategoryBadgeClass(category.key)}>
          {category.name}
        </span>
        <span className="ml-2 text-muted text-small">
          {images.length} items available
        </span>
      </div>

      {images.length > 0 ? (
        <div className="grid-responsive">
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
          <p className="text-muted mb-2">No {category.name.toLowerCase()} items uploaded yet.</p>
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