export interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export interface WebsiteAnalysis {
  companyName: string;
  industry: string;
  shortDescription: string;
  fullOverview: string;
  services: string[];
  contact: ContactInfo;
  keyHighlights: string[];
  reputationSummary: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface AnalysisResult {
  data: WebsiteAnalysis;
  sources: GroundingSource[];
}
