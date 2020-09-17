import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { currentUserSelector } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';


const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
      <div>
        <Header /> 
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
              currentUser ?
              ( <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage/>
              )

            } />
          </Switch>
      </div>
    );
  }
//mapStateToProps retrive the data from the store

const mapStateToProps = createStructuredSelector ({
  currentUser: currentUserSelector,

})

const mapDispatchToProps = dispatch => ({
  checkUserSession: ()=> dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);









    /* after redux connect we removed the props
        currentUser={this.state.currentUser} */

// if(userAuth) {
      //   const userRef = await createUserProfileDocument (userAuth)

      //   userRef.onSnapshot(snapShot => {
      //     this.setState({   
      //       currentUser: {
      //         id: snapShot.id,
      //         ...snapShot.data()
      //       }
      //     })
      //   });
      // }
      //this.setState ({currentUser: userAuth})//without it signout will not work till page refresh



      //db
  // componentDidMount (){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( async user=>{
  //     createUserProfileDocument(user)
  //     console.log(user)
  //   })
  // }


  //Auth
  // componentDidMount(){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged( user=>{
  //     this.setState({ currentUser: user });
      
  //     console.log(user)
  //   })
  // }