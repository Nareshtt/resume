"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-light-100 p-6 shadow-xl ring-1 ring-black/5 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-heading-3 text-dark-900">{title}</h3>}
          <button
            onClick={onClose}
            className="rounded-full p-2 text-dark-700 hover:bg-light-200 hover:text-dark-900 transition-colors"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="text-body text-dark-700">{children}</div>
      </div>
    </div>,
    document.body
  );
}
