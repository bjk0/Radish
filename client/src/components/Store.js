import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
export class Store extends Component {
    state = {
        loading: true,
        productData: []
    };
    async componentDidMount() {
        const url = "http://localhost:3001/prod/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ productData: data, loading: false });

    }

    render() {
        if (this.state.loading) {
            return <ReactLoading type={"spinningBubbles"} color="#d81b60" />
        }
        if (!this.state.productData) {
            return <div>Failed</div>
        } else {
            return (

                <div style={{ position: 'absolute',top: '80px',  flexGrow: '1' }}>
                    <Grid container spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="flex-start">

                        {this.state.productData.map((product, index) => (
                            <Grid item xs={6}> <Item product={product} /> </Grid>
                        ))}

                    </Grid>
                </div>
            );

        }
    }
}

export default Store
