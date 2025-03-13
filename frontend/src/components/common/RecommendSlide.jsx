import { SwiperSlide } from "swiper/react";
import AutoSwiper from "./AutoSwiper";
import MediaItem from "./MediaItem";

const RecommendSlide = ({ medias, mediaType }) => {
  return (
    <AutoSwiper>
      {medias.map((media, index) => (
        <SwiperSlide key={index} style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", margin: "0 8px" }}>
          <MediaItem media={media} mediaType={mediaType} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default RecommendSlide;