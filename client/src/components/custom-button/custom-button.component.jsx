
import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;




// import React from 'react';
// import './custom-button.styles.scss';

// import { CustomButtonContainer } from './custom-button.styles.component'

// const CustomButton =({children,...props})=> (
//   <CustomButtonContainer {...props} >
//     {children}
//   </CustomButtonContainer>
// )

// export default CustomButton;