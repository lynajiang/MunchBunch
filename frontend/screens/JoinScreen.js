import React, { useState } from 'react';
import {StyleSheet, View, Button, Text, TestInput, Dimensions, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function JoinScreen({navigation}) {
    const CELL_COUNT = 4;
    const [roomId, setRoomId] = useState('');

    const handleTextInputChange = (text) => {
        // Remove non-numeric characters from the input
        const numericValue = text.replace(/[^0-9]/g, '');
        setRoomId(numericValue);
    };
    
    const checkRoom = async () => {
        try {
          const response = await fetch(`https://your-api-endpoint/check_room/${roomId}`);
          if (response.ok) {
            // Room found, proceed with your logic here
            // For example, navigate to another screen
          } else {
            throw new Error('Room Not Found');
          }
        } catch (error) {
          console.error(error.message);
          Alert.alert('Error', 'Room Not Found');
        }
    };
    
    return (
        <SafeAreaView className={['flex-1', ios? '-mb-8': '']}>
            <Text>Verification</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
                keyboardType="numeric"
                maxLength={4}
                value={roomId}
                onChangeText={handleTextInputChange}
            />
            <Button title="Check Room" onPress={checkRoom} />
            
        </SafeAreaView>
    )
}

