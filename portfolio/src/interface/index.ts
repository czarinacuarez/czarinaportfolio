export interface TimelineItem {
  role: string;
  institution: string;
  date: string;
  description?: string;
}

export interface TimelineCategory {
  title: string;
  icon: string;
  id?: string;
  items: TimelineItem[];
}

export interface AchievementCategory {
  title: string;
  type: string;
  description: string;
  date: string;
  image: string;
  link?: string;
  placeholder: string;
}


export interface ProjectCategory {
  id: string | number; // Add id property
  title: string;
  description: string;
  items: string[];
  tech: string[];
  image: string;
  live?: string;
  github?: string;
}