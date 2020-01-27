import React, { Component } from 'react';
import FileSelector from "./Fileupload"
import ParticlesBg from 'particles-bg'


class App extends Component {
  constructor(){ 
    super()
    this.state = { 
      files: {}
    }
  }

    render ()
    {
        return(
        <div>
          <ParticlesBg color="#2436FF" num={200} type="cobweb" bg={true} />
          <FileSelector />
        </div>
        )
    }
}

export default App;
