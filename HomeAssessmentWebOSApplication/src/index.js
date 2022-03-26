import {AppRegistry} from 'react-native';
import App from './App';
import app from './app.json';
//name or app up
AppRegistry.registerComponent(app, () => App);
AppRegistry.runApplication(app, {
    rootTag: document.getElementById("root"),
});
