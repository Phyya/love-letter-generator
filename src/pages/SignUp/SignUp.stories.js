import React from'react'
import { MemoryRouter } from 'react-router-dom'
import {SignUp as SignUpComponent} from "./SignUp"
export default {      
  title: 'pages/SignUp', 
  component: SignUpComponent,    
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],  
}; 
export const SignUp = () => <SignUpComponent />