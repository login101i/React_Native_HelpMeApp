import React from 'react'

import { AccountBackground, AccountTranspBackground } from '../component/Account.Styles'
import { AuthButton, AccountContainer } from '../component/Account.Styles'
import { Spacer } from '../../../components/Spacer'


export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground >
            <AccountTranspBackground />

            <AccountContainer>

                <AuthButton
                    icon="lock-open"
                    onPress={()=>navigation.navigate("Login")}
                    mode="contained"
                >Login </AuthButton>
                <Spacer
                    position="top" size="medium"
                />
                <AuthButton
                    icon="fountain-pen-tip"
                    onPress={()=>navigation.navigate("Register")}
                    mode="contained"
                >Register </AuthButton>
            </AccountContainer>

        </AccountBackground>
    )
}


