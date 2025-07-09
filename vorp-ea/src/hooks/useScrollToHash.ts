import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smooth scroll to hash (e.g. #section-id) when the location changes.
 * @param delay - optional delay in ms before scroll happens (default: 200)
 */
export function useScrollToHash(delay: number = 200): void {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      const timeout = setTimeout(scrollToHash, delay);
      return () => clearTimeout(timeout);
    }
  }, [location, delay]);
}
