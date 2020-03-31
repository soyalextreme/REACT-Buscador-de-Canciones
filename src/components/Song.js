import React from "react";
import PropTypes from "prop-types";

const Song = ({ lyric }) => (
  <>
    <h2>Letra de la cancion</h2>
    <p className="letra">{lyric}</p>
  </>
);

Song.propTypes = {
  lyric: PropTypes.string.isRequired
};

export default Song;
