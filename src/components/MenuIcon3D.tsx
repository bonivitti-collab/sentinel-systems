import React from 'react';

interface MenuIcon3DProps {
  name: 'home' | 'sites' | 'whatsapp' | 'about' | 'blog' | 'contact';
  isActive?: boolean;
}

export const MenuIcon3D: React.FC<MenuIcon3DProps> = ({ name, isActive }) => {
  const getIconContent = () => {
    switch (name) {
      case 'home':
        return (
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'scale-110 shadow-lg shadow-cyan-500/30' : 'shadow-md shadow-cyan-500/15'
          } bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 border border-white/60 ring-1 ring-black/5`}>
            {/* 3D Specular Highlight */}
            <div className="absolute inset-x-1.5 top-0.5 h-3.5 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            <svg className="w-5 h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        );

      case 'sites':
        return (
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'scale-110 shadow-lg shadow-indigo-500/30' : 'shadow-md shadow-indigo-500/15'
          } bg-gradient-to-br from-indigo-400 via-purple-500 to-violet-700 border border-white/60 ring-1 ring-black/5`}>
            {/* 3D Specular Highlight */}
            <div className="absolute inset-x-1.5 top-0.5 h-3.5 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            <svg className="w-5 h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
        );

      case 'whatsapp':
        return (
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'scale-110 shadow-lg shadow-emerald-500/30' : 'shadow-md shadow-emerald-500/15'
          } bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 border border-white/60 ring-1 ring-black/5`}>
            {/* 3D Specular Highlight */}
            <div className="absolute inset-x-1.5 top-0.5 h-3.5 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            <svg className="w-5 h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M8 12h.01M12 12h.01M16 12h.01" />
            </svg>
          </div>
        );

      case 'about':
        return (
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'scale-110 shadow-lg shadow-blue-500/30' : 'shadow-md shadow-blue-500/15'
          } bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-600 border border-white/60 ring-1 ring-black/5`}>
            {/* 3D Specular Highlight */}
            <div className="absolute inset-x-1.5 top-0.5 h-3.5 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            <svg className="w-5 h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        );

      case 'blog':
        return (
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'scale-110 shadow-lg shadow-amber-500/30' : 'shadow-md shadow-amber-500/15'
          } bg-gradient-to-br from-amber-400 via-orange-500 to-rose-600 border border-white/60 ring-1 ring-black/5`}>
            {/* 3D Specular Highlight */}
            <div className="absolute inset-x-1.5 top-0.5 h-3.5 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            <svg className="w-5 h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M6 6h10M6 10h10" />
            </svg>
          </div>
        );

      case 'contact':
        return (
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'scale-110 shadow-lg shadow-teal-500/30' : 'shadow-md shadow-teal-500/15'
          } bg-gradient-to-br from-teal-400 via-cyan-500 to-emerald-600 border border-white/60 ring-1 ring-black/5`}>
            {/* 3D Specular Highlight */}
            <div className="absolute inset-x-1.5 top-0.5 h-3.5 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            <svg className="w-5 h-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </div>
        );
    }
  };

  return <div className="shrink-0">{getIconContent()}</div>;
};

export default MenuIcon3D;
