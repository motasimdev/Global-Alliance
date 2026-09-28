// hooks/useInView.jsx
import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // ১. অবজেক্ট ট্র্যাপ এড়াতে শুরুতেই ভ্যালুগুলো আলাদা করে প্রিমিটিভ (Primitive) বানিয়ে নিন
  const once = options.once || false;
  const threshold = options.threshold || 0.1;
  const rootMargin = options.rootMargin || '0px';

  useEffect(() => {
    // ২. সেফ ক্লিন-আপের জন্য রেফ-এর ভ্যালু লোকাল ভেরিয়েবলে রাখুন
    const currentElement = ref.current; 
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsInView(false);
      }
    }, {
      threshold,
      rootMargin,
    });

    observer.observe(currentElement);

    // ৩. পারফেক্ট ক্লিন-আপ ফাংশন রিটার্ন
    return () => {
      observer.disconnect();
    };

    // ডিপেন্ডেন্সিতে এখন কোনো অবজেক্ট রেফারেন্স নেই, তাই লুপ বা ক্র্যাশ হবে না
  }, [threshold, rootMargin, once]); 

  return [ref, isInView];
}