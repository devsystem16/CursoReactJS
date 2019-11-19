import React, { Component, Fragment } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    
    render() {
        const {title} = this.props
        return (
            <Fragment>
                <div className="row">
                        <div className="col-md-12">
                            <header> <h1>  {title}</h1></header>
                        </div>
                </div>
            </Fragment>

        );
    }
}

export default Header;