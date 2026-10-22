import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Play } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface WaterIntroProps {
  onComplete: () => void;
}

export const WaterIntro: React.FC<WaterIntroProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const exitTriggeredRef = useRef(false);

  const startExitTransition = () => {
    if (exitTriggeredRef.current) return;
    exitTriggeredRef.current = true;
    setIsExiting(true);

    // Smoothly fade down audio
    if (videoRef.current) {
      const video = videoRef.current;
      const fadeInterval = setInterval(() => {
        if (video.volume > 0.08) {
          video.volume = Math.max(0, video.volume - 0.15);
        } else {
          video.volume = 0;
          clearInterval(fadeInterval);
        }
      }, 50);
    }

    // Call onComplete after transition finishes
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      onComplete();
    }, 700);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try autoplay with audio first, fallback to muted if browser blocks audio autoplay
    video.muted = isMuted;
    video.play().catch(() => {
      // Browser autoplay policy blocked unmuted audio: start muted
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => setIsPlaying(false));
    });

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);

        // At 9.0s the logo is settled on the clean white surface.
        // Start cross-fading into the live website before the video fades to black!
        if (video.currentTime >= 9.0 && !exitTriggeredRef.current) {
          startExitTransition();
        }
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const toggleMute = () => {
    soundFx.playUiClick();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSkip = () => {
    soundFx.playUiClick();
    startExitTransition();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none transition-opacity duration-700 ease-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* High-Definition Official Intro Video */}
      <video
        ref={videoRef}
        src="/intro-video.mp4"
        playsInline
        autoPlay
        preload="metadata"
        onEnded={startExitTransition}
        className="w-full h-full object-cover"
      />

      {/* Play button overlay if autoplay was blocked */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
          <button
            onClick={handleManualPlay}
            className="px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-xl"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Iniciar Abertura</span>
          </button>
        </div>
      )}

      {/* Top Floating Controls */}
      <div className={`absolute top-6 right-6 z-30 flex items-center gap-3 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 backdrop-blur-md text-white transition-all cursor-pointer shadow-lg"
          title={isMuted ? 'Ativar Áudio' : 'Silenciar'}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-cyan-400" />}
        </button>

        <button
          onClick={handleSkip}
          className="px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-900 font-bold text-xs tracking-wider uppercase transition-all shadow-xl flex items-center gap-2 cursor-pointer"
        >
          <span>Pular Abertura</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Progress Bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-30 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
export default WaterIntro;