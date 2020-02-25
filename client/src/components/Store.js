import React, { Component } from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
export class Store extends Component {

    // async componentDidMount() {
    //     const url = "http://ec2-3-126-85-150.eu-central-1.compute.amazonaws.com:3001/prod/";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     this.setState({ productData: data, loading: false });

    // }

    render() {

        if (!this.props.allProdData) {
            return <div>Failed</div>
        } else {
            return (

                <div style={{ top: '80px',  flexGrow: '1' }}>
                    <Grid container spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="flex-start">

                        {this.props.allProdData.map((product) => (
                            <Grid key={product.title} item xs={6}> <Item plusMinus={"false"}
                            addToCartItem = {this.props.addToBody} 
                             product={product} /> </Grid>
                        ))}

                    </Grid>
                </div>
                
            );

        }
        
    }
}

export default Store

