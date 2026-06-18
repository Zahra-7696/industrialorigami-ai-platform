"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  href: string;
  title: string;
  description?: string;
};

type NavigationDropdownProps = {
  label: string;
  items: DropdownItem[];
};

export function NavigationDropdown({
  label,
  items,
}: NavigationDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 py-7 text-sm font-bold text-slate-200 transition hover:text-brand-gold"
      >
        {label}
        <span
          aria-hidden="true"
          className={`text-xs transition ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          className="dropdown-panel absolute left-1/2 top-[calc(100%-0.35rem)] z-50 w-[24rem] -translate-x-1/2 rounded-2xl p-2"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 transition hover:bg-brand-paper"
            >
              <span className="block font-black text-brand-900">
                {item.title}
              </span>
              {item.description ? (
                <span className="mt-1 block text-xs leading-5 text-slate-500">
                  {item.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
