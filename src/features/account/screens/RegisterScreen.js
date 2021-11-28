import React, { useState, useContext } from 'react'

import { AccountBackground, AccountContainer, AccountTranspBackground, AuthInput, AuthButton } from '../component/Account.Styles'

import { Spacer } from '../../../components/Spacer'
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext'
import { Text } from '../../../components/Text'


export const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const { registerUser, error, isLoading } = useContext(AuthenticationContext)

    return (
        <AccountBackground >
            <AccountTranspBackground />

            <AccountContainer>
                <AuthInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    mode="flat"
                />
                <Spacer
                    position="top" size="medium"
                />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                />
                <AuthInput
                    label="Repeat password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setRepeatedPassword(p)}
                />

                {error && <Text variant="error">{error}</Text>}

                <Spacer
                    position="top" size="medium"
                />
                {isLoading ? <ActivityIndicator animating={true} color={Colors.amber800} /> :
                    <AuthButton
                        icon="lock-open"
                        onPress={() => registerUser(email, password)}
                        mode="contained"
                    >Register </AuthButton>
                }
            </AccountContainer>

        </AccountBackground>
    )
}

