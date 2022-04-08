import { client } from './agility/client';
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Recipe from './screens/Recipe';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}