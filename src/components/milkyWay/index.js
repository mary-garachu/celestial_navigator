import React from 'react';
import { toAbsoluteUrl } from '../../_helpers/utils';
import "./index.css"

const milky1 = toAbsoluteUrl('/Assets/images/milky4.jpg');
const milky2 = toAbsoluteUrl('/Assets/images/milky2.jpg');
const milky3 = toAbsoluteUrl('/Assets/images/milky3.jpg');
const ImageGrid = () => {
    return (
        <div className="image-grid-container">
            <div className="grid-item">
                <img src= { milky1 } alt="Milky Way 1" />
                <p>View of the Milky Way galaxy from Earth</p>
            </div>
            <div className="grid-item">
                <img src= { milky2 } alt="Milky Way 2" />
                <p>Close-up of a star cluster in the Milky Way</p>
            </div>
            <div className="grid-item">
                <img src= { milky3 } alt="Milky Way 3" />
                <p>An artist's impression of the Milky Way galaxy</p>
            </div>
        </div>
    );
};

export default ImageGrid;