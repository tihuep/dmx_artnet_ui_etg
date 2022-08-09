import { useState } from "react";
import ReactSlider from "react-slider";
import { properties } from "./properties.js";
    
const Slider = (props) => {
    const fixture = props.fixture;
    const attribute = props.attribute;
    const server_ip = properties.server_ip;
    const url = 'http://' + server_ip + ':8080/' + fixture + '/' + attribute;

    const [currentValue, setCurrentValue] = useState(updateValue());

    function updateValue() {
        fetch(url)
            .then(response => response.json())
            .then(data => {setCurrentValue(data)});
    }


    const handleSliderChange = (newValue) => {
        fetch(url  + '/' + newValue, {
            method: 'POST'
        });

        setCurrentValue(newValue);
    }

    return (
        <div class="slider-wrapper">
            <span>{props.name}</span>
            <ReactSlider 
                className="customSlider"
                trackClassName="customSlider-track"
                thumbClassName="customSlider-thumb"
                min={0}
                max={127}
                value={currentValue}
                onChange={handleSliderChange}
            />
            <button class="slider-update" onClick={updateValue}>Update</button>
        </div>
    );
};

export default Slider;