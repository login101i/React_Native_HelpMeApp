import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
	
`;

