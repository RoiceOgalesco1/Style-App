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
    <div className="card-large">
      <h3 className="text-center">
        {getCategoryName(photoNumber)}
      </h3>
      <div className="space-y-4">
        {/* Image Name Input */}
        <div>
          <label>
            Image Name
          </label>
          <input
            type="text"
            value={imageName || ''}
            onChange={(e) => onImageNameChange(id, e.target.value)}
            placeholder={`Enter ${getCategoryName(photoNumber).toLowerCase()} name...`}
          />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          id={`photo${id}`}
        />
        <label
          htmlFor={`photo${id}`}
          className="upload-area"
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
                className="delete-button"
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
            <div className="upload-content">
              <svg
                className="upload-icon"
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
              <p className="upload-text">Click to upload</p>
              <p className="upload-subtext">or drag and drop</p>
            </div>
          )}
        </label>
        {photo && (
          <p className="text-muted text-center text-small">
            {imageName || photo.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default PhotoUploadBox; 