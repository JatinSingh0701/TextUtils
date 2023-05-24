import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowerclick = () => {
        let newText = text.toLowerCase(); // Invoke toLowerCase method
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>

            <div className='container'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    {/* <label for="myBox">Example textarea</label> */}
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="12"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowerclick} >Convert to lowerCase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words,{text.length} characters</p>
                <p>{0.0008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    );
}

