import{createStackNavigator, createAppContainer} from 'react-navigation';
import DetailView from './components/detailView';
import ListView from './components/listView';
import HomeScreen from './components/homeScreen';

const AppStackNavigator = createStackNavigator({
  HomeScreen:HomeScreen,
  List: ListView,
  DetailView: DetailView,
}, {
  // This is the default for screens in the stack, so `A` will
  // use this title unless it overrides it
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#8A2BE2',
      },
      title: ''
    },
})

const App = createAppContainer(AppStackNavigator);

export default App;
