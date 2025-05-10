import { useNavigate } from "react-router-dom"

function Program() {
  const navigate = useNavigate()
  return (
    <div className="adp_main">
      <div className="pcard">
        <h2>B.Sc. (Hons.) Agriculture</h2>
        <p>B.Sc. Agriculture is a degree program centered on crop production, soil science, agronomy, and agricultural technology. Students study plant breeding, irrigation, pest management, and farm management. Graduates can work as agricultural officers, farm managers, agronomists, or start their own agri-based ventures.</p>
        <button onClick={()=>navigate('/admission-agriculture')}>Application process</button>
        <svg width="181" height="89" viewBox="0 0 181 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M91.0464 0.0141602C81.2131 13.1808 67.4464 49.3142 91.0464 88.5142C99.3796 73.3475 111.046 34.4142 91.0464 0.0141602Z" fill="#D0D2DD"/>
<path d="M9.45357 44.9159C14.8061 57.4671 35.0115 82.4523 73.013 81.9838C65.5981 69.6684 42.5053 45.0133 9.45357 44.9159Z" fill="#D0D2DD"/>
<path d="M170.553 48.6478C157.108 46.3158 125.153 49.6888 104.884 81.8371C119.252 82.31 152.5 76.3342 170.553 48.6478Z" fill="#D0D2DD"/>
<path d="M137.751 13.6993C128.923 17.9244 110.575 33.2577 107.811 60.7902C116.649 55.0766 135.01 37.6595 137.751 13.6993Z" fill="#D0D2DD"/>
<path d="M41.9284 13.6993C50.7567 17.9244 69.1043 33.2577 71.8684 60.7902C63.0308 55.0766 44.6702 37.6595 41.9284 13.6993Z" fill="#D0D2DD"/>
<path d="M24.2774 25.9362C28.9229 26.1345 38.9651 29.6428 41.97 42.0901C37.2318 41.1903 27.0599 36.6999 24.2774 25.9362Z" fill="#D0D2DD"/>
<path d="M65.2689 1.27203C69.2422 3.68726 76.3451 11.6058 72.971 23.9581C69.255 20.8837 62.5123 12.0424 65.2689 1.27203Z" fill="#D0D2DD"/>
<path d="M0.881084 68.7408C5.10532 66.7976 15.6421 65.3376 23.9952 75.0427C19.3685 76.4039 8.26816 77.0493 0.881084 68.7408Z" fill="#D0D2DD"/>
<path d="M157.455 27.9503C152.81 28.1486 142.767 31.657 139.762 44.1042C144.501 43.2045 154.673 38.7141 157.455 27.9503Z" fill="#D0D2DD"/>
<path d="M116.464 3.28619C112.49 5.70142 105.387 13.6199 108.761 25.9722C112.477 22.8979 119.22 14.0566 116.464 3.28619Z" fill="#D0D2DD"/>
<path d="M180.851 70.7549C176.627 68.8118 166.09 67.3518 157.737 77.0568C162.364 78.4181 173.464 79.0634 180.851 70.7549Z" fill="#D0D2DD"/>
</svg>

      </div>
      {/* <div className="pcard">
        <h2>B.Sc. (Hons.) Horticulture
        </h2>
        <p>B.Sc. Horticulture is a degree program focused on plant cultivation, landscaping, and crop production. Students learn about soil science, plant breeding, pest control, and sustainable farming. Graduates can work as horticulturists, landscape designers, nursery managers, or start their own horticulture businesses.</p>
        <button onClick={()=>navigate('/admission-horticulture')}>Application process</button>
        <svg width="181" height="89" viewBox="0 0 181 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M91.0464 0.0141602C81.2131 13.1808 67.4464 49.3142 91.0464 88.5142C99.3796 73.3475 111.046 34.4142 91.0464 0.0141602Z" fill="#D0D2DD"/>
<path d="M9.45357 44.9159C14.8061 57.4671 35.0115 82.4523 73.013 81.9838C65.5981 69.6684 42.5053 45.0133 9.45357 44.9159Z" fill="#D0D2DD"/>
<path d="M170.553 48.6478C157.108 46.3158 125.153 49.6888 104.884 81.8371C119.252 82.31 152.5 76.3342 170.553 48.6478Z" fill="#D0D2DD"/>
<path d="M137.751 13.6993C128.923 17.9244 110.575 33.2577 107.811 60.7902C116.649 55.0766 135.01 37.6595 137.751 13.6993Z" fill="#D0D2DD"/>
<path d="M41.9284 13.6993C50.7567 17.9244 69.1043 33.2577 71.8684 60.7902C63.0308 55.0766 44.6702 37.6595 41.9284 13.6993Z" fill="#D0D2DD"/>
<path d="M24.2774 25.9362C28.9229 26.1345 38.9651 29.6428 41.97 42.0901C37.2318 41.1903 27.0599 36.6999 24.2774 25.9362Z" fill="#D0D2DD"/>
<path d="M65.2689 1.27203C69.2422 3.68726 76.3451 11.6058 72.971 23.9581C69.255 20.8837 62.5123 12.0424 65.2689 1.27203Z" fill="#D0D2DD"/>
<path d="M0.881084 68.7408C5.10532 66.7976 15.6421 65.3376 23.9952 75.0427C19.3685 76.4039 8.26816 77.0493 0.881084 68.7408Z" fill="#D0D2DD"/>
<path d="M157.455 27.9503C152.81 28.1486 142.767 31.657 139.762 44.1042C144.501 43.2045 154.673 38.7141 157.455 27.9503Z" fill="#D0D2DD"/>
<path d="M116.464 3.28619C112.49 5.70142 105.387 13.6199 108.761 25.9722C112.477 22.8979 119.22 14.0566 116.464 3.28619Z" fill="#D0D2DD"/>
<path d="M180.851 70.7549C176.627 68.8118 166.09 67.3518 157.737 77.0568C162.364 78.4181 173.464 79.0634 180.851 70.7549Z" fill="#D0D2DD"/>
</svg>

      </div> */}
    </div>
  )
}

export default Program