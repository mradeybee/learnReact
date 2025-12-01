"use client";

interface YouTubeEmbedProps {
  videoUrl: string;
  title?: string;
}

/**
 * Extracts YouTube video ID from various URL formats
 */
function getYouTubeVideoId(url: string): string | null {
  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export function YouTubeEmbed({ videoUrl, title }: YouTubeEmbedProps) {
  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <p className="text-sm text-red-600 dark:text-red-400">
          Invalid YouTube URL: {videoUrl}
        </p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

