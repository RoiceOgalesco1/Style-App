import { getCategoryName } from '../utils/categoryUtils';

const PhotoUploadBox = ({ id, photoNumber, onPhotoChange, onPhotoDelete, photo, preview, imageName, onImageNameChange }) => {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoChange(id, file, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    onPhotoDelete(id);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#bda28d]">
      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 text-center">
        {getCategoryName(photoNumber)}
      </h3>
      <div className="space-y-4">
        {/* Image Name Input */}
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Image Name
          </label>
          <input
            type="text"
            value={imageName || ''}
            onChange={(e) => onImageNameChange(id, e.target.value)}
            placeholder={`Enter ${getCategoryName(photoNumber).toLowerCase()} name...`}
            className="w-full px-3 py-2 border border-[#bda28d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d49f91] focus:border-transparent text-sm"
          />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
          id={`photo${id}`}
        />
        <label
          htmlFor={`photo${id}`}
          className="block w-full h-64 border-2 border-dashed border-[#bda28d] rounded-lg cursor-pointer hover:border-[#769898] transition-colors"
        >
          {preview ? (
            <div className="w-full h-full flex items-center justify-center relative">
              <img
                src={preview}
                alt={`Preview ${getCategoryName(photoNumber)}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              {/* Delete Button Overlay */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDelete();
                }}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                title="Delete photo"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#769898]">
              <svg
                className="w-12 h-12 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-lg font-medium">Click to upload</p>
              <p className="text-sm text-[#bda28d]">or drag and drop</p>
            </div>
          )}
        </label>
        {photo && (
          <p className="text-sm text-[#769898] text-center">
            {imageName || photo.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default PhotoUploadBox; 