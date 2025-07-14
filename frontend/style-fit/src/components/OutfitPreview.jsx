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
      className="bg-white rounded-2xl p-4 shadow-lg border border-[#bda28d] flex flex-col"
      style={{ height: '770px', minHeight: '770px', maxHeight: '770px' }}
    >
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">Outfit Preview</h2>
        
        {/* Outfit Name Input */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Outfit Name
          </label>
          <input
            type="text"
            value={outfitName}
            onChange={(e) => onOutfitNameChange(e.target.value)}
            placeholder="Enter outfit name..."
            className="w-full px-3 py-1 border border-[#bda28d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d49f91] focus:border-transparent text-sm"
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
            className="w-full"
          >
            Save Outfit
          </Button>
          <Button
            onClick={onClearOutfit}
            variant="secondary"
            size="medium"
            className="w-full"
          >
            Clear Outfit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OutfitPreview; 