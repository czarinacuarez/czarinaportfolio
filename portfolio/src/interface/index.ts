export interface TimelineItem {
  role: string;
  institution: string;
  date: string;
  description?: string;
}

export interface TimelineCategory {
  title: string;
  icon: string;
  items: TimelineItem[];
}