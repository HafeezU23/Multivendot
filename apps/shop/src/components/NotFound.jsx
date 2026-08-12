import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="notfound">
      {/* Ambient particles */}
      <div className="notfound__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="notfound__particle"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 5}px`,
              '--duration': `${4 + Math.random() * 6}s`,
              '--delay': `${Math.random() * 5}s`,
              '--opacity': `${0.1 + Math.random() * 0.3}`,
            }}
          />
        ))}
      </div>

      {/* Orbiting rings */}
      <div className="notfound__orbit notfound__orbit--1" />
      <div className="notfound__orbit notfound__orbit--2" />

      {/* 3D "404" block */}
      <div className="notfound__scene">
        <div
          className="notfound__block"
          style={{
            transform: `rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 10}deg)`,
          }}
        >
          <div className="notfound__face notfound__face--front">404</div>
          <div className="notfound__face notfound__face--back">404</div>
         
        </div>
      </div>

      {/* Content */}
      <div className="notfound__content">
        <h2 className="notfound__title">Page Not Found</h2>
        <p className="notfound__desc">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </p>

        <div className="notfound__actions">
          <button className="notfound__btn notfound__btn--primary" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Home
          </button>
          <button className="notfound__btn notfound__btn--secondary" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Go Back
          </button>
        </div>
      </div>

      {/* Floating shelf items — scattered broken elements */}
      <div className="notfound__scattered">
        <span className="notfound__item notfound__item--1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </span>
        <span className="notfound__item notfound__item--2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </span>
        <span className="notfound__item notfound__item--3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
        </span>
        <span className="notfound__item notfound__item--4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" rx="1" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
