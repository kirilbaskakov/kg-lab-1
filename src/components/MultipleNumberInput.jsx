import React, { useEffect, useState } from 'react';
import NumberInput from './NumberInput';

const MultipleNumberInput = ({title, inputs, value, onChange}) => {
    const [values, setValues] = useState(new Array(inputs.length).fill(0));

    useEffect(() => {
        setValues(value.split(", ").map(s => parseInt(s.trim())));
    }, [value]);

    const onInputChange = (ind) => (newValue) => {
        const newValues = values.map((value, i) => i == ind ? newValue : value);
        setValues(newValues);
        if (onChange) {
            onChange(newValues.map((value, ind) => value + (inputs[ind].type ?? "%")).join(", "));
        }
    }
    return (
        <div className="input-container">
          <h3>{title}</h3>
          <div className="inputs">
            {inputs.map((input, ind) => 
                <NumberInput 
                    key={ind} 
                    label={input.label} 
                    max={input.max ?? 100} 
                    type={input.type ?? "%"}
                    value={values[ind]}
                    onChange={onInputChange(ind)}
                />
            )}
          </div>
        </div>
    );
};

export default MultipleNumberInput;