// components/InteractiveButton.js
import { useEffect } from 'react';

const InteractiveButton = () => {
  useEffect(() => {
    const button = document.getElementById('contact-button');
    const maxDistance = 500;
    const pushFactor = 1.5;

    const handleMouseMove = (e) => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const distanceX = e.clientX - buttonCenterX;
      const distanceY = e.clientY - buttonCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      if (distance < maxDistance) {
        const angle = Math.atan2(distanceY, distanceX);
        const pushDistance = (maxDistance - distance) * pushFactor;
        
        let moveX = Math.cos(angle) * pushDistance * -1;
        let moveY = Math.sin(angle) * pushDistance * -1;
        const maxMoveX = window.innerWidth - buttonRect.width;
        const maxMoveY = window.innerHeight - buttonRect.height;
        moveX = Math.max(-buttonRect.left, Math.min(moveX, maxMoveX - buttonRect.left));
        moveY = Math.max(-buttonRect.top, Math.min(moveY, maxMoveY - buttonRect.top));
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        button.style.transform = 'translate(0, 0)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('click', () => {
        alert("ya got me! let's hope Amazon doesn't figure out how to do this...");
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('click', () => {
        alert("ya got me! let's hope Amazon doesn't figure out how to do this...");
      });
    };
  }, []);

  return (
    <button id="contact-button" style={{ position: 'fixed' }}>
      Contact Me
    </button>
  );
};

export default InteractiveButton;
