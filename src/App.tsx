
import React, { useState } from 'react';
import { MAP_POINTS } from './constants';
import type { Location } from './types';
import LocationModal from './components/LocationModal';
import MapPoint from './components/MapPoint';

const App: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handlePointClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-300">Mapa Interativo de Campi</h1>
        <p className="text-lg text-gray-400 mt-2">Explore os polos de inovação e educação em Santa Catarina</p>
      </header>
      
      <main className="w-full max-w-6xl mx-auto">
        <div className="relative w-full aspect-[1024/650] shadow-2xl shadow-teal-500/20 rounded-lg overflow-hidden">
          <img 
            src="/santa_catarina_map.png"
            alt="Mapa de Santa Catarina com pontos indicando os campi"
            className="w-full h-full object-cover"
          />
          {MAP_POINTS.map((point) => (
            <MapPoint key={point.id} location={point} onClick={handlePointClick} />
          ))}
        </div>
      </main>

      <LocationModal location={selectedLocation} onClose={handleCloseModal} />

      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Passe o mouse sobre um ponto para ver o nome e clique para mais detalhes.</p>
        <p>Desenvolvido com React e Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;