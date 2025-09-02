// DEPRECATED: This file is a duplicate and should be deleted. The correct file is in the /src/components directory.

import React from 'react';
import type { Location } from '../types';

interface MapPointProps {
  location: Location;
  onClick: (location: Location) => void;
}

const MapPoint: React.FC<MapPointProps> = ({ location, onClick }) => {
  return (
    <div
      className="absolute group transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: location.position.top, left: location.position.left }}
    >
      <button
        onClick={() => onClick(location)}
        className="w-8 h-8 rounded-full bg-teal-400/50 flex items-center justify-center border-2 border-teal-300 transition-all duration-300 ease-in-out hover:bg-teal-300 hover:scale-125 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50"
        aria-label={`Saiba mais sobre ${location.name}`}
      >
        <span className="text-white font-bold text-sm">{location.id}</span>
        <div className="absolute bottom-full mb-2 w-max max-w-xs px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          {location.name}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
        </div>
      </button>
      <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-teal-300 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping opacity-50 group-hover:opacity-0 -z-10"></div>
    </div>
  );
};

export default MapPoint;