import styled from "styled-components/native";
import {Avatar, TextInput, Button, ActivityIndicator} from 'react-native-paper'

import {colors } from '../../../infrasctructure/theme'

export const CartIconContainer=styled.View`
padding:${props=>props.theme.space[2]}
align-items:center;
justify-content:center;
flex:1
`

export const CartIcon=styled(Avatar.Icon).attrs({
    size:124,
})`
padding:${props=>props.theme.space[2]};
background-color:${props=>props.bg || props.theme.colors.brand.primary}
`

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
    color: colors.brand.primary,
  })`
    width: 80%;
    align-self: center;
    padding: ${(props) => props.theme.space[2]};
  `;

  export const ClearButton = styled(Button).attrs({
    color: colors.ui.error,
  })`
`
  
export const PaymentProcessing = styled(ActivityIndicator).attrs({
    size: 128,
    animating: true,
    color: colors.blue,
  })`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;