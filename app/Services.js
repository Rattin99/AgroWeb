"use client"
import { useState,useEffect,useRef } from "react";





export const Services = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="scrolling-div bg-blue-500 absolute bottom-0 w-full" style={{ transform: `translateY(-${scrollPosition}px)` }}>
        Div 1
      </div>
      <div className="scrolling-div bg-green-500 absolute bottom-0 w-full" style={{ transform: `translateY(-${scrollPosition + 200}px)` }}>
        Div 2
      </div>
      <div className="scrolling-div bg-yellow-500 absolute bottom-0 w-full" style={{ transform: `translateY(-${scrollPosition + 400}px)` }}>
        Div 3
      </div>
    </div>
  );
}