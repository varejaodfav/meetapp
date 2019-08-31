/**
 *  "MeetApp Mobile"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// Rotas de autenticação
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

// Rotas do usuário
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import Subscriptions from './Pages/Subscriptions';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        MobileApp: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              activeTintColor: '#FFF',
              style: {
                backgroundColor: '#2B1A2F',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'MobileApp' : 'Sign',
      },
    ),
  );
