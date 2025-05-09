import React from 'react'
const careerOpportunities = [
    // Government Sector
    {
        title:"Government Sector",
        lines:[ "UPSC-IAS/IFS (Indian Forest Services) Exams",
            "State Forest Exam",
            "TNPSC-Agriculture Extension Officer/Horticultural Officer",
            "JRF - Junior Research Fellowship",
            "SRF - Senior Research Fellowship",
            "Research Assistant/Project Assistant",
            "ASRB ARS - Agriculture Research Service",
            "Food Corporation of India",
            "National Seeds Corporation Limited",
            "Pest Control of India"
        ]
    },
   
  
    // Private Sector
    {
        title:"Private Sector",
        lines:[ 
    "Agricultural Finance Corporations",
    "Agriculture Sales Officer",
    "Marketing Executive",
    "Agribusiness and Agripreneurship",
    "Quality Assurance Officer",
    "Seed, Fertilizer, Pesticide, Food Processing Companies",
    "Estate Officer - Tea, Coffee, Rubber, Coconut and Plantation etc.",
    "Sugar Industries"
]
},

  
    // Banking Sector
    {
        title:"Banking Sector",
        lines:["IBPS - Special Officer",
    "Rural Development Officer",
    "Probationary Officer",
    "Field Officer",
    "NABARD Grade A"
]
}
  ];
function Cards() {
    return (
        <div className='course-card'>
           {careerOpportunities.map((e,i)=>(
             <div key={i} className="card">
             <span className="title">{e.title}</span>
             <span className="desc">
             <ul>
            
                {e.lines.map((line,index)=>(
                    <li>{line}</li> 
                ))}
             </ul>
             
             </span>

         </div>
           ))}
        </div>
    )
}

export default Cards