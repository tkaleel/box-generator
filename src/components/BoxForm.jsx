import React, { useState } from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const listColors = props.colors;
    console.log(listColors);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBoxColor = { color };
        console.log("Your chosen color: ", newBoxColor.color);
        props.onNewColor(color);
        setColor("");

        console.log(props.colors)
        setHasBeenSubmitted(true);

    }

    const handleColor = (e) => {
        setColor(e.target.value);

    }

    const boxStyle = {
        margin: '10px',
        background: props.color,
        width: '150px',
        height: '150px',
        border: 'none'
    };

    const boxGenerator = () => {
        if (hasBeenSubmitted) {
            return (
                <div>
                <div style={boxStyle}></div>
                <div>
                    {listColors.map((item, i) =>
                        // <li key={i}>{item}</li>
                        <div key={i} style={{
                            margin: '10px',
                            background: item,
                            width: '150px',
                            height: '150px',
                            border: 'none'
                        }}>{item}</div>

                        )}
                </div>
                </div>
            );
        } else {
            return "Please select a color.";
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Box Generator</h1>
                    <label>Choose a Color for the New Box: </label>
                    <input type="text" onChange={handleColor} value={color} />
                    <input type="submit" value="Add Box" />
                </div>
            </form>
            <h2>Boxes</h2>
            <p>{color}</p>
            <div>
                {boxGenerator()}
            </div>


        </div>
    )
}

export default BoxForm
