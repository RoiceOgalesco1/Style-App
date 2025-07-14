import React from 'react';

const ImageCard = ({ 
  image, 
  isSelected, 
  onSelect
}) => {
  return (
    <div
      onClick={() => onSelect(image)}
      className={`selectable-image ${
        isSelected ? 'selectable-image-selected' : 'selectable-image-unselected'
      }`}
    >
      <div className="image-container">
        <img
          src={image.preview}
          alt={image.name}
          className="image"
        />
        <div className="image-overlay">
          <p className="image-text">
            {image.name}
          </p>
        </div>
        {isSelected && (
          <div className="selection-indicator">
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