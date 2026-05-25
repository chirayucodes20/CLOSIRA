import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import DashboardScreen from './screens/DashboardScreen';
import LeadsScreen from './screens/LeadsScreen';
import EscalationsScreen from './screens/EscalationsScreen';
import FollowUpsScreen from './screens/FollowUpsScreen';
import ConversationDetailScreen from './screens/ConversationDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Leads') iconName = 'people-outline';
          else if (route.name === 'Escalations') iconName = 'alert-circle-outline';
          else if (route.name === 'Follow-ups') iconName = 'calendar-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Leads" component={LeadsScreen} />
      <Tab.Screen name="Escalations" component={EscalationsScreen} />
      <Tab.Screen name="Follow-ups" component={FollowUpsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main App with Bottom Tabs */}
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        {/* Conversation Detail Screen (Opens on top of tabs) */}
        <Stack.Screen 
          name="ConversationDetail" 
          component={ConversationDetailScreen} 
          options={{ title: 'Conversation Details', headerBackTitle: 'Back' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}