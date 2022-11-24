import React, { Component } from 'react';

export default class FooterComponent extends Component {
    constructor(props){
        super(props)
    
        this.state={
            employees:[]
        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span classname="text-muted">All Rights Reserved 2020 @PoobeshPalanisamy </span>
                </footer>

                
            </div>
        );
    }
}
