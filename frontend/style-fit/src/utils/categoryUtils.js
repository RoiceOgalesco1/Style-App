// Category mapping utilities
export const getCategoryName = (photoNumber) => {
  switch (photoNumber) {
    case 0:
    case 1:
      return 'Headwear';
    case 2:
      return 'Top';
    case 3:
      return 'Bottom';
    case 4:
      return 'Footwear';
    default:
      return `Photo ${photoNumber + 1}`;
  }
};

export const getCategoryKey = (photoNumber) => {
  switch (photoNumber) {
    case 0:
    case 1:
      return 'headwear';
    case 2:
      return 'top';
    case 3:
      return 'bottom';
    case 4:
      return 'footwear';
    default:
      return `photo${photoNumber}`;
  }
};

export const categories = [
  { key: 'headwear', name: 'Headwear', color: 'bg-[#769898]' },
  { key: 'top', name: 'Top', color: 'bg-[#d49f91]' },
  { key: 'bottom', name: 'Bottom', color: 'bg-[#bda28d]' },
  { key: 'footwear', name: 'Footwear', color: 'bg-[#769898]' }
]; 