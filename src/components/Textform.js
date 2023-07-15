import React ,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        console.log(props.mode)
    }
    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("Changed");
        setText(event.target.value)
    }

    const clearText= () =>{
        setText("");
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
  return (
    <>
    <div className = "container" style = {props.mode==='light'? {color : "black"}:{color : "white"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text}  onChange = {handleOnChange} style = {{backgroundColor : props.mode==='light'?'white':'#3B4045', color : props.mode==='light'?'black':'white'}}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick = {handleDownClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick = {clearText}>Clear Text</button>
    <button className="btn btn-primary" onClick = {handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style = {props.mode==='light'? {color : "black"}:{color : "white"}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}  minutes to read</p>
        <h2> Preview </h2>
        <p>{text}</p>
    </div>
    </>
  )
}
