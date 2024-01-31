import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbum, fetchNewAlbum, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setnewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  // const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  // ===============================================================

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbum();
      setTopAlbumsData(data);
      // console.log("Top albums : ", data);
      // console.log("Top albums : ", topAlbumsData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateNewAlbums = async () => {
    try {
      const data = await fetchNewAlbum();
      setnewAlbumsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateAllSongData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
      console.log("Total Songs : ", res.length);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("UseEffect called.");
    const fetchData = async () => {
      await generateTopAlbums();
      await generateNewAlbums();
      await generateAllSongData();
    };

    fetchData();
  }, []);

  // ===============================================================

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };

  const filteredData = (val) => {
    // console.log(val);
    setFilteredDataValues(val);
  };

  const generateSongsData = () => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    // console.log(value);
    generateSongsData();
  }, [value]);


  console.log("Component Rendered.");
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>

        <Section
          title="Top Albums"
          type="album"
          filteredDataValues={topAlbumsData}
          toggleRequired
        />
        <Section
          title="New Albums"
          type="album"
          filteredDataValues={newAlbumsData}
          toggleRequired
        />

        <Section
          title="Songs"
          type="song"
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
