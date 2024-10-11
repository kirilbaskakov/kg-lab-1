import React, { useEffect, useState } from 'react';

const NumberInput = ({label, type="%", max, value, onChange}) => {
    const [currValue, setCurrValue] = useState(value);

    useEffect(() => {
        setCurrValue(value);
    }, [value]);

    const onInputChange = (e) => {
        let value = e.target.value;
        if (value != "") {
            value = Math.max(0, Math.min(value, max));
        }
        setCurrValue(value);
        if (value != "" && onChange) {
            onChange(value);
        }
    } 

    return (
        <div className='number-input'>
            <label>{label}</label> 
            <div>
                <input type="number" value={currValue} onChange={onInputChange} step={1}/>
                <span>{type}</span>
            </div>
            <input type="range" value={currValue} onChange={onInputChange} max={max}/>
        </div>
    );
};

export default NumberInput;