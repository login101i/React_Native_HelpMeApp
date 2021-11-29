import React from 'react'
import LottieView from 'lottie-react-native'
import { Text } from 'react-native'

import { AccountBackground, AccountTranspBackground, AnimationContainer } from '../component/Account.Styles'
import { AuthButton, AccountContainer } from '../component/Account.Styles'
import { Spacer } from '../../../components/Spacer'


export const AccountScreen = ({ navigation }) => {


    return (
        <AccountBackground >
            <AccountContainer>
                {/* <AnimationContainer>
                <LottieView
                    source={require('../../../assets/animation/lottieAnimation.json')}
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover" />;
     
            </AnimationContainer> */}
                {/* cq it doesn't work  */}

                <AccountTranspBackground />

                <AuthButton
                    icon="lock-open"
                    onPress={() => navigation.navigate("Login")}
                    mode="contained"
                >Login </AuthButton>
                <Spacer
                    position="top" size="medium"
                />
                <AuthButton
                    icon="fountain-pen-tip"
                    onPress={() => navigation.navigate("Register")}
                    mode="contained"
                >Register </AuthButton>
            </AccountContainer>
        </AccountBackground >
    )
}


