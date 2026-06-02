import { useEffect, useState } from 'react';

export default function AnimateSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), delay);
    return () => window.clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`transition duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} `}>
      {children}
    </div>
  );
}
