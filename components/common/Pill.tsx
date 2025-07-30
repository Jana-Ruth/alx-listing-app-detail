import React from 'react';

type PillProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
};

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
