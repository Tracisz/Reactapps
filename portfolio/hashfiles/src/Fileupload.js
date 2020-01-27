import * as React from "react";
import "./index.css"

// const crypto = require('crypto')
const crypto = require("crypto")



export class FileSelector extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            hashOfFile: ""
        }
    }

    handleChange(files)
    {
        let file = files[0];
        console.log(file)
        let reader = new FileReader();
        let readerAsText = reader.readAsText(files[0]);
        reader.onload = (e) => { 
            let pwd = e.target.result,
            hashPwd = crypto.createHash('sha256')
            .update(pwd)
            .digest('hex')
            this.setState({
                hashOfFile: hashPwd
            })
            console.log(hashPwd);
            console.log("text:", e.target.result)
           

        }
        // reader.onload = function (event) {
        //     var data = event.target.result;
        //     var encrypted = CryptoJS.SHA256( data );
        //     console.log('encrypted: ' + encrypted);
        };
        // reader.readAsBinaryString(file);
        // const pwd = selectorFiles[0], 
        // hashPwd = crypto.createHash('sha256')
        // .update(pwd)
        // .digest('hex')
        // console.log(hashPwd);
    

    render ()
    {
        return (
        <div className = "file-reader">
            <h1 className = "file-reader-child">Upload a file and get a SHA256 hash value</h1>
            <br></br>
            <input className = "file-reader-child" name = "file" type="file" onChange={ (e) => this.handleChange(e.target.files) } />
           <p>{this.state.hashOfFile}</p> 
        </div>
        )
    }
}

 export default FileSelector