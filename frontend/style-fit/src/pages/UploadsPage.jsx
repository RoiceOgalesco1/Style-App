import { useState } from 'react';
import PhotoUploadBox from '../components/PhotoUploadBox';
import Header from '../components/Header';

const UploadsPage = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(4);
  const [photos, setPhotos] = useState({});
  const [previews, setPreviews] = useState({});

  const handlePhotoChange = (id, file, preview) => {
    setPhotos(prev => ({ ...prev, [id]: file }));
    setPreviews(prev => ({ ...prev, [id]: preview }));
  };

  const handlePhotoDelete = (id) => {
    setPhotos(prev => {
      const newPhotos = { ...prev };
      delete newPhotos[id];
      return newPhotos;
    });
    setPreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[id];
      return newPreviews;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadedPhotos = Object.keys(photos);
    if (uploadedPhotos.length === numberOfBoxes) {
      alert('Photos uploaded successfully! (This is a test message)');
      // Here you would typically send the photos to your backend
      console.log('Photos:', photos);
    } else {
      alert(`Please upload all ${numberOfBoxes} photos before submitting.`);
    }
  };

  const renderGrid = () => {
    const gridClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    return (
      <div className={`grid ${gridClasses[numberOfBoxes]} gap-8`}>
        {Array.from({ length: numberOfBoxes }, (_, index) => (
          <PhotoUploadBox
            key={index}
            id={index}
            photoNumber={index + 1}
            onPhotoChange={handlePhotoChange}
            onPhotoDelete={handlePhotoDelete}
            photo={photos[index]}
            preview={previews[index]}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F1E9]">
      <Header />
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#2D2D2D] mb-4">
            Welcome to Vesture
          </h1>
          <p className="text-lg text-[#769898] max-w-2xl mx-auto mb-8">
            Upload photos to get started. Mix and match to build your outfit.
          </p>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderGrid()}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={Object.keys(photos).length !== numberOfBoxes}
              className="px-8 py-3 bg-[#d49f91] text-white font-semibold rounded-lg shadow-md hover:bg-[#769898] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Photos
            </button>
          </div>
        </form>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-[#bda28d]">
          <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
            Upload Guidelines
          </h3>
          <ul className="space-y-2 text-[#769898]">
            <li className="flex items-start">
              <span className="text-[#d49f91] mr-2">•</span>
              Upload clear, well-lit photos for best results
            </li>
            <li className="flex items-start">
              <span className="text-[#d49f91] mr-2">•</span>
              Supported formats: JPG, PNG
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UploadsPage; 