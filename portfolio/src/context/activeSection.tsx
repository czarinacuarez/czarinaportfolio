/**
 * Context for tracking and managing the active section in the portfolio
 * Used to highlight the current section in navigation and control scroll behavior
 */
import React, { createContext, useContext, useState } from "react";
import type { SectionName } from "../types/section";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSectionContext must be used within ActiveSectionProvider');
  }
  return context;
}