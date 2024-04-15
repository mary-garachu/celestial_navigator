import React from 'react';
import { toAbsoluteUrl } from '../../_helpers/utils';
import "./index.css"

const milky1 = toAbsoluteUrl('/Assets/logos/icon5.png');
const ImageGrid = () => {
    return (
        <div className="image-grid-container">
            <div className="image-grid-container-content">
                <div className="grid-item">
                    <p>
                    
Did you know that our solar system doesn't travel through space alone? It's actually part of a larger formation called the Local Interstellar Cloud (LIC), which is a denser region within the Local Bubble, a cavity in the interstellar medium. But here's the kicker: the Local Bubble is just a tiny pocket within the Orion Arm of the Milky Way galaxy. So while we journey around the Sun, we're also cruising through this fascinating, ever-changing cosmic neighborhood. This means that as we orbit the galactic center, we're not just moving in isolation; we're part of a dynamic dance with countless other stars, gas clouds, and cosmic phenomena. So next time you look up at the night sky, remember: we're not just inhabitants of a solar system, but citizens of a vast galactic community.
                    </p>
                    <img src= { milky1 } alt="Milky Way 1" className="grid-item-image" />
                </div>`
            </div>
        </div>
    );
};

export default ImageGrid;