"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Image from "next/image";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  image?: string;
  meta?: string;
  whatsappMessage: string;
}

export default function EnquiryModal({ open, onClose, title, description, image, meta, whatsappMessage }: EnquiryModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919825438324?text=${encoded}`, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-[28px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all active:scale-90"
            >
              <X className="w-4 h-4 text-gray-950" />
            </button>

            {image && (
              <div className="relative w-full h-48">
                <Image src={image} alt={title} fill unoptimized className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}

            <div className="p-6 lg:p-8 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-2xl font-black text-gray-950 tracking-tight">{title}</h3>
                {meta && (
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.15em]">{meta}</p>
                )}
              </div>

              {description && (
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
              )}

              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-black h-12 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-lg active:scale-[0.98] uppercase tracking-[0.1em] text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                Continue on WhatsApp
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
