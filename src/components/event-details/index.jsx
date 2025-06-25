import { useLocation } from "react-router-dom";
import BreacrumbEventDetails from "../../common/breadcrumb/BreacrumbEventDetails";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import EventDetailsArea from "./EventDetailsArea";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";



const EventDetails = () => {
	const location = useLocation();
	const { events } = useContext(AppContext)
	const [updatedEvents, setUpdatedEvents] = useState()
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const eventNameFromURL = decodeURIComponent(window.location.pathname.split("/").pop());

		// Filter event by title match
		const matchedEvent = events.find(
			(event) => event?.acf?.title?.trim().toLowerCase() === eventNameFromURL.trim().toLowerCase()
		);

		if (matchedEvent) {
			setUpdatedEvents(matchedEvent)
			return
		} else {
			setUpdatedEvents(location?.state?.event)
		}
	}, [events])



	return (
		<>
			<Preloader />
			<BreacrumbEventDetails />
			<EventDetailsArea events={updatedEvents} />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default EventDetails;
