import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

interface MyComponentProps {
  backgroundimg: any;
  backgroundlayerimg: any;
}

const AdvancedBannerTop = ({ backgroundimg, backgroundlayerimg }: MyComponentProps) => {
  const background: BannerLayer = {
    image: backgroundimg, // use prop
    translateY: [10, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        {/* optional content */}
      </div>
    )
  };

  const foreground: BannerLayer = {
    image: backgroundlayerimg, // use prop
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};

export default AdvancedBannerTop;
