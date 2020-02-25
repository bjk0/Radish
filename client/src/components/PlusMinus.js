import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
class PlusMinus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.amount
        }
    };
    render() {
        return (
            <div>
                <Typography>&nbsp; &nbsp; &nbsp;{this.props.amount}</Typography>

                <div className="container text-center class-width" style={{ padding: "5px" }}>
                    <div className="card">
                        <div className="card-block">
                            <div className="btn-group-sm" role="group" aria-label="Basic example">
                                <div style={{
                                    position: "relative",
                                    left: "0"
                                }}>
                                    <IndeterminateCheckBoxIcon type="button" fontSize="large" style={{ color: "#1BD893" }} className="btn" onClick={this.props.decAmount.bind(this, this.props.id)}> </IndeterminateCheckBoxIcon>
                                    <AddBoxIcon type="button" fontSize="large" style={{ color: "#1BD893" }} className="btn" onClick={this.props.incAmount.bind(this, this.props.id)} > </AddBoxIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlusMinus;