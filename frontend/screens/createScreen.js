import React from 'react';
import {View, Button, Dimensions, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function CreateScreen({route, navigation}) {
    const { playerId } = route.params;

    const goToJoinScreen = () => {
        navigation.navigate('Join');
    }

    const getRoomCode = async() => {
        console.log('try', playerId);
        try {
            const response = await fetch(`http://127.0.0.1:5000/create_room/${playerId}`);
            const data = await response.json();
            const roomId = data.roomId;
            console.log('Room ID', roomId);

            //navigate to home page immediately as owner
            Navigation.navigate('Home');
        } catch (error) {
            console.error('Room code not able to get');
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
                <Button title="Create New Room" onPress={getRoomCode} /> 
                <Button title="Join Room" onPress={goToJoinScreen} />
            </SafeAreaView>
        </View>
    )
}