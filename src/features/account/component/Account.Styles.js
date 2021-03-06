import styled from "styled-components/native";
import { Button, TextInput } from 'react-native-paper'

import { colors } from '../../../infrasctructure/theme/theme'
console.log(colors)

export const AccountBackground = styled.ImageBackground.attrs({
  source: "https://cdn.pixabay.com/photo/2017/09/22/17/35/cairn-2776470_960_720.jpg"
})`
flex: 1;
align-items: center;
justify-content: center;
`;

export const AccountTranspBackground = styled.View`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.3);
`

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[3]};
  margin-top:340px;
  border-radius:4px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.green
})`
padding:${(props) => props.theme.space[1]}
`

export const AuthInput = styled(TextInput)`
width:320px;
`

export const AnimationContainer = styled.View`
width:100%;
height:40%;
position:absolute;
top:50px;
padding:${(props) => props.theme.space[2]}
`