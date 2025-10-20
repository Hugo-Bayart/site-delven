import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setHidden(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setElevated(y > 8);
      if (y > lastY.current && y > 40) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 text-white transition-transform duration-300 will-change-transform ${
        hidden ? "-translate-y-full" : ""
      } ${elevated ? "shadow-md" : ""}`}
      style={{
        background: "var(--bg)"
      }}
    >
      <div className="mx-auto max-w-6xl h-28 px-4 flex items-center">
        {/* Left placeholder (keeps same width as right) */}
        <div className="w-1/3 flex items-center">
          {/* empty for now - could hold nav or buttons */}
        </div>

        {/* Center: exact centered logo */}
        <div className="w-1/3 flex items-center justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-delven.png"
              alt="Delven"
              className="h-40 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.replaceWith(
                  Object.assign(document.createElement("span"), {
                    textContent: "Delven",
                    className: "font-semibold text-lg",
                  })
                );
              }}
            />
          </Link>
        </div>

        {/* Right placeholder (same width) */}
        <div className="w-1/3 flex items-center justify-end">
          {/* empty - reserved for future actions */}
        </div>
      </div>
    </header>
  );
}
