import { useState } from 'react';
import PhotoUploadBox from '../components/PhotoUploadBox';
import Header from '../components/Header';
import Button from '../components/Button';

const UploadsPage = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(4);
  const [photos, setPhotos] = useState({});
  const [previews, setPreviews] = useState({});
  const [imageNames, setImageNames] = useState({});

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
    setImageNames(prev => {
      const newNames = { ...prev };
      delete newNames[id];
      return newNames;
    });
  };

  const handleImageNameChange = (id, name) => {
    setImageNames(prev => ({ ...prev, [id]: name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadedPhotos = Object.keys(photos);
    if (uploadedPhotos.length > 0) {
      alert('Photos uploaded successfully! (This is a test message)');
      // Here you would typically send the photos to your backend
      console.log('Photos:', photos);
      console.log('Image Names:', imageNames);
    } else {
      alert('Please upload at least one photo before submitting.');
    }
  };

  const renderGrid = () => {
    const gridClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-upload'
    };

    return (
      <div className={`grid ${gridClasses[numberOfBoxes]}`}>
        {Array.from({ length: numberOfBoxes }, (_, index) => (
          <PhotoUploadBox
            key={index}
            id={index}
            photoNumber={index + 1}
            onPhotoChange={handlePhotoChange}
            onPhotoDelete={handlePhotoDelete}
            onImageNameChange={handleImageNameChange}
            photo={photos[index]}
            preview={previews[index]}
            imageName={imageNames[index]}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <Header />
      <div className="page-content">
        <div className="max-w-6xl mx-auto">
        <div className="page-header">
          <h1>Welcome to Vesture</h1>
          <p className="page-description">
            Upload photos to get started. Mix and match to build your outfit.
          </p>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {renderGrid()}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={Object.keys(photos).length === 0}
              variant="primary"
              size="large"
            >
              Add Photos
            </Button>
          </div>
        </form>

        {/* Instructions */}
        <div className="mt-12 card">
          <h3>Upload Guidelines</h3>
          <ul className="space-y-2 text-muted">
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