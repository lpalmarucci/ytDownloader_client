import React, { useEffect } from 'react'
import '../css/DownloadStarted.css'

export default function DownloadStartedText({ downloadStarted }) {

    useEffect(() => {

    }, [])


    return (
        <div className="success-download-container">

            <svg id="downloadSuccessImg" width="215" height="204" viewBox="0 0 215 204" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate__animated animate__zoomInDown">
                <g id="passed">
                    <path id="cerchio" d="M176 100C176 133.654 148.501 161 114.5 161C80.4988 161 53 133.654 53 100C53 66.3461 80.4988 39 114.5 39C148.501 39 176 66.3461 176 100Z" stroke="#B1B7ED" strokeWidth="10" />
                    <path id="spunta" d="M89 92.9172C109.496 156.422 130.873 108.099 139 76" stroke="#48EA89" strokeWidth="7" />
                </g>
            </svg>


            <h1 style={{ color: 'white', fontWeight: 'bold' }} className="success-download-text animate__animated animate__fadeInUp">Download started!</h1>
        </div>
    )
}
