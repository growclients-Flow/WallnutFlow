export type Onboarding = {
  userId: string;
  skill: string;
  experience: "Beginner" | "Intermediate" | "Expert";
  clientType: "Startups" | "Agencies" | "Corporates" | "Individuals";
  priceRange: string; // "$200 - $1000"
  goal: string;
};

export type Lead = {
  _id?: string;
  source: "remoteok" | "hn" | "reddit" | "twitter" | "producthunt" | "wellfound";
  externalId: string;
  title: string;
  company?: string;
  url: string;
  description?: string;
  tags?: string[];
  location?: string;
  budget?: number | null;      // normalized USD if available
  projectType?: string | null; // "Web Dev", "Design"...
  postedAt?: string;           // ISO
  hotScore?: number;           // computed
  raw?: any;
};

export type SavedLead = Lead & {
  userId: string;
  status: "new" | "contacted" | "replied" | "closed";
  notes?: string;
  createdAt: string;
};
