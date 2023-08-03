import SpaceCraft from "./screens/SpaceCrafts";
import DailyPic from "./screens/DailyPic";
import StarMap from "./screens/StarMap";

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions ={{
                headerShown: false
            }}>
                <Stack.Screen name = "Home" component = {HomeScreen} />
                <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftScreen} />
                <Stack.Screen name = "DailyPic" component = {DailyPicScreen} />
                <Stack.Screen name = "StarMap" component = {StarMapScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}