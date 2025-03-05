import { AcademicCapIcon, ExtraCurricularsIcon, WorkIcon } from "../assets/icons";

const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  AcademicCapIcon,
  WorkIcon,
  ExtraCurricularsIcon,

};

export const getIconComponent = (iconName: string): React.ComponentType<React.SVGProps<SVGSVGElement>>
  | undefined => {
  if (!iconMap[iconName]) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
  }
  return iconMap[iconName];
};