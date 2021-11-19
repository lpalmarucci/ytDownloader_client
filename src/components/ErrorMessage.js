import React from 'react'

export default function ErrorMessage(props) {

    let tag = <React.Fragment />;
    if (props.errorMessage !== '') {
        tag = <span className={`${props.severity}-alert`}>{props.errorMessage}</span>
    }
    return (
        <>
            {tag}
        </>
    )
}

