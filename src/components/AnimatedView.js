import React, { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native';


export const AnimatedView = ({ duration = 1511, ...props }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration:duration
            }
        ).start();
    }, [fadeAnim, duration])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

