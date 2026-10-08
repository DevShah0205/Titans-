export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type SkillCategory =
  | 'Languages'
  | 'Frameworks & Libraries'
  | 'Cloud & DevOps'
  | 'Databases'
  | 'AI & Machine Learning'
  | 'System Design & Architecture'
  | 'Tools & Methodologies'
  | 'Soft Skills';

export interface StudentSkill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  yearsOfExperience?: number;
  verifiedBy?: ('project' | 'certification' | 'internship' | 'coursework')[];
}

export interface AcademicRecord {
  degree: string;
  major: string;
  institution: string;
  graduationYear: number;
  currentSemesterOrYear: string;
  gpa: string;
  maxGpa: string;
  honors?: string[];
  coursework: string[];
}

export interface ProjectRecord {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  role?: string;
  dateCompleted: string;
}

export interface CertificationRecord {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skillsCovered: string[];
  badgeColor?: string;
}

export interface InternshipRecord {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skillsApplied: string[];
}

export interface StudentProfile {
  id: string;
  fullName: string;
  avatarUrl: string;
  headline: string;
  bio: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  location: string;
  targetCareerId: string;
  academics: AcademicRecord;
  skills: StudentSkill[];
  projects: ProjectRecord[];
  certifications: CertificationRecord[];
  internships: InternshipRecord[];
  completedRoadmapTasks: string[];
}

export interface BenchmarkSkill {
  name: string;
  category: SkillCategory;
  importance: 'critical' | 'important' | 'bonus';
  expectedProficiency: ProficiencyLevel;
  description: string;
  whyNeeded: string;
  howToLearn: string;
  recommendedProjectIdea: string;
}

export interface CareerBenchmark {
  id: string;
  roleTitle: string;
  iconName: string;
  shortDescription: string;
  averageStartingSalary: string;
  industryDemand: 'Very High' | 'High' | 'Growing';
  requiredSkills: BenchmarkSkill[];
  idealProfileSummary: string;
  topInterviewTopics: string[];
}

export interface SkillGapItem {
  skill: BenchmarkSkill;
  status: 'missing' | 'needs-depth' | 'matched';
  currentProficiency?: ProficiencyLevel;
  evidence: {
    inProjects: string[];
    inCerts: string[];
    inInternships: string[];
  };
}

export interface RecommendedAction {
  id: string;
  type: 'project' | 'course' | 'cert' | 'practice';
  title: string;
  effort: string;
  bridgesGaps: string[];
  description: string;
}

export interface SkillGapAnalysis {
  matchPercentage: number;
  totalBenchmarkedSkills: number;
  matchedCount: number;
  partialCount: number;
  missingCount: number;
  criticalGaps: SkillGapItem[];
  partialGaps: SkillGapItem[];
  strongMatches: SkillGapItem[];
  readinessSummary: string;
  recommendedActions: RecommendedAction[];
}
