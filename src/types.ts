/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  benefits: string[];
  outcomes: string[];
  modules: string[];
  level: "Beginner" | "Intermediate" | "Advanced" | "Masterclass";
  iconName: string;
  actionText?: string;
}

export interface PromptItem {
  id: string;
  title: string;
  category: "Personal" | "Products" | "Cards" | "Other" | "Library";
  prompt: string;
  description: string;
  tags: string[];
  difficulty: "Simple" | "Advanced" | "Expert";
  imageUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  glowColor: "cyan" | "purple" | "blue";
  stats: string;
}

export interface OptimizeResponse {
  success: boolean;
  originalPrompt: string;
  optimizedPrompt: string;
  engine: string;
  timestamp: string;
}
