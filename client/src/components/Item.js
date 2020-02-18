import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import PlusMinus from './PlusMinus'
import image from '../static/images/1.jpg';
import Button from '@material-ui/core/Button';

export class Item extends Component {
    state = {
        plusMinus: this.props.plusMinus,
        id: this.props.id,
        title: this.props.title,
        firstTitle: this.props.product.title.substr(0, this.props.product.title.indexOf(' ')),
        imageName: this.props.imageName,
        price: this.props.price,
        acquired: this.props.acquired,
        popularityIndex: this.props.popularityIndex
    }

    render() {
        if (this.props.plusMinus === "true") {
            return (
                <Container disableGutters="true">
                    <Card style={{ width: "95%", hight: "100%" }}>
                        <Typography fontFamily="roboto" variant="h5" style={{ margin: "10%" }}> {this.state.firstTitle} </Typography>
                        <CardHeader subheader={this.state.price} />
                        <CardMedia> <img alt="thisImage" src={image} style={{ width: "90%", padding: "1px" }} /> </CardMedia>
                        <PlusMinus/>
                    </Card>
                </Container>
            )
        }
        else {
            return (
                <Container disableGutters="true">
                    <Card style={{ width: "95%", hight: "100%" }}>
                        <Typography fontFamily="roboto" variant="h5" style={{ margin: "10%" }}> {this.state.firstTitle} </Typography>
                        <CardHeader subheader={this.state.price} />
                        <CardMedia> <img alt="thisImage" src={image} style={{ width: "90%", padding: "1px" }} /> </CardMedia>
                        <Button variant= "outlined" style = {{marginLeft: "10%", borderColor: "#d81b60", color: "#d81b60"}} aria-label="add">add to cart</Button>
                    </Card>
                </Container>
            )
        }
    }
}

export default Item;
