import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { icons, COLORS } from '../constants'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%"
    }
}
const CameraButton = () => {
    return (
        <View
            style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: COLORS.primary
            }}
        >
            <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23,
                }}
            />
        </View>
    )
}

const TabsBottom = () => {
    return (

            <Tab.Navigator
                tabBarOptions={tabOptions}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focus }) => {
                        const tintColor = focus ? COLORS.primary : COLORS.gray

                        switch (route.name) {
                            case "Home":
                                return (
                                    <Image
                                        source={icons.flash}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                )
                            case "Box":
                                return (
                                    <Image
                                        source={icons.cube}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                )
                            case "Camera":
                                return (
                                    <CameraButton />
                                )
                            case "Search":
                                return (
                                    <Image
                                        source={icons.search}
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                )
                            case "Favourite":
                                return (
                                    <Image
                                        source={icons.heart}
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                )

                        }
                    }
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="Box"
                    component={Home}
                />
                <Tab.Screen
                    name="Camera"
                    component={Home}
                />
                <Tab.Screen
                    name="Search"
                    component={Home}
                />
                <Tab.Screen
                    name="Favourite"
                    component={Home}
                />

            </Tab.Navigator>
    )
}
export default TabsBottom

const styles = StyleSheet.create({})
