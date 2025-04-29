import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiExpand } from "react-icons/bi";

const GalleryArea = () => {
    const galleryItems = [
        { image: "https://img.freepik.com/free-photo/students-with-tablets-talking_23-2147663375.jpg", name: "Campus Walkway", category: "university" },
        { image: "https://img.freepik.com/free-photo/couple-with-salesman-furniture-store_1157-37482.jpg", name: "Evening Football", category: "sports" },
        { image: "https://img.freepik.com/premium-photo/young-people-children-happy-students-gathered-together-celebrating-student-day_285885-4710.jpg", name: "Street Mural", category: "arts and culture" },
        { image: "https://img.freepik.com/free-photo/friends-with-smile-happy-emotions-university_496169-67.jpg", name: "Group Study", category: "students" },
        { image: "https://img.freepik.com/free-photo/happy-circle-friends-planning-trip-globe-trotters-inspecting-map-being-home-european-indian-ethnicity-men-holding-guitar-globe_1157-47900.jpg", name: "Silent Reading", category: "university" },
        { image: "https://img.freepik.com/free-photo/india-republic-day-celebration-digital-art-with-people_23-2151070862.jpg", name: "Hoops Night", category: "sports" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredItems = selectedCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        document.body.style.overflow = "hidden"; // prevent scroll
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
        }
    };

    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (lightboxIndex !== null) {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });

    return (
        <>
            <section className="gallery-section section-padding pt-0 fix">
                <div className="container">
                    <div className="section-title text-center">
                        <h6>Photo Gallery</h6>
                        <h2>Explore Our Photo Gallery</h2>
                    </div>

                    {/* Tabs */}
                    <ul className="nav justify-content-center mb-4">
                        {["all", "university", "sports", "arts and culture", "students"].map(cat => (
                            <li key={cat} className="nav-item">
                                <button
                                    className={`nav-link ${selectedCategory === cat ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Gallery Items */}
                    <div className="row">
                        {filteredItems.map((e, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-4">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb position-relative">
                                        <img src={e.image} alt={e.name} className="img-fluid" />
                                        <div className="portfolio-arrow position-absolute top-0 end-0 p-2">
                                            <button onClick={() => openLightbox(i)} className="btn btn-light rounded-circle">
                                                <BiExpand/>
                                            </button>
                                        </div>
                                        <div className="portfolio-text text-center mt-2">
                                            <h3>{e.name}</h3>
                                            <p>{e.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox Full View */}
                    {lightboxIndex !== null && (
                        <div className="lightbox-overlay" onClick={closeLightbox}>
                            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                                <img src={filteredItems[lightboxIndex].image} alt="Preview" />
                                <h5 className="text-white mt-2">{filteredItems[lightboxIndex].name}</h5>
                                
                            </div>
                        </div>
                    )}
                </div>
            </section>

            
        </>
    );
};

export default GalleryArea;
