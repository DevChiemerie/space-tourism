"use client";
import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

type SidebarProp = {
  children: React.ReactNode;
};

function SidebarProvider({ children }: SidebarProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);

  if (context === undefined)
    throw new Error(
      "You cannot use the Sidebar Context outside of it's Provider",
    );

  return context;
}

export { SidebarProvider, useSidebar };
