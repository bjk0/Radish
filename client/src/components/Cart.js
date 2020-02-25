import React, { Component } from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

export class Cart extends Component {
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

                        {this.props.cart.map((product) => (
                            <Grid key={product.id.toString()} item xs={6}> <Item
                                incAmount={this.props.incAmount}
                                decAmount={this.props.decAmount}
                                plusMinus={"true"}
                                addToCartItem={this.props.addToBody}
                                cartItem={this.props.cart.find(x => (x.id === product.id))}
                                product={this.props.allProdData.find(x => (x.id === product.id))} />
                            </Grid>
                        ))}

                    </Grid>
                </div>
            )
        }
    }
}

export default Cart
