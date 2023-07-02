import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback 
    onPress = {()=>{
      navigation.navigate('Restaurant', {...item})
    }}
    
    >
        <View className="mr-6 bg-gray-200 rounded-3xl shadow-lg space-x-2" style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}}>
          <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
          <View className="text-lg">
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require('../../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">({item.reviews}) . <Text className="font-semibold">{item.category}</Text></Text>
            </View>
            <View className="flex-row items-center space-x-1 py-2">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard