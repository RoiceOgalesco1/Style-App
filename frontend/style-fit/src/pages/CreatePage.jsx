import { useState } from 'react';
import Header from '../components/Header';
import OutfitPreview from '../components/OutfitPreview';
import CategorySelector from '../components/CategorySelector';
import { categories } from '../utils/categoryUtils';

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

  const handleUploadClick = () => {
    window.location.href = '/uploads';
  };

  return (
    <div className="min-h-screen bg-[#F8F1E9]">
      <Header />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
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
              <OutfitPreview
                outfitName={outfitName}
                onOutfitNameChange={setOutfitName}
                categories={categories}
                selectedOutfit={selectedOutfit}
                onRemoveItem={handleImageDeselect}
                onSaveOutfit={handleSaveOutfit}
                onClearOutfit={handleClearOutfit}
              />
            </div>

            {/* Right Side - Image Selection */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {categories.map(category => (
                  <CategorySelector
                    key={category.key}
                    category={category}
                    images={getImagesByCategory(category.key)}
                    selectedItem={selectedOutfit[category.key]}
                    onSelectItem={handleImageSelect}
                    onUploadClick={handleUploadClick}
                  />
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