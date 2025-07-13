import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    // Here you would typically clear user session/tokens
    navigate('/login');
  };

  const handleGallery = () => {
    navigate('/gallery');
  };

  const handleUploads = () => {
    navigate('/uploads');
  };

  const handleCreate = () => {
    navigate('/create');
  };

  const handleSettings = () => {
    // Navigate to settings page (you can create this later)
    alert('Settings page coming soon!');
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
              <header className="bg-[#f9e8ce] shadow-md border-b border-[#bda28d]">
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleGallery}
              className="px-4 py-2 text-[#2D2D2D] hover:text-[#769898] transition-colors rounded-lg hover:bg-[#F8F1E9]"
            >
              Gallery
            </button>

            <button
              onClick={handleUploads}
              className="px-4 py-2 text-[#2D2D2D] hover:text-[#769898] transition-colors rounded-lg hover:bg-[#F8F1E9]"
            >
              Uploads
            </button>

            <button
              onClick={handleCreate}
              className="px-4 py-2 text-[#2D2D2D] hover:text-[#769898] transition-colors rounded-lg hover:bg-[#F8F1E9]"
            >
              Create
            </button>
          </div>

          {/* Right Profile Section */}
          <div className="relative">
            <button
              onClick={toggleSettings}
              className="w-10 h-10 rounded-full bg-[#d49f91] text-white flex items-center justify-center hover:bg-[#769898] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Settings Dropdown */}
            {showSettings && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#bda28d] py-2 z-50">
                <button
                  onClick={handleSettings}
                  className="w-full px-4 py-2 text-left text-[#2D2D2D] hover:bg-[#F8F1E9] transition-colors"
                >
                  Settings
                </button>
                <hr className="my-1 border-[#bda28d]" />
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 