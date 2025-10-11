import type { Lead, Onboarding } from "./types";

export function computeHotScore(lead: Lead, profile: Onboarding, filters: {
  budgetMin?: number;
  industry?: string;
  location?: string;
  projectType?: string;
}) {
  let score = 0;

  // Match by skill/keywords
  const skill = profile.skill?.toLowerCase();
  const hay = `${lead.title} ${lead.description ?? ""} ${(lead.tags ?? []).join(" ")}`.toLowerCase();
  if (skill && hay.includes(skill)) score += 35;

  // Industry heuristic
  if (filters.industry) {
    const ind = filters.industry.toLowerCase();
    if (hay.includes(ind)) score += 15;
  }

  // Project type heuristic
  if (filters.projectType) {
    const pt = filters.projectType.toLowerCase();
    if (hay.includes(pt)) score += 15;
  }

  // Budget alignment
  if (filters.budgetMin && lead.budget && lead.budget >= filters.budgetMin) score += 15;

  // Location hint
  if (filters.location && (lead.location?.toLowerCase().includes(filters.location.toLowerCase()))) {
    score += 10;
  }

  // Recency
  const posted = lead.postedAt ? new Date(lead.postedAt).getTime() : 0;
  const days = posted ? (Date.now() - posted) / (1000 * 60 * 60 * 24) : 999;
  if (days <= 2) score += 25;
  else if (days <= 7) score += 10;

  // Cap 100
  return Math.max(0, Math.min(100, score));
}
