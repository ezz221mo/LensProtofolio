import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '@/data';
import styles from './ProcessTimeline.module.css';

gsap.registerPlugin(ScrollTrigger);

/** Animated step-by-step working process using GSAP scroll triggers. */
export function ProcessTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Animate each step card from alternating sides as it enters view
      gsap.utils.toArray<HTMLElement>(`.${styles.step}`).forEach((step, i) => {
        const fromSide = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(
          step,
          { opacity: 0, x: fromSide, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
            },
          },
        );
      });

      // Grow the center line with the scroll
      gsap.fromTo(
        `.${styles.line}`,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.wrap} ref={rootRef}>
      <div className={styles.line} />
      <div className={styles.steps}>
        {PROCESS_STEPS.map((step, index) => (
          <div className={styles.step} key={step.id}>
            <div className={styles.node}>
              <i className={`fas ${step.icon}`} />
            </div>
            <div className={styles.body}>
              <span className={styles.number}>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
