import { View, Text, SafeAreaView, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import Categories from '../components/Home/Categories'
import FeaturedRow from '../components/Home/FeaturedRow'
import { featured } from '../constants'

const HomeScreen = () => {
  return (
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.androidSafeArea}>

            {/* searchBar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />

                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray"/>
                        <Text className="text-gray-600" >Karen, Nairobi</Text>
                    </View>

                </View>
                <View className="p-3 rounded-full " style={{backgroundColor: themeColors.bgColor(1)}}>
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                </View>
            </View>

            {/* main */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
                {/* categories */}
                <Categories />
                {/* featured */}
                <View className="mt-3">
                    {
                        [featured, featured, featured].map((item, index) =>{
                            return(
                                <FeaturedRow 
                                    key = {index}
                                    title = {item.title}
                                    restaurants = {item.restaurants}
                                    description = {item.description}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>


        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    androidSafeArea: {
      backgroundColor: '#fff',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 

    },
  });
  


export default HomeScreen