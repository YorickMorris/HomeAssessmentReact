import {AppRegistry} from 'react-native';
import App from './App';
//import appDetail from './app.json';
let appDetail=require('./app.json');

//name or app up
AppRegistry.registerComponent(appDetail.name, () => App);
AppRegistry.runApplication(appDetail.name, {
    rootTag: document.getElementById("root"),
});
