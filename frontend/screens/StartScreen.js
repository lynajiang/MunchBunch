import React from 'react';
import {View, Button, Dimensions, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function StartScreen({navigation}) {
    const registerNewPlayer = async() => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/register_new_device`);
            const playerId = await response.text();
            console.log('Player ID', playerId);
            
            //if registration is successful, navigate to Create
            navigation.navigate('Create', {
                playerId: playerId,
            });
        } catch (error) {
            console.error('Cannot fetch playerId');
        }
    }
    return (
        <View>
            <StatusBar />
            <Image 
                source={require('../assets/images/plantain.png')} 
                style={{height: height}} 
                className="w-full absolute -top-5 opacity-30" />
            <SafeAreaView className={['flex-1', ios? '-mb-8': '']}>
                <Button title="Start" onPress={registerNewPlayer} /> 
            </SafeAreaView>
        </View>
    )
}