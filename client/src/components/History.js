import React, { Component } from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
export class History extends Component {
    render() {
        if (!this.props.allProdData) {
            return <div>Failed</div>
        } else {
            return (

                <div style={{ top: '80px', flexGrow: '1' }}>
                    <Grid container spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="flex-start">

                        {this.props.userProdData.map((product) => (
                            <Grid key={product.prodId.toString()} item xs={6}> <Item
                                addToCartItem={this.props.addToBody}
                                cart={this.props.cart}
                                product={this.props.allProdData.find(x => (x.id === product.prodId))} />
                            </Grid>
                        ))}

                    </Grid>
                </div>
            )

        }
    }
}


export default History;
