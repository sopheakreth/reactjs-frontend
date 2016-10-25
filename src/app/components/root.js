import React from "react";

import {Header} from "./header";

export class Root extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}