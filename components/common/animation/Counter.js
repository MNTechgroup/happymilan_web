import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const Counter = ({ from, to, duration = 6 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();
  const springConfig = { duration: duration * 1000, stiffness: 300, damping: 30 };
  const count = useSpring(from, springConfig);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          count.set(to);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [count, to, hasAnimated]);

  const animatedValue = useTransform(count, value => Math.round(value));

  return (
    <motion.div
      ref={ref}
      style={{ fontSize: '2rem', fontWeight: 'bold' }}
    >
      {animatedValue}
    </motion.div>
  );
};

export default Counter;
