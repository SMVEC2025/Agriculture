import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "OeeMxu2bpXc",
}: any) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
        youtube={{ autoplay: 1 }}
      />
    </>
  );
};

export default VideoPopup;
