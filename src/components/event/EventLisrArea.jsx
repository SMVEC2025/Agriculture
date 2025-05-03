import { useState, useMemo } from "react";
import {  useNavigate } from "react-router-dom";
import NiceSelect from "../../ui/NiceSelect";

const EventListArea = ({ events }) => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleNavigate = (event) => {
        navigate(`/event-details/${event?.acf.title}`, { state: { event } });
    };

    // Get unique locations from events
    const locationOptions = useMemo(() => {
        const locations = events?.map((event) => event?.acf?.location).filter(Boolean);
        const uniqueLocations = Array.from(new Set(locations));
        return [{ value: "", text: "All Locations" }, ...uniqueLocations.map(loc => ({ value: loc, text: loc }))];
    }, [events]);

    // Filter events based on search and location
    const filteredEvents = events?.filter(event => {
        const matchesSearch = event?.acf?.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = selectedLocation ? event?.acf?.location === selectedLocation : true;
        return matchesSearch && matchesLocation;
    });

    return (
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                    <div className="event-list-top-area">
                        <div className="search-widget">
                            <input
                                type="text"
                                placeholder="Find event"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="sub-icon"><i className="fal fa-search"></i></div>
                        </div>
                        <div className="form-clt">
                            <NiceSelect
                                className="category"
                                options={locationOptions}
                                defaultCurrent={0}
                                onChange={(option) => setSelectedLocation(option.value)}
                                name=""
                                placeholder=""
                            />
                        </div>
                        <div className="event-button-top">
                            <button type="button" className="theme-btn" onClick={() => { }}>Find Event</button>
                        </div>
                    </div>

                    {filteredEvents?.length > 0 ? filteredEvents.map((event, index) => (
                        <div key={index} className="event-list-items">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>{event?.acf?.date.split("/")[0]}</h2>
                                        <span>{event?.acf?.date.split("/")[1]}-{event?.acf?.date.split("/")[2]}</span>
                                    </div>
                                    <div className="title-text">
                                        <h4>{event?.acf?.title}</h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i> {event?.acf?.location}</li>
                                            <li><i className="far fa-clock"></i> {event?.acf?.time}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src={event?.acf?.image} alt="event" />
                            </div>
                            <div className="event-btn">
                                <button className="theme-btn" onClick={() => handleNavigate(event)}>
                                    view
                                </button>
                            </div>
                        </div>
                    )) : (
                        <p>No events found.</p>
                    )}

                </div>
            </div>
        </section>
    );
};

export default EventListArea;
