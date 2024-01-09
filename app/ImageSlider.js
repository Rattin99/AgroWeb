"use client"
import React, { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion';
const ImageSlider = ({ images }) => {


    const [width, setwidth] = useState();
    const carousel = useRef();

    useEffect(() => {
        setwidth((carousel.current.scrollWidth - carousel.current.offsetWidth))
    },[])

  return (
    <div  className="w-4/5 h-4/5 overflow-hidden">
        <motion.div ref={carousel} className='carousel  cursor-grab overflow-hidden'>
            <motion.div drag = 'x' dragConstraints = {{right: 0,left: -(width + 200)}} className='inner-carousel flex'>
                {
                    images.map(image => {
                        return (
                            <motion.div className='item p-10'>
                                <img  className='w-full h-full rounded-md pointer-events-none' src={image} alt='emni' />
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.div>
    </div>
  );
};

export default ImageSlider;
