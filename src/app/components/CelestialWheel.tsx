// components/CelestialWheel.tsx
'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CelestialWheelProps {
  size?: number;
  spinDuration?: number;
  className?: string;
}

export default function CelestialWheel({
  size = 220,
  spinDuration = 1.4,
  className = '',
}: CelestialWheelProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(180); // Start at 180° so sun is up for light mode

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggle = () => {
    // Always rotate clockwise by adding 180 degrees
    setRotation(rotation + 180);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`relative flex items-center justify-center rounded-full overflow-hidden bg-transparent focus:outline-none focus:ring-0 ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: 'none',
        background: 'transparent',
        outline: 'none',
      }}
    >
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: spinDuration, ease: 'easeInOut' }}
        className="relative"
      >
        <Image
          src="/wheel.jpg"
          alt="Celestial Wheel"
          width={size}
          height={size}
          draggable={false}
          className="select-none"
          style={{ pointerEvents: 'none' }}
        />

        {/* Arrow pointer */}
          <div
            className="absolute left-1/2 top-1/2 origin-center"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="absolute left-[calc(50%-2px)] top-[-46%] h-[30%] w-[4px] rounded-full"
              style={{
                backgroundColor: '#5a3b1c', // earthy bronze tone
                boxShadow: 'none',
              }}
            />
          </div>
      </motion.div>

    </motion.button>
  );
}