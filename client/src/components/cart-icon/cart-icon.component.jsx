import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { cartItemsCountSelector } from '../../redux/cart/cart.selector';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = dispatch =>({
  toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
  itemCount : cartItemsCountSelector
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon)