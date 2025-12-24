import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  iconName: string;
}

function CarouselItem({ item, index, itemWidth }: any) {
  return (
    <motion.div
      layout
      className="relative shrink-0 flex flex-col items-start justify-between rounded-xl overflow-hidden shadow-sm"
      style={{ 
        width: itemWidth, 
        height: '100%', 
        backgroundColor: 'var(--bg-app)', 
        borderColor: 'var(--border-main)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div className="p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg mb-4" 
             style={{ backgroundColor: 'color-mix(in srgb, var(--accent), transparent 90%)', color: 'var(--accent)' }}>
          <span 
            className="w-6 h-6" 
            style={{
              backgroundColor: 'currentColor',
              maskImage: `url(https://api.iconify.design/${item.iconName.replace(':', '/')}.svg)`,
              WebkitMaskImage: `url(https://api.iconify.design/${item.iconName.replace(':', '/')}.svg)`,
              maskRepeat: 'no-repeat',
              maskSize: 'contain'
            }}
          />
        </div>
        <div className="font-bold text-lg leading-tight" style={{ color: 'var(--text-main)' }}>{item.title}</div>
        <p className="text-sm mt-2 leading-relaxed opacity-70" style={{ color: 'var(--text-main)' }}>{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({ items = [], baseWidth = 350, autoplay = true, autoplayDelay = 3000 }: any) {
  const itemWidth = baseWidth - 32;
  const trackItemOffset = itemWidth + 16;
  const [position, setPosition] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    animate(x, -(position * trackItemOffset), { type: 'spring', stiffness: 200, damping: 25 });
  }, [position, trackItemOffset, x]);

  useEffect(() => {
    if (!autoplay || items.length <= 1) return;
    const timer = setInterval(() => {
      setPosition((prev) => (prev + 1) % items.length);
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, items.length, autoplayDelay]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="overflow-hidden w-full px-4">
        <motion.div className="flex gap-4" style={{ x }}>
          {items.map((item: any, index: number) => (
            <CarouselItem key={item.id || index} item={item} index={index} itemWidth={itemWidth} />
          ))}
        </motion.div>
      </div>
      <div className="flex gap-2 mt-8">
        {items.map((_: any, i: number) => (
          <button
            title={items[i].title}
            key={i}
            onClick={() => setPosition(i)}
            className="h-1.5 transition-all duration-300 rounded-full"
            style={{ 
              width: position === i ? '2rem' : '0.5rem', 
              backgroundColor: position === i ? 'var(--accent)' : 'var(--border-main)' 
            }}
          />
        ))}
      </div>
    </div>
  );
}