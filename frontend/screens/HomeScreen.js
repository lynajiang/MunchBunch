import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { StarIcon } from 'react-native-heroicons/solid'
import { cards, categories, cusines, priceRange, restaurantItems } from '../constants/index';
import Swiper from 'react-native-deck-swiper';
import { useNavigation } from '@react-navigation/core';


const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  const navigation = useNavigation();
  // const { logout } = useAuth();

  // const swipeLeft = async (cardIndex) => {
  //   if ()
  // };

  // const swipeRight = async (cardIndex) => {

  // }

  return (
    <View className="flex-1 relative bg=white">
      <StatusBar />
      <Image 
        source={require('../assets/images/plantain.png')} 
        style={{height: height}} 
        className="w-full absolute -top-5 opacity-30" />

      <SafeAreaView className={['flex-1', ios? '-mb-8': '']}>
        {/*Header*/}
        <View>
          <TouchableOpacity className="items-center">
            <Text className="text-2xl font-semibold">tender</Text>
          </TouchableOpacity>
        </View>

        {/*Cards*/}
        <View>
          <Swiper 
            cards={cards}
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            onSwipedLeft={(cardIndex) => {
              console.log("Swipe DISLIKE");
              swipeLeft(cardIndex);
            }}
            onSwipedRight={(cardIndex) => {
              console.log("Swipe LIKE");
              swipeRight(cardIndex);
            }}

            onSwipedTop={(cardIndex)=> {
              console.log("Swipe SUPER LIKE");
              swipeTop(cardIndex);
            }}

            onSwipedBottom={(cardIndex)=> {
              console.log("Swipe SUPER DISLIKE");
              swipeBottom(cardIndex);
            }}
            containerStyle={{backgroundColor: "transparent"}}
            renderCard={(card) => (
              <View key={card.id} className="relative bg-amber-100 h-3/4 rounded-xl">
                <Image
                  className="absolute top-0 h-5/6 w-full rounded-xl px-px py-px"
                  source={{ url: card.photoURL }}
                />
                <View className="absolute bottom-0 w-full flex-row justify-center 
                  items-between h-30 pb-3 px-1 rounded-b-xl">
                  <View>
                    <Text className="text-xl font-bold">{card.name}</Text>
                    <View className="flex-row">
                      <StarIcon size="15" color="black" />
                      <Text>{card.rating}</Text>
                    </View>
                    <View className="flex-row">
                      <Text>{`${card.cuisine1} `}</Text>
                      <Text>{'\u2022'}</Text>
                      <Text>{` ${card.price}`}</Text>
                    </View>
                  </View>
                  {/* <View className="pt-2">
                    <Text className="font-bold">{card.address}</Text>
                  </View> */}
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
    
  )
}