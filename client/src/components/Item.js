import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import PlusMinus from './PlusMinus'
import Button from '@material-ui/core/Button';
export class Item extends Component {
    state = {
        plusMinus: this.props.plusMinus,
        id: this.props.product.id,
        title: this.props.product.title,
        firstTitle: this.props.product.title.substr(0, this.props.product.title.indexOf(' ')),
        imageName: this.props.product.imageName,
        price: this.props.product.price,
        acquired: this.props.product.acquired,
        popularityIndex: this.props.product.popularityIndex
    }
    render() {
        if (this.props.plusMinus === "true") {
            return (

                <Container disableGutters={true}>
                    <Card style={{ width: "95%", hight: "100%" }}>
                        <Typography fontFamily="roboto" variant="h5" style={{ margin: "10%", marginBottom: "0" }}> {this.state.firstTitle} </Typography>
                        <CardHeader subheader={this.state.price + " $"} />
                        <CardMedia> <img alt="thisImage" src={require('../static/images/' + this.state.imageName)} style={{ width: "90%", padding: "1px" }} /> </CardMedia>
                        <PlusMinus decAmount={this.props.decAmount} incAmount={this.props.incAmount} id={this.state.id} amount={this.props.cartItem.amount} />
                    </Card>
                </Container>
            )
        }
        else {
            return (
                <Container disableGutters={true}>
                    <Card style={{ width: "95%", hight: "100%" }}>
                        <Typography fontFamily="roboto" variant="h5" style={{ margin: "10%", marginBottom: "0" }}> {this.state.firstTitle} </Typography>
                        <CardHeader subheader={this.state.price + " $"} />
                        <CardMedia> <img alt="thisImage" src={require('../static/images/' + this.state.imageName)} style={{ width: "90%", padding: "1px" }} /> </CardMedia>
                        <Button onClick={this.props.addToCartItem.bind(this, this.props.product.id)}
                            variant="outlined"
                            style={{ marginLeft: "10%", borderColor: "#1BD893", color: "#1BD893" }}
                            aria-label="add">add to cart</Button>
                    </Card>
                </Container>
            )
        }
    }
}

export default Item;
