import React from 'react';

const SelectedItemCard = ({ 
  category, 
  selectedItem, 
  onRemove 
}) => {
  const getCategoryBadgeClass = (categoryKey) => {
    const badgeClasses = {
      headwear: 'category-badge-headwear',
      top: 'category-badge-top',
      bottom: 'category-badge-bottom',
      footwear: 'category-badge-footwear'
    };
    return `category-badge ${badgeClasses[categoryKey] || 'category-badge-headwear'}`;
  };

  return (
    <div className="border border-[#bda28d] rounded-lg p-2">
      <div className="flex items-center justify-between mb-1">
        <span className={getCategoryBadgeClass(category.key)}>
          {category.name}
        </span>
        {selectedItem && (
          <button
            onClick={() => onRemove(category.key)}
            className="remove-button"
          >
            Remove
          </button>
        )}
      </div>
      {selectedItem ? (
        <div className="image-container-large rounded-md">
          <img
            src={selectedItem.preview}
            alt={selectedItem.name}
            className="image rounded-md"
          />
          <div className="image-overlay-rounded">
            <p className="image-text">
              {selectedItem.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="border-dashed-placeholder">
          <p className="text-muted text-small">No {category.name.toLowerCase()} selected</p>
        </div>
      )}
    </div>
  );
};

export default SelectedItemCard; 