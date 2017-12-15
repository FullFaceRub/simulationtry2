import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Shelf extends Component {
    constructor(){
        super();
        this.state={

        }
    }


    render(){
        return(
            <div><h2>{this.props.match.params.class}</h2>
                <Link to = '/bin/1'><div className ="shelf"> Bin1</div></Link>
              <Link to = '/bin/2'><div className ="shelf"> Bin 2</div></Link>
                <Link to ='/bin/3'><div className ="shelf"> Bin 3</div></Link>
                <Link to ='/bin/4'><div className ="shelf"> Bin 4</div></Link>

            </div>
        )
    }
}