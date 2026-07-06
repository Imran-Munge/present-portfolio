"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface ProjectVideoProps {
  title: string;
  projectId: string;
  poster: string;
  video?: string;
  videoMp4?: string;
  live?: string;
}

export default function ProjectVideo({
  title,
  projectId,
  poster,
  video,
  videoMp4,
  live,
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hasVideo = Boolean(video || videoMp4);

  useEffect(() => {
    if (!shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => setHasError(true));
  }, [shouldLoad]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
      {!shouldLoad || hasError ? (
        <button
          type="button"
          onClick={hasVideo ? () => setShouldLoad(true) : undefined}
          className="group relative block h-full w-full"
          aria-label={hasVideo ? `Play ${title} demo video` : `${title} preview`}
          disabled={!hasVideo}
        >
          <Image
            src={poster}
            alt={`${title} website preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.01]"
          />
          {hasVideo && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/90 text-background shadow-lg transition-transform group-hover:scale-105">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </span>
          )}
        </button>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="none"
          poster={poster}
          onError={() => setHasError(true)}
        >
          {video && <source src={video} type="video/webm" />}
          {videoMp4 && <source src={videoMp4} type="video/mp4" />}
        </video>
      )}

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/95 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Demo video unavailable. Add <code className="text-xs">demo.webm</code> or{" "}
            <code className="text-xs">demo.mp4</code> to{" "}
            <code className="text-xs">public/projects/{projectId}/</code>
          </p>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Visit live site -&gt;
            </a>
          )}
        </div>
      )}
    </div>
  );
}
