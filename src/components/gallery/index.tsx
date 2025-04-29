import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import GalleryArea from "./GalleryArea";

 

const Gallery = () => {
	return (
		<>
		<Preloader />
			<BreadcrumbEvent title="Gallery" subtitle="Gallery" />
			<GalleryArea />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Gallery;
