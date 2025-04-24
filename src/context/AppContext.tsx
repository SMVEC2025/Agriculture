import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
  } from "react";
  
  // Create Context
  export const AppContext = createContext<any>(null);
  
  // Provider Props
  interface AppProviderProps {
    children: ReactNode;
  }
  
  // App Provider Component
  export function AppProvider({ children }: AppProviderProps) {
    const [showNav,setShowNav] = useState(false)
    const [isMobile,setIsMobile] = useState(false)
  
    // Resize detection
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <AppContext.Provider
        value={{
            showNav,setShowNav,isMobile,setIsMobile
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  
  // Optional helper hook
  export const useAppContext = () => useContext(AppContext);
  