import { AcademicCapIcon, ExtraCurricularsIcon, WorkIcon } from "../assets/icons";

const iconMap: { [key: string]: React.ComponentType } = {
  AcademicCapIcon: AcademicCapIcon,
  WorkIcon: WorkIcon,
  ExtraCurricularsIcon: ExtraCurricularsIcon,

};

export const getIconComponent = (iconName: string) => {
  return iconMap[iconName];
};