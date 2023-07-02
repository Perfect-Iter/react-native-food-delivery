import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { useNavigation, useRoute } from '@react-navigation/native'
import { themeColors } from '../theme'
import DishRow from '../components/Restaurants/DishRow'
import CartIcon from '../components/Restaurants/CartIcon'


const RestaurantScreen = () => {

  const {params} = useRoute();
  const navigation = useNavigation()

  let item = params

  return (
    <View>
    <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity className="absolute top-12 left-4 rounded-full shadow bg-gray-50" onPress={()=>navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth={4} stroke={themeColors.bgColor(1)} width={35} height={35} />
          </TouchableOpacity>
        </View>

        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">({item.reviews}) . <Text className="font-semibold">{item.category}</Text></Text>
            </View>
            <View className="flex-row items-center space-x-1 py-2">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
            </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>

        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, index) =>{
              return(
                <DishRow item={{...dish}} key={index}/>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantScreen