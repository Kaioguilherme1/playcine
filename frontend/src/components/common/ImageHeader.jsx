import { Box, useTheme } from "@mui/material";
import uiConfigs from "../../configs/ui.configs";

const ImageHeader = ({ imgPath }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      zIndex: "-1",
      position: "relative",
      paddingTop: { xs: "60%", sm: "40%", md: "35%" },
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundImage: `url(${imgPath})`,
      backgroundAttachment: "fixed",
      transition: "background-image 0.3s ease-in-out", // Smooth transition effect
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        ...uiConfigs.style.gradientBgImage[theme.palette.mode]
      }
    }} />
  );
};

export default ImageHeader;