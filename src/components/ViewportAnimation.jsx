// components/ViewportAnimation.jsx
import { useInView } from "../hooks/useInView";
import { cn } from "../utils/cn";

const ViewportAnimation = ({
  children,
  from = "",
  duration = 700,
  delay = 0,
  className = "",
  once = true,
}) => {
  const [ref, isInView] = useInView({ once, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isInView
          ? "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0 rotate-0"
          : `${from}`,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ViewportAnimation;
