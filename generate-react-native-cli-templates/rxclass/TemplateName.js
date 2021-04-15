import React from 'react';
import PropsTypes from 'prop-types';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import style from './TemplateName.style';

class TemplateName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={style.TemplateName} testID="TemplateName">
        <Text>TemplateName</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

TemplateName.propsType = {};
TemplateName.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName);
