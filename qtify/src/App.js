import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbum } from "./api/api";
import Section from "./components/Section/Section";


function App() {

  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbum();
      setTopAlbumsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateTopAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section data={topAlbumsData} title="Top Albums" type="album"/>
    </div>
  );
}

export default App;
