import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
class PlusMinus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    };

    increment() {
        let count = this.state.count
        count++;
        this.setState({ count });
    }

    decrement() {
        let count = this.state.count

        if (count > 0) { count-- };

        this.setState({ count });

    }

    render() {
        return (
            <div>
                <Typography>&nbsp; &nbsp; &nbsp;{this.state.count}</Typography>

                <div className="container text-center class-width" style={{ padding: "5px" }}>
                    <div className="card">
                        <div className="card-block">
                            <div className="btn-group-sm" role="group" aria-label="Basic example">
                                <div style={{
                                    position: "relative",
                                    left: "0"
                                }}>
                                    <IndeterminateCheckBoxIcon type="button" fontSize="large" style={{ color: "#d81b60" }} className="btn" onClick={this.decrement}> </IndeterminateCheckBoxIcon>
                                    <AddBoxIcon type="button" fontSize="large" style={{ color: "#d81b60" }} className="btn" onClick={this.increment}> </AddBoxIcon>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlusMinus;