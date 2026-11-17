'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: '2010',
    num: '01',
    color: '#FF3B00',
    title: 'The Foundation',
    description: 'Lakmina Products was founded with a single-minded vision: to redefine hygiene standards in Sri Lanka through innovative cleaning formulations.',
    tag: 'Origin Story',
  },
  {
    year: '2015',
    num: '02',
    color: '#FF3B00',
    title: 'Strategic Expansion',
    description: 'We expanded our reach across the island, launching professional-grade solutions for the growing hospitality and industrial sectors.',
    tag: 'Growth',
  },
  {
    year: '2020',
    num: '03',
    color: '#FF3B00',
    title: 'Technological Leap',
    description: 'Inauguration of our state-of-the-art manufacturing facility, integrating advanced automated processes and eco-friendly practices.',
    tag: 'Innovation',
  },
  {
    year: '2025',
    num: '04',
    color: '#FF3B00',
    title: 'Legacy of Trust',
    description: 'Achieved a milestone of 10,000+ loyal clients, becoming the gold standard for premium cleaning solutions globally.',
    tag: 'Milestone',
  },
  {
    year: '2026',
    num: '05',
    color: '#FF3B00',
    title: 'The Future of Clean',
    description: 'Pioneering sustainable chemistry and AI-driven dispensing systems to shape the next generation of professional hygiene.',
    tag: 'Future',
  },
];

export default function OurJourney() {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const current = timelineData[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .oj2-root {
          background: #FAFAF8;
          min-height: 100vh;
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .oj2-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .oj2-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .oj2-header {
          margin-bottom: 80px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .oj2-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .oj2-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: #ccc;
          display: inline-block;
        }

        .oj2-headline {
          font-family: 'Bebas Neue', -serif;
          font-size: clamp(72px, 10vw, 140px);
          color: #111;
          line-height: 0.88;
          letter-spacing: 0.01em;
          margin: 0;
        }

        .oj2-headline em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1.5px #bbb;
        }

        .oj2-header-right {
          max-width: 260px;
          text-align: right;
          flex-shrink: 0;
        }

        .oj2-header-right p {
          font-size: 13px;
          color: #888;
          line-height: 1.7;
          font-weight: 300;
          margin: 0 0 16px;
        }

        .oj2-year-counter {
          font-family: 'Bebas Neue', -serif;
          font-size: 52px;
          color: #111;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .oj2-year-counter span {
          font-size: 16px;
          color: #aaa;
          font-family: 'DM ', -serif;
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .oj2-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .oj2-layout { grid-template-columns: 1fr; gap: 40px; }
          .oj2-header { flex-direction: column; align-items: flex-start; }
          .oj2-header-right { text-align: left; max-width: 100%; }
          .oj2-inner { padding: 0 20px; }
        }

        .oj2-steps { display: flex; flex-direction: column; }

        .oj2-step {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 0;
          border-bottom: 1px solid #EBEBEB;
          cursor: pointer;
          position: relative;
        }

        .oj2-step:first-child { border-top: 1px solid #EBEBEB; }

        .oj2-step-num {
          font-family: 'Bebas Neue', -serif;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: #ccc;
          width: 24px;
          flex-shrink: 0;
          transition: color 0.3s;
        }

        .oj2-step-year {
          font-family: 'Bebas Neue', -serif;
          font-size: 42px;
          line-height: 1;
          color: #DDD;
          transition: color 0.4s, transform 0.3s;
          flex-shrink: 0;
          width: 100px;
        }

        .oj2-step-title {
          font-size: 14px;
          font-weight: 500;
          color: #BBB;
          flex: 1;
          transition: color 0.3s;
        }

        .oj2-step-arrow {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.3s;
          color: #111;
          flex-shrink: 0;
        }

        .oj2-step.is-active .oj2-step-num { color: #888; }
        .oj2-step.is-active .oj2-step-year { color: #111; transform: translateX(4px); }
        .oj2-step.is-active .oj2-step-title { color: #111; }
        .oj2-step.is-active .oj2-step-arrow { opacity: 1; transform: translateX(0); }
        .oj2-step:not(.is-active):hover .oj2-step-year { color: #888; }
        .oj2-step:not(.is-active):hover .oj2-step-title { color: #888; }

        .oj2-step-bar {
          position: absolute;
          left: -2px;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          opacity: 0;
          width: 3px;
          height: 50%;
          border-radius: 4px;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s;
        }

        .oj2-step.is-active .oj2-step-bar {
          transform: translateY(-50%) scaleY(1);
          opacity: 1;
        }

        .oj2-panel { position: sticky; top: 40px; }

        .oj2-panel-inner {
          border-radius: 28px;
          padding: 48px 44px;
          position: relative;
          overflow: hidden;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #3A3A3A;
          border: 1px solid #4a4a4a;
          box-shadow: 0 8px 60px rgba(0,0,0,0.18);
        }

        /* Red glow — top right */
        .oj2-panel-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          top: -120px;
          right: -100px;
          filter: blur(90px);
          opacity: 0.55;
          z-index: 0;
          background: #CC1111;
          pointer-events: none;
        }

        /* Gray glow — bottom left */
        .oj2-panel-glow2 {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          bottom: -80px;
          left: -60px;
          filter: blur(70px);
          opacity: 0.35;
          z-index: 0;
          background: #888888;
          pointer-events: none;
        }

        .oj2-panel-content { position: relative; z-index: 1; }

        .oj2-panel-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.5);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 32px;
        }

        .oj2-panel-year {
          font-family: 'Bebas Neue', -serif;
          font-size: 100px;
          color: rgba(255,255,255,0.06);
          line-height: 0.85;
          letter-spacing: 0.02em;
          margin-bottom: -10px;
        }

        .oj2-panel-title {
          font-family: 'Bebas Neue', -serif;
          font-size: 52px;
          color: #ffffff;
          letter-spacing: 0.02em;
          line-height: 1;
          margin: 0 0 20px;
        }

        .oj2-panel-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          font-weight: 300;
          margin: 0;
          max-width: 340px;
        }

        .oj2-panel-bottom {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .oj2-dots { display: flex; gap: 6px; align-items: center; }

        .oj2-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          transition: background 0.3s, width 0.3s;
          cursor: pointer;
        }

        .oj2-dot.is-active {
          width: 20px;
          border-radius: 4px;
          background: #CC1111;
        }

        .oj2-nav { display: flex; gap: 10px; }

        .oj2-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
        }

        .oj2-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: rgba(255,255,255,0.3);
        }

        .oj2-btn:disabled { opacity: 0.2; cursor: not-allowed; }

        .oj2-btn.next-btn {
          background: #CC1111;
          color: #fff;
          border-color: #CC1111;
        }

        .oj2-btn.next-btn:hover:not(:disabled) {
          background: #E01515;
          border-color: #E01515;
        }
      `}</style>

      <section className="oj2-root">
        <div className="oj2-grain" />
        <div className="oj2-inner">

          {/* Header */}
          <div ref={headerRef} className="oj2-header">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="oj2-eyebrow"
              >
                Lakmina Products
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="oj2-headline"
              >
                Our<br />
                <em>Journey</em>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="oj2-header-right"
            >
              <p>From a humble beginning to a trusted household name — every year tells a story worth knowing.</p>
              <div className="oj2-year-counter">
                2010<br />
                <span>— present</span>
              </div>
            </motion.div>
          </div>

          {/* Layout */}
          <div className="oj2-layout">

            {/* LEFT: Step list */}
            <div className="oj2-steps">
              {timelineData.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className={`oj2-step${active === i ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="oj2-step-bar" style={{ background: item.color }} />
                  <span className="oj2-step-num">{item.num}</span>
                  <span className="oj2-step-year">{item.year}</span>
                  <span className="oj2-step-title">{item.title}</span>
                  <svg className="oj2-step-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="oj2-panel"
            >
              <div className="oj2-panel-inner">
                <div className="oj2-panel-glow" />
                <div className="oj2-panel-glow2" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="oj2-panel-content"
                  >
                    <span className="oj2-panel-tag">{current.tag}</span>
                    <div className="oj2-panel-year">{current.year}</div>
                    <h3 className="oj2-panel-title">{current.title}</h3>
                    <p className="oj2-panel-desc">{current.description}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="oj2-panel-bottom">
                  <div className="oj2-dots">
                    {timelineData.map((item, i) => (
                      <div
                        key={i}
                        className={`oj2-dot${active === i ? ' is-active' : ''}`}
                        onClick={() => setActive(i)}
                      />
                    ))}
                  </div>
                  <div className="oj2-nav">
                    <button
                      className="oj2-btn"
                      onClick={() => setActive(i => Math.max(0, i - 1))}
                      disabled={active === 0}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      className="oj2-btn next-btn"
                      onClick={() => setActive(i => Math.min(timelineData.length - 1, i + 1))}
                      disabled={active === timelineData.length - 1}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}