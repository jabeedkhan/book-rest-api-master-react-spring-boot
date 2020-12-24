import React, { Component } from 'react'
import { Jumbotron  } from 'react-bootstrap';

export class Welcome extends Component {
    render() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome to Book shop</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>

            </Jumbotron>
        )
    }
}

export default Welcome
