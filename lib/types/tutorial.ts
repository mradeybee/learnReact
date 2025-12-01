export type TutorialLevel = "beginner" | "intermediate" | "advanced" | "expert" | "staff";

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  level: TutorialLevel;
  estimatedTime: string;
  topics: string[];
  content: {
    overview: string;
    sections: TutorialSection[];
    conclusion: string;
  };
  prerequisites?: string[];
  resources?: {
    title: string;
    url: string;
  }[];
  codeExamples?: {
    title: string;
    code: string;
    explanation: string;
  }[];
  videoUrl?: string; // Main tutorial video URL (YouTube)
}

export interface TutorialSection {
  title: string;
  content: string;
  codeExample?: {
    code: string;
    explanation: string;
  };
  interactive?: boolean;
  videoUrl?: string; // YouTube video URL or ID
}

