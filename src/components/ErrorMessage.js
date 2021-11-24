import React from 'react'

export default function ErrorMessage(props) {

    console.log(props);

    let tag = <span className="error-message"></span>;
    if (props.errorMessage !== '') {
        console.log('messaggio da mostrare');
        tag = <span className={`error-message ${props.severity}-alert`}>{props.errorMessage}</span>
    } else {
        console.log('non ci sono errori');
    }
    return (
        <>
            {tag}
        </>
    )
}

