import React from 'react';
import SelectedItemCard from './SelectedItemCard';
import Button from './Button';

const OutfitPreview = ({ 
  outfitName,
  onOutfitNameChange,
  categories,
  selectedOutfit,
  onRemoveItem,
  onSaveOutfit,
  onClearOutfit
}) => {
  return (
    <div
      className="card flex flex-col"
      style={{ height: '770px', minHeight: '770px', maxHeight: '770px' }}
    >
      <div className="flex-1 overflow-y-auto">
        <h2>Outfit Preview</h2>
        
        {/* Outfit Name Input */}
        <div className="mb-2">
          <label>
            Outfit Name
          </label>
          <input
            type="text"
            value={outfitName}
            onChange={(e) => onOutfitNameChange(e.target.value)}
            placeholder="Enter outfit name..."
            className="py-1"
          />
        </div>
        
        {/* Selected Items */}
        <div className="space-y-2 mb-2">
          {categories.map(category => (
            <SelectedItemCard
              key={category.key}
              category={category}
              selectedItem={selectedOutfit[category.key]}
              onRemove={onRemoveItem}
            />
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            onClick={onSaveOutfit}
            variant="primary"
            size="medium"
            className="btn-full"
          >
            Save Outfit
          </Button>
          <Button
            onClick={onClearOutfit}
            variant="secondary"
            size="medium"
            className="btn-full"
          >
            Clear Outfit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OutfitPreview; 