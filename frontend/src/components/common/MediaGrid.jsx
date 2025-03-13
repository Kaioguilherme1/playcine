import React, { memo } from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import tmdbConfigs from "../../api/configs/tmdb.configs";

const MediaItem = memo(({ media, mediaType }) => (
  <Grid item xs={6} sm={4} md={3} key={media.id}>
    <Link to={`/${mediaType}/${media.id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          position: "relative",
          paddingTop: "140%",
          backgroundImage: `url(${tmdbConfigs.posterPath(media.poster_path)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
          }
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            textAlign: "center"
          }}
        >
          {media.title || media.name}
        </Box>
      </Box>
    </Link>
  </Grid>
));

MediaItem.propTypes = {
  media: PropTypes.object.isRequired,
  mediaType: PropTypes.string.isRequired
};

const MediaGrid = ({ medias, mediaType }) => (
  <Grid container spacing={2}>
    {medias.map((media) => (
      <MediaItem key={media.id} media={media} mediaType={mediaType} />
    ))}
  </Grid>
);

MediaGrid.propTypes = {
  medias: PropTypes.arrayOf(PropTypes.object).isRequired,
  mediaType: PropTypes.string.isRequired
};

export default memo(MediaGrid);