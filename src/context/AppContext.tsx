import axios from "axios";
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
    const [showLogoLoader,setShowLoader] = useState(true)

    // Effect to track screen size changes
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
    
      window.addEventListener("resize", handleResize);
      
      handleResize(); // <-- CALL IT IMMEDIATELY to set initial state correctly
    
      return () => window.removeEventListener("resize", handleResize);
    }, []);
   useEffect(() => {
     // Replace with your endpoint; consider adding `id` in _fields for React keys
     axios
       .get('https://cms.smvhospital.com/wp-json/wp/v2/agrinewsevents?_fields=acf')
       .then((response) => {
         setEvents(response.data);
       })
       .catch(() => {
            
       })
       .finally(() => {
         setLoader(false);
       });
   }, []);
          console.log(events)

    return (
      <AppContext.Provider
        value={{
            showNav,setShowNav,isMobile,setIsMobile,formOpen,setFormOpen,events,setEvents,loader,setLoader,showMobileSlider,setShowMobileSlider,showItem,setShowItem,showLogoLoader,setShowLoader
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  
  // Optional helper hook
  export const useAppContext = () => useContext(AppContext);
  