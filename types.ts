
export enum Category {
  POLITICS = 'politics',
  FAMILY = 'family',
  SOCIAL_MEDIA = 'social-media'
}

export interface Fallacy {
  id: string;
  name: string;
  banglaName: string;
  description: string;
  example: string;
  rebuttal: string;
}

export interface AnalysisResult {
  fallaciesFound: string[];
  explanation: string;
  counterArgument: string;
  logicScore: number; // 0-100
}

export interface Scenario {
  id: number;
  category: Category;
  title: string;
  context: string;
  argument: string;
  options: {
    text: string;
    isLogical: boolean;
    feedback: string;
  }[];
}
