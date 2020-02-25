import React, { Component } from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
export class Store extends Component {
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

                        {this.props.allProdData.map((product) => (
                            <Grid key={product.title} item xs={6}> <Item plusMinus={"false"}
                                addToCartItem={this.props.addToBody}
                                product={product} /> </Grid>
                        ))}
                    </Grid>
                </div>
            )
        }
    }
}

export default Store;

