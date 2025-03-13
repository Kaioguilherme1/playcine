import { useSelector } from "react-redux";
import { Paper, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const GlobalLoading = () => {
  const { globalLoading } = useSelector((state) => state.globalLoading);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [globalLoading]);

  return (
    <Paper
      sx={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: "none",
        transition: "opacity .3s ease",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)" // Darker background color
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Logo />
        <CircularProgress sx={{ marginTop: 2 }} />
      </Box>
    </Paper>
  );
};

export default GlobalLoading;