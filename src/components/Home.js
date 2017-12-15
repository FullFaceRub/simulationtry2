import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
              <Link to = '/shelf/A'><div className ="shelf"> Shelf A</div></Link>
              <Link to = '/shelf/B'><div className ="shelf"> Shelf B</div></Link>
                <Link to ='/shelf/C'><div className ="shelf"> Shelf C</div></Link>
                <Link to ='/shelf/D'><div className ="shelf"> Shelf D</div></Link>
            </div>
        
        )
    }
}


export default Home;
