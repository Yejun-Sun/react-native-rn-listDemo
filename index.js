/**
 * @format
 */

import {AppRegistry} from 'react-native';
/*import App from './App';*/
import weatherForecast from './weatherForecast'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => weatherForecast);
