import { useState } from 'react';
import Header from '../components/Header';

const CreatePage = () => {
  // Mock data for uploaded images - in a real app, this would come from the backend
  const [uploadedImages] = useState([
    { id: 1, name: 'hat.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Hat', category: 'headwear' },
    { id: 2, name: 'cap.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Cap', category: 'headwear' },
    { id: 3, name: 'beanie.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Beanie', category: 'headwear' },
    { id: 4, name: 'shirt.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Shirt', category: 'top' },
    { id: 5, name: 'jacket.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Jacket', category: 'top' },
    { id: 6, name: 'sweater.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Sweater', category: 'top' },
    { id: 7, name: 't-shirt.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=T-Shirt', category: 'top' },
    { id: 8, name: 'pants.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Pants', category: 'bottom' },
    { id: 9, name: 'jeans.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Jeans', category: 'bottom' },
    { id: 10, name: 'shorts.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Shorts', category: 'bottom' },
    { id: 11, name: 'skirt.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Skirt', category: 'bottom' },
    { id: 12, name: 'shoes.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Shoes', category: 'footwear' },
    { id: 13, name: 'boots.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Boots', category: 'footwear' },
    { id: 14, name: 'sneakers.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Sneakers', category: 'footwear' },
    { id: 15, name: 'heels.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Heels', category: 'footwear' },
  ]);

  const [selectedOutfit, setSelectedOutfit] = useState({
    headwear: null,
    top: null,
    bottom: null,
    footwear: null
  });

  const [outfitName, setOutfitName] = useState('');

  const categories = [
    { key: 'headwear', name: 'Headwear', color: 'bg-[#769898]' },
    { key: 'top', name: 'Top', color: 'bg-[#d49f91]' },
    { key: 'bottom', name: 'Bottom', color: 'bg-[#bda28d]' },
    { key: 'footwear', name: 'Footwear', color: 'bg-[#769898]' }
  ];

  const getImagesByCategory = (category) => {
    return uploadedImages.filter(img => img.category === category);
  };

  const handleImageSelect = (category, image) => {
    setSelectedOutfit(prev => ({
      ...prev,
      [category]: image
    }));
  };

  const handleImageDeselect = (category) => {
    setSelectedOutfit(prev => ({
      ...prev,
      [category]: null
    }));
  };

  const handleSaveOutfit = () => {
    const selectedCount = Object.values(selectedOutfit).filter(item => item !== null).length;
    
    if (selectedCount === 0) {
      alert('Please select at least one item for your outfit.');
      return;
    }

    if (!outfitName.trim()) {
      alert('Please enter a name for your outfit.');
      return;
    }

    // Here you would typically save the outfit to your backend
    console.log('Saving outfit:', { name: outfitName, items: selectedOutfit });
    alert('Outfit saved successfully!');
    
    // Reset form
    setSelectedOutfit({
      headwear: null,
      top: null,
      bottom: null,
      footwear: null
    });
    setOutfitName('');
  };

  const handleClearOutfit = () => {
    if (window.confirm('Are you sure you want to clear your current outfit?')) {
      setSelectedOutfit({
        headwear: null,
        top: null,
        bottom: null,
        footwear: null
      });
      setOutfitName('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E9]">
      <Header />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-[#2D2D2D] mb-4">
              Create Your Outfit
            </h1>
            <p className="text-lg text-[#769898] max-w-2xl mx-auto mb-8">
              Select items from your uploaded photos to create a new outfit combination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Outfit Preview */}
            <div className="lg:col-span-1">
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
                      onChange={(e) => setOutfitName(e.target.value)}
                      placeholder="Enter outfit name..."
                      className="w-full px-3 py-1 border border-[#bda28d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d49f91] focus:border-transparent text-sm"
                    />
                  </div>
                  {/* Selected Items */}
                  <div className="space-y-2 mb-2">
                    {categories.map(category => (
                      <div key={category.key} className="border border-[#bda28d] rounded-lg p-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium text-white ${category.color}`}>
                            {category.name}
                          </span>
                          {selectedOutfit[category.key] && (
                            <button
                              onClick={() => handleImageDeselect(category.key)}
                              className="text-red-500 hover:text-red-700 text-xs"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        {selectedOutfit[category.key] ? (
                          <div className="relative">
                            <img
                              src={selectedOutfit[category.key].preview}
                              alt={selectedOutfit[category.key].name}
                              className="w-full h-20 object-cover rounded-md"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 rounded-b-md">
                              <p className="text-white text-xs font-medium">
                                {selectedOutfit[category.key].name}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center border-2 border-dashed border-[#bda28d]">
                            <p className="text-[#769898] text-xs">No {category.name.toLowerCase()} selected</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={handleSaveOutfit}
                      className="w-full px-4 py-2 bg-[#d49f91] text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[#769898] transition"
                    >
                      Save Outfit
                    </button>
                    <button
                      onClick={handleClearOutfit}
                      className="w-full px-4 py-2 bg-gray-200 text-[#2D2D2D] text-sm font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
                    >
                      Clear Outfit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Selection */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {categories.map(category => (
                  <div key={category.key} className="bg-white rounded-2xl p-4 shadow-lg border border-[#bda28d]">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-0.5 rounded-full text-xs font-medium text-white ${category.color}`}>
                        {category.name}
                      </span>
                      <span className="ml-2 text-xs text-[#769898]">
                        {getImagesByCategory(category.key).length} items available
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {getImagesByCategory(category.key).map(image => (
                        <div
                          key={image.id}
                          onClick={() => handleImageSelect(category.key, image)}
                          className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                            selectedOutfit[category.key]?.id === image.id
                              ? 'border-[#d49f91] ring-2 ring-[#d49f91] ring-opacity-50'
                              : 'border-[#bda28d] hover:border-[#769898]'
                          }`}
                        >
                          <img
                            src={image.preview}
                            alt={image.name}
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                            <p className="text-white text-xs font-medium truncate">
                              {image.name}
                            </p>
                          </div>
                          {selectedOutfit[category.key]?.id === image.id && (
                            <div className="absolute top-1 right-1 w-5 h-5 bg-[#d49f91] rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {getImagesByCategory(category.key).length === 0 && (
                      <div className="text-center py-6">
                        <p className="text-[#769898] mb-2">No {category.name.toLowerCase()} items uploaded yet.</p>
                        <button
                          onClick={() => window.location.href = '/uploads'}
                          className="px-3 py-1 bg-[#d49f91] text-white font-semibold rounded-lg hover:bg-[#769898] transition text-xs"
                        >
                          Upload {category.name}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage; 