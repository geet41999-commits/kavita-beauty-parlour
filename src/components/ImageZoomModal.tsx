import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Copy, Check, Download } from 'lucide-react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  const [scale, setScale] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.jpg`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      
      {/* Top Bar Controls */}
      <div className="absolute top-4 inset-x-4 max-w-7xl mx-auto flex items-center justify-between z-20 text-white">
        <div>
          <h3 className="font-serif text-lg font-normal text-white">{title}</h3>
          <p className="text-[11px] text-white/60">High-Resolution Master Study</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-sm p-1">
            <button
              onClick={() => setScale((s) => Math.min(s + 0.25, 3))}
              className="p-1.5 hover:bg-white/20 rounded-sm transition-colors text-white cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-1 tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((s) => Math.max(s - 0.25, 0.75))}
              className="p-1.5 hover:bg-white/20 rounded-sm transition-colors text-white cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-1.5 hover:bg-white/20 rounded-sm transition-colors text-white cursor-pointer"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy Hotlink Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C59B4B] text-black text-xs font-medium rounded-sm hover:bg-[#B08638] transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Link' : 'Copy Direct Link'}</span>
          </button>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-sm transition-colors text-white cursor-pointer"
            title="Download HD Asset"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 bg-white/20 hover:bg-white/40 rounded-sm transition-colors text-white cursor-pointer ml-2"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative w-full h-full flex items-center justify-center overflow-auto p-8">
        <img
          src={imageUrl}
          alt={title}
          style={{ transform: `scale(${scale})` }}
          className="max-h-[82vh] max-w-[85vw] object-contain transition-transform duration-200 select-none shadow-2xl rounded-sm"
          referrerPolicy="no-referrer"
        />
      </div>

    </div>
  );
};
