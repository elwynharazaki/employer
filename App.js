import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './src/reducers';
import config from './secret/firebaseconfig';
import LoginForm from './src/components/LoginForm';

class App extends Component {
   componentWillMount() {
      firebase.initializeApp(config);
   }

   render() {
      return (
         <Provider store={createStore(reducers)}>
            <View>
               <LoginForm />
            </View>
         </Provider>
      )
   }
}

export default App;