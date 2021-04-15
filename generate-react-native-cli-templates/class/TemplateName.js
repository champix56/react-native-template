import React from 'react';
import PropsTypes from 'prop-types';
import {View, Text} from 'react-native';
import style from './TemplateName.style';
class TemplateName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <View style={style.TemplateName} testID="TemplateName">
        <Text> TemplateName </Text>
      </View>
    );
  }
}
TemplateName.propsType = {};
TemplateName.defaultProps = {};
export default TemplateName;
