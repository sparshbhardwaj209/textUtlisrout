import React, { useState } from "react";

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText); 
        props.showAlert("Text Cleared!", "success");
    }


  const [text, setText] = useState("");
  return (
    <>
    <div className="container"
         style={{color: props.mode === 'dark'?'whitesmoke':'#2b3035'}}
        >
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows={8}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'?'#2b3035':'whitesmoke', color: props.mode === 'dark'?'whitesmoke':'#2b3035'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-11`} onClick={handleUpClick}>Uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-1`} onClick={handleLoClick}>Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-1`} onClick={handleCopyClick}>Copy</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"
         style={{color: props.mode === 'dark'?'whitesmoke':'#2b3035'}}
        >
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
}
