import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundray.styles';


class ErorrBoundry extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  //first lifeCycle method
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  //second 
  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
          <ErrorImageText> Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErorrBoundry;