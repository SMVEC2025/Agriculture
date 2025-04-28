import  {
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
    const [formOpen,setFormOpen] = useState(false)
    const [events,setEvents]= useState([])
    const [loader,setLoader]=useState(false)
    const [showMobileSlider,setShowMobileSlider]=useState(false)
    const [showItem,setShowItem]=useState('')

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);
  
    return (
      <AppContext.Provider
        value={{
            showNav,setShowNav,isMobile,setIsMobile,formOpen,setFormOpen,events,setEvents,loader,setLoader,showMobileSlider,setShowMobileSlider,showItem,setShowItem
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  
  // Optional helper hook
  export const useAppContext = () => useContext(AppContext);
  