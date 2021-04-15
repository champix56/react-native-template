import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import {View, Text} from 'react-native';
import style from './TemplateName.style';
const initialState = {};
function TemplateName(props) {
  const [state, setState] = useState(initialState);
  return (
    <View style={style.TemplateName} testID="TemplateName">
      <Text>TemplateName{JSON.stringify(state)}</Text>
    </View>
  );
}

TemplateName.propsType = {};
TemplateName.defaultProps = {};
export default TemplateName;
