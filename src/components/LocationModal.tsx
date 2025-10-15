
import React from 'react';
import type { Location } from '../types';

interface LocationModalProps {
  location: Location | null;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ location, onClose }) => {
  if (!location) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-xl shadow-2xl shadow-teal-500/20 w-full max-w-md m-4 transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="p-6 md:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="pr-8">
            <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">{location.region}</span>
            <h2 className="text-3xl font-bold text-white mt-1">{location.name}</h2>
          </div>

          <p className="text-gray-300 mt-4 text-base leading-relaxed">
            {location.description}
          </p>

          <div className="mt-8 flex justify-end gap-4">
            {location.googleMapsUrl && (
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Ver no Google Maps
              </a>
            )}
            <button className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation-name: fade-in-scale;
          animation-duration: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default LocationModal;