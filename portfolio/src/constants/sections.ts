export const SECTION_NAMES = ['home', 'about', 'experience', 'projects', 'contact'] as const;
export type SectionName = typeof SECTION_NAMES[number];