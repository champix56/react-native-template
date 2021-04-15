import React from 'react';
import PropsTypes from 'prop-types';
import {View, Text} from 'react-native';
import style from './TemplateName.style';
function TemplateName(props) {
  return (
    <View style={style.TemplateName} testID="TemplateName">
      <Text>TemplateName</Text>
    </View>
  );
}

TemplateName.propsType = {};
TemplateName.defaultProps = {};
export default TemplateName;
