import React from 'react'
import '../botones/botones.css'

const Empty_button = (props) => {
    return (
        <>
            <button className='btn-empty'>
                {props.text}
            </button>
        </>
    )
}

export default Empty_button