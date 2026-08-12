import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

/* Monochrome SVG icons — vendor marketplace theme */
const CubeIcons = {
  /* Storefront */
  front: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9h18v12H3V9z" />
      <path d="M9 21V14h6v7" />
      <path d="M6 9v.01M10 9v.01M14 9v.01M18 9v.01" />
    </svg>
  ),
  /* Shopping bag */
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  /* Package / box */
  right: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  /* Price tag */
  left: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  /* Delivery truck */
  top: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  /* Handshake / multi-vendor */
  bottom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out acceleration: start fast, slow near the end
        const remaining = 100 - prev;
        const increment = Math.max(0.5, remaining * 0.08);
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (isFadingOut) {
      const timeout = setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isFadingOut, onLoadingComplete]);

  return (
    <div className={`loading-screen ${isFadingOut ? 'loading-screen--exit' : ''}`}>
      {/* Ambient background particles */}
      <div className="loading-screen__particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="loading-screen__particle"
            style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 4}px`,
              '--duration': `${3 + Math.random() * 5}s`,
              '--delay': `${Math.random() * 4}s`,
              '--opacity': `${0.15 + Math.random() * 0.4}`,
            }}
          />
        ))}
      </div>

      {/* 3D Cube scene */}
      <div className="loading-screen__scene">
        <div className="loading-screen__cube">
          <div className="loading-screen__face loading-screen__face--front">
            <span className="loading-screen__face-icon">{CubeIcons.front}</span>
          </div>
          <div className="loading-screen__face loading-screen__face--back">
            <span className="loading-screen__face-icon">{CubeIcons.back}</span>
          </div>
          <div className="loading-screen__face loading-screen__face--right">
            <span className="loading-screen__face-icon">{CubeIcons.right}</span>
          </div>
          <div className="loading-screen__face loading-screen__face--left">
            <span className="loading-screen__face-icon">{CubeIcons.left}</span>
          </div>
          <div className="loading-screen__face loading-screen__face--top">
            <span className="loading-screen__face-icon">{CubeIcons.top}</span>
          </div>
          <div className="loading-screen__face loading-screen__face--bottom">
            <span className="loading-screen__face-icon">{CubeIcons.bottom}</span>
          </div>
        </div>
      </div>

      {/* Brand + progress */}
      <div className="loading-screen__content">
        <h1 className="loading-screen__brand">
          SHOP<span className="loading-screen__brand-dot">.</span>CO
        </h1>
        <p className="loading-screen__tagline">Your Vendor Marketplace</p>

        {/* Progress bar */}
        <div className="loading-screen__progress-track">
          <div
            className="loading-screen__progress-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="loading-screen__progress-glow"
            style={{ left: `${progress}%` }}
          />
        </div>
        <span className="loading-screen__percent">{Math.round(progress)}%</span>
      </div>

      {/* Orbiting rings */}
      <div className="loading-screen__orbit loading-screen__orbit--1" />
      <div className="loading-screen__orbit loading-screen__orbit--2" />
      <div className="loading-screen__orbit loading-screen__orbit--3" />
    </div>
  );
};

export default LoadingScreen;

