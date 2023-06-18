import React, { useRef } from 'react'

const WebGiViewer = () => {
    const canvasRef = useRef(null);

    return (
        <div id='webgi-convas-container'>
            <canvas id='webgi-canvas' ref={canvasRef} />
        </div>
    )
}

export default WebGiViewer