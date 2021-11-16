import {React, useState, useEffect} from "react";
import ReactDom from 'react-dom'
import './App.css';
import imgFileDownloaded from './img/check.svg';
import axios from 'axios';

const App = () => {

  const [file, setFile] = useState({});
  const [url, setUrl] =useState("");
  var [downloadSuccessStyle, setDownloadSuccessStyle] = useState({opacity: 0});

  useEffect(() => {

  }, []);

  const handleClick = () => {
    window.open(`http://localhost:3001/download?url=${url}`);
    setDownloadSuccessStyle({opacity: 1});
    setTimeout(() => {
      setDownloadSuccessStyle({opacity: 0});
    },5000);
    setUrl("");
  }

  const handleChange = (event) => setUrl(event.target.value);

  return (
    <div id="container">
      <h1 id="title">Youtube Downloader</h1>
        <div id="main">
            <input type="text" id="searchbox" name="url" onChange={handleChange} value={url}/>
            <button type="button" id="convertNow" onClick={handleClick}>Convert now</button> 
        </div>
        <div id="downloadSuccess" style={downloadSuccessStyle}>
            <img src={imgFileDownloaded} height="50" width="50"/>
            <p>Download started!</p>
        </div>
    </div>
  );
}

export default App;
