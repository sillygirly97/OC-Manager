import { createStackNavigator } from "@react-navigation/stack";
import oclist from "../components/oclist";
import ocdetails from "../components/ocdetails";
import React from "react";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="OC List" component={oclist} />
        <Stack.Screen name="OC Details" component={ocdetails} />
        </Stack.Navigator>
    );
    }

    export default AppNavigator;