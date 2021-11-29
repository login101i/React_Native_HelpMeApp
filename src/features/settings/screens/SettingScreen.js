import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { List, Avatar } from 'react-native-paper';
import { Text } from 'react-native'
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/SafeArea";
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext'
import AsyncStorage from "@react-native-async-storage/async-storage";


const SettingsItem = styled(List.Item)`
padding:${props => props.theme.space[2]}
`
const AvatarContainer = styled.View`
align-items:center;
padding:10px;
`


export const SettingsScreen = ({ navigation }) => {
    const [picture, setPicture] = useState(null)
    const { logoutUser, user } = useContext(AuthenticationContext)


    const getPictureFromStorage = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`)
        setPicture(photoUri)
    }

    useFocusEffect(() => {
        getPictureFromStorage(user)
    }, [user])


    return (

        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {!picture ? <Avatar.Icon size={100} icon="human"
                        backgroundColor="#2182BD" /> :
                        <Avatar.Image size={100} source={{ uri: picture }}
                            backgroundColor="#2182BD" />
                    }
                </TouchableOpacity>

                <Text variant="label">{user.email}</Text>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Your favourites"
                    description="Click here to see your favourites"
                    left={props => <List.Icon {...props} icon="heart" />}
                    onPress={() => navigation.navigate("FavouritesDetails")}
                />
                <SettingsItem
                    title="Logout"
                    left={props => <List.Icon {...props} icon="door" />}
                    onPress={logoutUser}
                />
            </List.Section>
        </SafeArea>

    );
}



