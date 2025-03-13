import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import AutoSwiper from "./AutoSwiper";

const PosterSlide = ({ posters }) => {
  return (
    <AutoSwiper>
      {[...posters].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box sx={{
            paddingTop: "160%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${tmdbConfigs.posterPath(item.file_path)})`,
            borderRadius: "8px", // Slightly rounded corners
            overflow: "hidden", // Ensure the rounded corners are visible
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Add a subtle shadow for a modern look
          }} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default PosterSlide;