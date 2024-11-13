import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'



const Banner = () => {
  const arrayImage = [
    banner1,
    banner2,
    banner3,  // Thêm ảnh thứ ba
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arrayImage.length); // Chuyển đến ảnh tiếp theo
    }, 3000);

    // Dọn dẹp khi component bị hủy
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[700px]">
      <img 
        id="banner" 
        src={arrayImage[index]} 
        alt="Slider" 
        className="w-full h-full object-fit transition-all duration-500" 
      />
    </div>
  );
};

export default Banner;
