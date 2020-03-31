import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Axios from "axios";
import Song from "./components/Song";
import Info from "./components/Info";

function App() {
  const [fetchdata, setFetchData] = useState({});
  const [lyric, setLyric] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(fetchdata).length === 0) {
      return;
    }
    const { artist, song } = fetchdata;
    const fetchAPI = async () => {
      const uri = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const uriartist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [resultLyric, resultArtist] = await Promise.all([
        Axios.get(uri),
        Axios.get(uriartist)
      ]);

      setInfo(resultArtist.data.artists[0]);
      setLyric(resultLyric.data.lyrics);
    };

    fetchAPI();
  }, [fetchdata]);
  return (
    <>
      <Form setFetchData={setFetchData} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {Object.keys(info).length > 0 ? <Info info={info} /> : null}
          </div>
          <div className="col-md-6">
            {lyric ? <Song lyric={lyric} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
