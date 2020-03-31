import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ setFetchData }) => {
  const [search, setSearch] = useState({
    artist: "",
    song: ""
  });
  const [error, setError] = useState(false);

  //func para leer el contenido

  const { artist, song } = search;

  const handleChange = e => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setFetchData(search);
  };

  return (
    <>
      <div className="bg-info">
        <div className="container">
          {error ? (
            <p className="alert alert-danger text-center p-2">
              Todos los campos son obligatorios
            </p>
          ) : null}
          <div className="row">
            <form
              className="col card text-white bg-transparent mb-5 pt-5 pb-2"
              onSubmit={handleSubmit}
            >
              <fieldset>
                <legend className="text-center">
                  Buscador de letras de canciones
                </legend>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Artista a buscar</label>
                      <input
                        type="text"
                        className="form-control"
                        name="artist"
                        placeholder="Nombre de Artista"
                        onChange={handleChange}
                        value={artist}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Cancion a buscar</label>
                      <input
                        type="text"
                        className="form-control"
                        name="song"
                        placeholder="Nombre de Cancion"
                        onChange={handleChange}
                        value={song}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary float-right">
                  Buscar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  setFetchData: PropTypes.func.isRequired
};

export default Form;
