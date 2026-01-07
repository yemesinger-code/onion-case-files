import { useState, useCallback } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Upload, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EvidenceDropzone() {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showStamp, setShowStamp] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (selectedFile: File) => {
    setFile(selectedFile);
    // Trigger stamp animation
    setTimeout(() => setShowStamp(true), 100);
  };

  return (
    <div
      className={cn(
        "relative border-4 border-dashed rounded-lg p-8 md:p-12 transition-all duration-300 cursor-pointer paper-texture",
        isDragging 
          ? "border-secondary bg-secondary/10" 
          : file 
            ? "border-accent bg-accent/5" 
            : "border-border bg-card hover:border-primary/50"
      )}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-input')?.click()}
      role="button"
      tabIndex={0}
      aria-label={t.contact.dropzone}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          document.getElementById('file-input')?.click();
        }
      }}
    >
      <input
        id="file-input"
        type="file"
        className="hidden"
        onChange={handleFileInput}
        aria-hidden="true"
      />

      <div className="text-center space-y-4">
        {file ? (
          <>
            <FileCheck className="w-16 h-16 mx-auto text-accent" />
            <p className="font-heebo font-medium text-lg text-foreground">
              {file.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.contact.fileReceived}
            </p>
          </>
        ) : (
          <>
            <Upload className={cn(
              "w-16 h-16 mx-auto transition-transform",
              isDragging ? "text-secondary scale-110" : "text-muted-foreground"
            )} />
            <p className="font-heebo font-medium text-lg text-foreground">
              {t.contact.dropzone}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.contact.dropzoneAlt}
            </p>
          </>
        )}
      </div>

      {/* Received stamp animation */}
      {showStamp && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ '--stamp-rotation': '-12deg' } as React.CSSProperties}
        >
          <div className="stamp text-2xl md:text-3xl px-6 py-3 shadow-stamp stamp-animate bg-accent/10">
            {t.contact.received}
          </div>
        </div>
      )}
    </div>
  );
}
