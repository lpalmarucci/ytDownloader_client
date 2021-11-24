import { React, useState, useEffect } from "react";
import './css/Download.css';
import axios from "axios";
import { withRouter } from "react-router";
import { checkAuth } from "./lib/auth";
import WaveDivider from "./components/WaveDivider";
import DownloadStartedText from "./components/DownloadStartedText";
import ErrorMessage from './components/ErrorMessage'
import { checkResponseStatus } from './lib/request'

const Download = (props) => {

  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [severity, setSeverity] = useState("");
  var [downloadStarted, setDownloadStart] = useState(false);

  //Check if the user is authenticated
  useEffect(() => {
    if (!props.location?.state?.authenticated && !checkAuth()) props.history.push('/login');
  }, []);

  const handleClick = (ev) => {
    ev.preventDefault();
    setErrorMessage('');
    setSeverity('');
    axios({
      method: 'POST',
      url: 'http://localhost:3001/download',
      data: {
        url
      },
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(async (res) => {
      console.log('response', res);
      console.group('Request');
      console.log(res);
      if (!checkResponseStatus(res.data)) {
        if (res.data.status === 401) {
          props.history.push('/login', { errorMessage: res.data.body.errorMessage })
        }
      }
      setErrorMessage('');
      setSeverity('');

      if (res.headers['content-type'].includes('mp4')) {
        const blob = new Blob([res.data]);
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = 'video.mp4';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.log('JSON ', res.data);
        setErrorMessage(res.data.body?.errorMessage);
        setSeverity(res.data.severity);
      }



      setDownloadStart(true);
      setUrl("");



      // console.log(res);
      // const reader = res.data.body.getReader();

      // while (true) {
      //   const { done, value } = await reader.read();

      //   if (done) break;

      //   console.log(`Receiver ${value.length} bytes`);
      // }
      console.groupEnd();
    }).catch(err => {
      console.error(err);
    })
  }

  return (
    <>
      <div className="container">
        <h1>Youtube Downloader</h1>
        <div className="container-grid">
          <form id="main">
            <input type="text" id="searchbox" name="url" onChange={(e) => setUrl(e.target.value)} value={url} />
            <button type="submit" onClick={handleClick}>Convert now</button>
          </form>
          <div className="container-flex">
            <ErrorMessage errorMessage={errorMessage} severity={severity} />
            <WaveDivider />
          </div>
        </div>
      </div>
      <div className="container container2">
        {errorMessage === '' && <DownloadStartedText downloadStarted={downloadStarted} />}
      </div>
    </>
  );
}

export default withRouter(Download);
