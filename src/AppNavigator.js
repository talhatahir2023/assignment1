
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import OTPScreen from './screens/OTPScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name={'OTPScreen'}
                  component={OTPScreen}
          options={{
          headerShown: false,
          }} 
                  
              />
              <Stack.Screen
                  name={'Home'}
                  component={HomeScreen}
                  options={{ headerShown: false }} 
                  
        />
       
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator