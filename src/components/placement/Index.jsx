import React, { useMemo } from "react";
import './PlacementPage.scss'
import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
export default function Index() {
  const THEME = { primary: "#37429c", accent: "#d12546" };

  const students = useMemo(
    () => [
      {
        id: "S001",
        name: "YUVARAJ.K",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/YUVARAJ.K.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
       {
        id: "S001",
        name: "YOGESHWARI.S",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/YOGESHWARI.S.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
       {
        id: "S001",
        name: "SUBARANAN.K",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/SUBARANAN.K.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
       {
        id: "S001",
        name: "SEERALATHAN.A",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/SEERALATHAN.A.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
       {
        id: "S001",
        name: "RAGHUL.R",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/RAGHUL.R.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
       {
        id: "S001",
        name: "DHINESH.V",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/DHINESH.V.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
       {
        id: "S001",
        name: "ASHOK KUMAR.N",
        company: "Bayer Crop",
        role: "Field officer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/bayer/fieldofficer/ASHOK KUMAR.N.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
         {
        id: "S001",
        name: "GANDHAM LAKSHMI NAGA SOWJANYA",
        company: "Bayer Crop",
        role: "Project officer",
        packageLPA: 3.0,
        image:
          "/assets/img/placement/bayer/projectofficer/GANDHAM LAKSHMI NAGA SOWJANYA.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
         {
        id: "S001",
        name: "POOJA.D",
        company: "Bayer Crop",
        role: "Project officer",
        packageLPA: 3.0,
        image:
          "/assets/img/placement/bayer/projectofficer/POOJA.D.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
         {
        id: "S001",
        name: "PRAVEEN KUMAR.S",
        company: "Bayer Crop",
        role: "Project officer",
        packageLPA: 3.0,
        image:
          "/assets/img/placement/bayer/projectofficer/PRAVEEN KUMAR.S.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
         {
        id: "S001",
        name: "SRIDHAR.V",
        company: "Bayer Crop",
        role: "Project officer",
        packageLPA: 3.0,
        image:
          "/assets/img/placement/bayer/projectofficer/SRIDHAR.V.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
         {
        id: "S001",
        name: "YOGESHWARI.S",
        company: "Bayer Crop",
        role: "Project officer",
        packageLPA: 3.0,
        image:
          "/assets/img/placement/bayer/projectofficer/YOGESHWARI.S.webp",
        companyLogo:
          "/assets/img/placement/bayer.png",
      },
      
      {
        id: "S002",
        name: "CHANDRU.R",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/CHANDRU.R.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "GOKULAKRISHNAN.R",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/GOKULAKRISHNAN.R.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "KUMUTHINI.C",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/KUMUTHINI.C.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "MANOJ.V",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/MANOJ.V.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "NIRANJANA.K",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/NIRANJANA.K.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "NITHESH.G",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/NITHESH.G.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "RAJA MEENAKSHI.V",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/RAJA MEENAKSHI.V.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "SRI VISHWALKSENA.S",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/SRI VISHWALKSENA.S.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "SUNDHARA MAHALINGAM.P",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/SUNDHARA MAHALINGAM.P.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "VEENA.B",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/VEENA.B.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
       {
        id: "S002",
        name: "VENKATRAMAN.C",
        company: "Dhanuka Agritech Ltd.",
        role: "System Engineer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/dhanuka/VENKATRAMAN.C.webp",
        companyLogo:
          "/assets/img/placement/dhanuka.png",
      },
      //rallis
       {
        id: "S002",
        name: "DHILIP KUMAR.V",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/DHILIP KUMAR.V.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "GOPIKRISHNAN.K",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/GOPIKRISHNAN.K.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "JANAGAR.S",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/JANAGAR.S.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "JAVAHAR.V",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/JAVAHAR.V.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "SANJAY.K",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/SANJAY.K.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "SANTHOSH KUMAR.D",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/SANTHOSH KUMAR.D.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "SRINATH.M",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/SRINATH.M.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "SWETHA.S",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/SWETHA.S.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },
       {
        id: "S002",
        name: "THIYAGARAJAN.M",
        company: "Rallis India Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rallis/THIYAGARAJAN.M.webp",
        companyLogo:
          "/assets/img/placement/rallis.png",
      },

      ///rukcho biotech
       {
        id: "S002",
        name: "VINOTHINI V",
        company: "Rukcho Biotech Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rukcho/VINOTHINI V.webp",
        companyLogo:
          "/assets/img/placement/rukcho.png",
      },
        {
        id: "S002",
        name: "KARTHIGA U",
        company: "Rukcho Biotech Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rukcho/KARTHIGA U.webp",
        companyLogo:
          "/assets/img/placement/rukcho.png",
      },
        {
        id: "S002",
        name: "KAVIYA L",
        company: "Rukcho Biotech Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rukcho/KAVIYA L.webp",
        companyLogo:
          "/assets/img/placement/rukcho.png",
      },
        {
        id: "S002",
        name: "KOKILASRI A",
        company: "Rukcho Biotech Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rukcho/KOKILASRI A.webp",
        companyLogo:
          "/assets/img/placement/rukcho.png",
      },
        {
        id: "S002",
        name: "PRIYADHARSHINI P",
        company: "Rukcho Biotech Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rukcho/PRIYADHARSHINI P.webp",
        companyLogo:
          "/assets/img/placement/rukcho.png",
      },
        {
        id: "S002",
        name: "RAMADEVI S",
        company: "Rukcho Biotech Ltd.",
        role: "Field Ofiicer",
        packageLPA: 2.4,
        image:
          "/assets/img/placement/rukcho/RAMADEVI S.webp",
        companyLogo:
          "/assets/img/placement/rukcho.png",
      },
    ],
    []
  );

  const placementPhotos = [
    {
      id: "P1",
      caption: "Pre-placement Talk Session",
      url: "/assets/img/placement/interview/1.webp",
    },
    {
      id: "P2",
      caption: "Pre-placement Talk Session",
      url: "/assets/img/placement/interview/2.webp",
    },
    {
      id: "P3",
      caption: "Technical Interview Round",
      url: "/assets/img/placement/interview/3.webp",
    },
    {
      id: "P4",
      caption: "post-placement",
      url: "/assets/img/placement/interview/4.webp",
    },
  ];

  const stats = useMemo(() => {
    const total = students.length;
    const avg = total === 0 ? 0 : students.reduce((s, x) => s + x.packageLPA, 0) / total;
    const max = Math.max(...students.map((s) => s.packageLPA));
    return { total, avg: Number(avg.toFixed(2)), max };
  }, [students]);

  const groups = useMemo(() => {
    const map = new Map();
    for (const s of students) {
      const key = s.company;
      if (!map.has(key)) map.set(key, { logo: s.companyLogo, rows: [] });
      map.get(key).rows.push(s);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [students]);

  return (
    <>
    <BreadcrumbEvent  title="Placement" subtitle="Placement" />
    <div className="placement-page" style={{ "--theme-primary": THEME.primary, "--theme-accent": THEME.accent }}>
      {/* Top bar */}
      

      {/* Hero */}
      <section className="hero container">
        <div className="hero__grid">
          <div className="hero__copy">
            <h2 className="hero__title">Career Placements & Offers</h2>
            <p className="hero__text">
              Celebrating our students who have secured offers from leading companies across industries.
            </p>
          </div>
          <div className="hero__stats">
            <div className="stats" id="stats">
              <Stat label="Placed" value={String(stats.total)} highlightColor="var(--theme-primary)" />
              <Stat label="Avg CTC" value={`${stats.avg} LPA`} highlightColor="var(--theme-accent)" />
              <Stat label="Highest" value={`${stats.max} LPA`} highlightColor="var(--theme-primary)" />
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process Photos */}
      <section className="photos container">
        <h3 className="section-title">Placement Process Moments</h3>
        <div className="photos__grid">
          {placementPhotos.map((p) => (
            <figure key={p.id} className="photo-card">
              <img src={p.url} alt={p.caption} className="photo-card__img" />
              <figcaption className="photo-card__caption">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Company Groups */}
      <main className="container">
        {groups.map(([company, meta]) => (
          <section key={company} className="company-section">
            <CompanyHeader company={company} count={meta.rows.length} logo={meta.logo} />
            <ul className="cards-grid">
              {meta.rows.map((s) => (
                <li key={s.id}>
                  <StudentCard student={s} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer__text">For placement assistance, contact the Career Development Centre.</p>
        </div>
      </footer>
    </div>
    </>
  );
}

function Stat({ label, value, highlightColor }) {
  return (
    <div className="stat">
      <dt className="stat__label">{label}</dt>
      <dd className="stat__value" style={{ color: highlightColor }}>{value}</dd>
    </div>
  );
}

function CompanyHeader({ company, count, logo }) {
  return (
    <div className="company-header">
      <div className="company-header__left">
        {logo ? (
          <img src={logo} alt={company} className="company-header__logo" loading="lazy" />
        ) : (
          <div className="company-header__logo company-header__logo--placeholder" aria-hidden />
        )}
        <h3 className="company-header__title">{company} </h3>
      </div>
    </div>
  );
}

function StudentCard({ student }) {
  return (
    <article className="student-card">
      <img src={student.image} alt={student.name} className="student-card__img" loading="lazy" />
      <div className="student-card__meta">
        <h4 className="student-card__name">{student.name}</h4>
        <p className="student-card__role">{student.role}</p>
      </div>
      <div className="student-card__lpa">
        <div className="student-card__lpa-value">{student.packageLPA} LPA</div>
      </div>
    </article>
  );
}
