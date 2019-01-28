import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //
    }
  }

  componentDidMount = async () => {
    setTimeout(() => this.props.navigation.navigate('Auth'), 1000);
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>Loading screen...</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    liftUser: ({ user, token }) => dispatch( liftUser({ user, token }) ),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
