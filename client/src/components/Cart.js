import React, { Component } from 'react';

import ReactLoading from 'react-loading';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
export class Cart extends Component {
    state = {
            userProd: [],
            allProd: [],
        loading : true
      };
      async componentDidMount() {
        const urlProd = "http://localhost:3001/prod/"
        const urlUser = "http://localhost:3001/users/userGetById/9";
        const userResponse = await fetch(urlUser);
        const userData = await userResponse.json();
        const prodResponse = await fetch(urlProd);
        const prodData = await prodResponse.json();

        this.setState({ userProd: userData.userProducts, allProd: prodData, loading: false  });
       }
    render() {
        if (this.state.loading) {
            return <ReactLoading type={"spinningBubbles"} color="#d81b60" />
        }
        if (!this.state.allProd) {
            return <div>Failed</div>
        } else {
            return (

                <div style={{ position: 'absolute',top: '80px',  flexGrow: '1' }}>
                    <Grid container spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="flex-start">

                        {this.state.userProd.map((product, index) => (

                            <Grid item xs={6}> <Item plusMinus = "true" product={this.state.allProd.find(x => (x.id === product.prodId))} /> </Grid>
                        ))}

                    </Grid>
                </div>
            );

        }
    }
    }


export default Cart
