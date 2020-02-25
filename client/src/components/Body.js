import React, { Component } from 'react';
// import { render } from 'react-dom';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Container from '@material-ui/core/Container';
import QRCode from './QRCode';
import Store from './Store';
import Cart from './Cart';
import History from './History';
import { BottomNavigation } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fab from "@material-ui/core/Fab";

class Body extends Component {

  constructor() {
    super();
    this.handleMenuClick1 = this.handleMenuClick1.bind(this);
    this.handleMenuClick2 = this.handleMenuClick2.bind(this);
    this.handleMenuClick3 = this.handleMenuClick3.bind(this);
    this.handleMenuClick4 = this.handleMenuClick4.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
  state = {
    pageNumber: 1,
    userProd: [],
    allProd: [],
    cart: []
  };


  async componentDidMount() {
    const urlProd = "http://ec2-3-126-85-150.eu-central-1.compute.amazonaws.com:3001/prod/"
    const urlUser = "http://ec2-3-126-85-150.eu-central-1.compute.amazonaws.com:3001/users/userGetById/9";
    const userResponse = await fetch(urlUser);
    const userData = await userResponse.json();
    const prodResponse = await fetch(urlProd);
    const prodData = await prodResponse.json();
    const newCart = [];
    userData.userProducts.forEach(element => {
      let newItem = {id: element.prodId,
                  amount: 1}
      newCart.push(newItem);
    });

    this.setState({ userProd: userData.userProducts, allProd: prodData, cart: newCart });
  };
  

  handleMenuClick1() {
    this.setState({ pageNumber: 1 });
  }

  handleMenuClick2() {
    this.setState({ pageNumber: 2 });
  }

  handleMenuClick3() {
    this.setState({ pageNumber: 3 });
  }
  handleMenuClick4() {
    this.setState({ pageNumber: 4 });
  }
  incAmount = (id) => {
    console.log(id);
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cart.forEach((element) =>{
      if (element.id === id){
        element.amount++;
        this.setState(stateCopy);
      }
    });
  }
  decAmount = (id) => {
    console.log(id);
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cart.forEach((element) =>{
      if (element.id === id){
        if(element.amount > 0)
          element.amount--;
        this.setState(stateCopy);
      }
    });
  }
  handleCheckout=()=>{

    fetch('http://ec2-3-126-85-150.eu-central-1.compute.amazonaws.com:3001/carts/create', {
      method: 'POST',
      body: JSON.stringify({
        id: 300,
        cart: this.state.cart,
      })
    })


  }
  addToBody = (id) => { 
     const newItem = { id: id,
                      amount:1   
                    }
      var found = this.state.cart.find(element => element.id === id);
      if (!!found){
          alert("ITEM IS ALREADY IN CART")
      }        
     else {
       if (this.state.allProd.find(element => element.id === id))
        this.state.cart.unshift(newItem);
        else
        alert("Item does not exist")
      }
  }
  menuControl() {
    switch (this.state.pageNumber) {
      case 1:
        return (
          <Container style={{ paddingBottom: '60px', paddingTop: '60px' }}>
            <Cart  incAmount={this.incAmount} decAmount={this.decAmount} addToBody={this.addToBody} userProdData={this.state.userProd} allProdData={this.state.allProd} cart={this.state.cart} />
          </Container>);
      case 2:
        return (
          <Container style={{ paddingBottom: '60px', paddingTop: '60px' }}>
            <History addToBody={this.addToBody} userProdData={this.state.userProd} allProdData={this.state.allProd} cart={this.state.cart} />
          </Container>);
      case 3:
        return (
          <Container style={{ paddingBottom: '60px', paddingTop: '60px' }}>
            <Store allProdData={this.state.allProd} addToBody={this.addToBody}  cart={this.state.cart} />
          </Container>);
      case 4:
        return (
          <Container>
            <QRCode userProdData={this.state.userProd} addToBody={this.addToBody} allProdData={this.state.allProd} />
          </Container>);
      default:
    }
  }



  render() {
    if (this.state.pageNumber === 1)
       return ( 
       <div> <Fab style={{ position: "fixed", bottom: "8%", right: "5%" , backgroundColor: "#1BD893" }}
          variant="extended"
          size="large"
          color="primary"
          aria-label="add"
         onClick={this.handleCheckout}
        >
          
         To Checkout
        </Fab>
        
         
         {this.menuControl()}
          
         <BottomNavigation style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#d81b60" }}>
 
           <BottomNavigationAction label="CART" style={{ color: "#fff" }} icon={<LocalGroceryStoreIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick1.bind()} />
           <BottomNavigationAction label="HISTORY" style={{ color: "#fff" }} icon={<FavoriteIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick2.bind()} />
           <BottomNavigationAction label="STORE" style={{ color: "#fff" }} icon={<StorefrontIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick3.bind()} />
           <BottomNavigationAction label="QR" style={{ color: "#fff" }} icon={<CropFreeIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick4.bind()} />
 
         </BottomNavigation>
 
         
       </div>)
    else
 return (
      <div>
        {this.menuControl()}
         
        <BottomNavigation style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#d81b60" }}>

          <BottomNavigationAction label="CART" style={{ color: "#fff" }} icon={<LocalGroceryStoreIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick1.bind()} />
          <BottomNavigationAction label="HISTORY" style={{ color: "#fff" }} icon={<FavoriteIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick2.bind()} />
          <BottomNavigationAction label="STORE" style={{ color: "#fff" }} icon={<StorefrontIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick3.bind()} />
          <BottomNavigationAction label="QR" style={{ color: "#fff" }} icon={<CropFreeIcon style={{ color: "#fff" }} />} onClick={this.handleMenuClick4.bind()} />

        </BottomNavigation>

        
      </div>
    )
  }
}

export default Body;