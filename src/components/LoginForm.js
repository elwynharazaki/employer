import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';

class LoginForm extends Component {
   render() {
      return (
         <Card>
            <CardSection>
               <View>
                  <Text>Blabla</Text>
               </View>
            </CardSection>
         </Card>
      );
   }
}

export default LoginForm;
