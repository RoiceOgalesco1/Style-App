import { useState } from 'react';
import Header from '../components/Header';
import OutfitCard from '../components/OutfitCard';
import PaginationButton from '../components/PaginationButton';

const OUTFITS_PER_PAGE = 4;

const GalleryPage = () => {
  const [uploadedOutfits, setUploadedOutfits] = useState([
    {
      id: 1,
      date: '2024-01-15',
      photos: {
        0: { name: 'hat.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Headwear' },
        1: { name: 'shirt.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Top' },
        2: { name: 'pants.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Bottom' },
        3: { name: 'shoes.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Footwear' }
      }
    },
    {
      id: 2,
      date: '2024-01-14',
      photos: {
        0: { name: 'cap.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Headwear' },
        1: { name: 'jacket.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Top' },
        2: { name: 'jeans.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Bottom' },
        3: { name: 'boots.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Footwear' }
      }
    },
    {
      id: 3,
      date: '2024-01-13',
      photos: {
        0: { name: 'beanie.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Headwear' },
        1: { name: 'sweater.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Top' },
        2: { name: 'shorts.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Bottom' },
        3: { name: 'sneakers.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Footwear' }
      }
    },
    {
      id: 4,
      date: '2024-01-12',
      photos: {
        0: { name: 'bandana.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Headwear' },
        1: { name: 't-shirt.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Top' },
        2: { name: 'skirt.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Bottom' },
        3: { name: 'heels.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Footwear' }
      }
    },
    {
      id: 5,
      date: '2024-01-11',
      photos: {
        0: { name: 'visor.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Headwear' },
        1: { name: 'blazer.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Top' },
        2: { name: 'leggings.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Bottom' },
        3: { name: 'flats.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Footwear' }
      }
    },
    {
      id: 6,
      date: '2024-01-10',
      photos: {
        0: { name: 'fedora.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Headwear' },
        1: { name: 'vest.jpg', preview: 'https://via.placeholder.com/160x160/bda28d/ffffff?text=Top' },
        2: { name: 'culottes.jpg', preview: 'https://via.placeholder.com/160x160/769898/ffffff?text=Bottom' },
        3: { name: 'loafers.jpg', preview: 'https://via.placeholder.com/160x160/d49f91/ffffff?text=Footwear' }
      }
    }
  ]);

  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(uploadedOutfits.length / OUTFITS_PER_PAGE);

  const getCategoryName = (photoNumber) => {
    switch (photoNumber) {
      case 0: return 'Headwear';
      case 1: return 'Top';
      case 2: return 'Bottom';
      case 3: return 'Footwear';
      default: return `Photo ${photoNumber + 1}`;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDeleteOutfit = (outfitId) => {
    if (window.confirm('Are you sure you want to delete this outfit?')) {
      setUploadedOutfits(prev => prev.filter(outfit => outfit.id !== outfitId));
    }
  };

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const outfitsToShow = uploadedOutfits.slice(page * OUTFITS_PER_PAGE, (page + 1) * OUTFITS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#F8F1E9]">
      <Header />
      <div className="py-10 px-4">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-[#2D2D2D] mb-2">
              Your Outfit Gallery
            </h1>
            <p className="text-base text-[#769898] max-w-2xl mx-auto">
              View and manage all your uploaded outfit combinations.
            </p>
          </div>

          {/* Gallery Row */}
          <div className="flex flex-row justify-center gap-8">
            {outfitsToShow.map((outfit) => (
              <OutfitCard
                key={outfit.id}
                outfit={outfit}
                getCategoryName={getCategoryName}
                formatDate={formatDate}
                onDelete={handleDeleteOutfit}
              />
            ))}
          </div>

          {/* Pagination and Upload New Button Row */}
          <div className="flex flex-row justify-center items-center gap-6 mt-10">
            {totalPages > 1 && (
              <PaginationButton
                onClick={handlePrev}
                disabled={page === 0}
                className={`px-4 py-2 rounded bg-[#bda28d] text-white font-semibold shadow-md transition ${page === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#769898]'}`}
              >
                Previous
              </PaginationButton>
            )}
            <button
              onClick={() => window.location.href = '/uploads'}
              className="px-6 py-2 bg-[#d49f91] text-white font-semibold rounded-lg shadow-md hover:bg-[#769898] transition text-base"
            >
              Upload New Outfit
            </button>
            {totalPages > 1 && (
              <PaginationButton
                onClick={handleNext}
                disabled={page === totalPages - 1}
                className={`px-4 py-2 rounded bg-[#bda28d] text-white font-semibold shadow-md transition ${page === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#769898]'}`}
              >
                Next
              </PaginationButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 