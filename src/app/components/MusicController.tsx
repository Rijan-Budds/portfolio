"use client";
import { useMusic } from "../context/MusicContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function MusicController() {
  const { isPlaying, toggleMusic } = useMusic();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 group">
      <button
        onClick={toggleMusic}
        className="bg-accent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label={isPlaying ? "Pause Lofi" : "Play Lofi"}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
      </button>

      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap 
                       bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
                       transition-opacity duration-200 pointer-events-none">
        {isPlaying ? "Pause Lofi" : "Play Lofi"}
      </span>
    </div>
  );
}
