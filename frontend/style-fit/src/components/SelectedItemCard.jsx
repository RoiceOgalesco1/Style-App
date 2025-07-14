import React from 'react';

const SelectedItemCard = ({ 
  category, 
  selectedItem, 
  onRemove 
}) => {
  return (
    <div className="border border-[#bda28d] rounded-lg p-2">
      <div className="flex items-center justify-between mb-1">
        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${category.color}`}>
          {category.name}
        </span>
        {selectedItem && (
          <button
            onClick={() => onRemove(category.key)}
            className="text-red-500 hover:text-red-700 text-xs"
          >
            Remove
          </button>
        )}
      </div>
      {selectedItem ? (
        <div className="relative w-full h-20 rounded-md">
          <img
            src={selectedItem.preview}
            alt={selectedItem.name}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 rounded-b-md">
            <p className="text-white text-xs font-medium leading-tight">
              {selectedItem.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center border-2 border-dashed border-[#bda28d]">
          <p className="text-[#769898] text-xs">No {category.name.toLowerCase()} selected</p>
        </div>
      )}
    </div>
  );
};

export default SelectedItemCard; 