import React from 'react';
import { AsyncStorage, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import PersonalInfo from './PersonalInfo'
import SkillsCategory from './SkillsCategory'
import Touchable from '../../components/Touchable'
import UserDesc from './UserDesc'
import ZipCode from './ZipCode'

import { height, width } from '../../../variables/style-sheet'
import { liftUser } from '../../redux/modules/user';
import { apiUrl, tokenName } from '../../../variables/global-variables';
import useAxios from '../../../utils/axios-helpers';

const path = `${apiUrl}/user/create`;
const { postWithAxios } = useAxios(path);

class SignupScreen extends React.Component {
  static navigationOptions = {
      header: null,
    };

  constructor(props) {
    super(props)
    // this.scrollView = React.createRef();
    this.scrollChildren = ['personalInfo', 'learnSkills', 'teachSkills', 'userDesc', 'zipCode'];
    this.state = {
      pageNum: 0,
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        description: '',
      },
      postalCode: null,
      scrollViewContentOffsetY: 0,
      scrollViewHeight: 0,
    }
  }

  backToLogin = () => this.props.navigation.navigate('Login')

  changePage = direction => {
    this.setState(prevState => {
      const { pageNum, scrollViewHeight } = prevState;
      const directions = {
        prev: pageNum > 0 ? pageNum - 1 : pageNum,
        next: pageNum < this.scrollChildren.length - 1 ? pageNum + 1 : pageNum,
      }
      const newPageNum = directions[direction];
      this.scrollView.scrollTo({ y: scrollViewHeight * newPageNum });
      return { pageNum: newPageNum }
    });
  }

  handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  handleSubmit = () => {
    // const { personalInfo } = this.state;
    // const { firstName, lastName, email, password } = personalInfo;
    // postWithAxios({ firstName, lastName, email, password }).then(result => {
    //   console.log('handleSub cb')
    //   result.data.user
    //     ? this.handleSuccess({ user: result.data.user, token: result.data.token })
    //     : this.handleErr(result.data._message);
    // }).catch(err => console.log('err: ', err));
    this.props.navigation.navigate('Congrats')
  }

  handleSuccess = async ({ user, token }) => {
    await this.setToken(token);
    this.props.liftUser({ user, token });
    this.props.navigation.navigate('Main');
  }

  setToken = async token => {
    try {
      await AsyncStorage.setItem(tokenName, token);
    } catch (err) {
      console.log('err: ', err);
    }
  }

  updatePersonalInfo = data => this.updateState('personalInfo', data);
  updateState = (key, data) => this.setState({ [key]: data });

  render() {
    const { personalInfo, scrollViewHeight } = this.state;
    const categoriesToLearn = [
      { bgColor: 'lightblue', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Art' },
      { bgColor: 'lightgreen', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Cooking' },
      { bgColor: 'lightblue', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Outdoors' },
      { bgColor: 'lightgreen', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Tech' },
    ];
    const categoriesToTeach = [
      { bgColor: 'lightgrey', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Art' },
      { bgColor: 'pink', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Cooking' },
      { bgColor: 'lightgrey', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Outdoors' },
      { bgColor: 'pink', subCategories: ['Photography', 'Painting', 'Sculpting', 'Drama', 'Makeup', 'Dance'], title: 'Tech' },
    ];
    // const nextOrSubmitButton = this.state.scrollViewContentOffsetY < scrollViewHeight * (this.scrollChildren.length -1)
    //           ? <CircleButton
    //               chevronColor='white'
    //               chevronDirection='down'
    //               chevronSize={50}
    //               circleColor='blue'
    //               circleSize={60}
    //               handlePress={() => this.changePage('next')}
    //             />
    //           : <Touchable iosType='opacity' onPress={this.handleSubmit} viewStyle={styles.navButtons}>
    //               <Text style={styles.buttonText}>Submit</Text>
    //             </Touchable>;
    const nextButtonText = this.state.scrollViewContentOffsetY < scrollViewHeight * (this.scrollChildren.length -1)
                          ? 'Next'
                          : 'Submit';
    const nextButtonOnPress = this.state.scrollViewContentOffsetY < scrollViewHeight * (this.scrollChildren.length -1)
                            ? () => this.changePage('next')
                            : this.handleSubmit;
    return (
      <View style={styles.page}>

        <ScrollView
          pagingEnabled
          onLayout={e => this.setState({ scrollViewHeight: e.nativeEvent.layout.height })}
          onMomentumScrollEnd={() => console.log('scroll end')}
          onScroll={e => this.setState({ scrollViewContentOffsetY: e.nativeEvent.contentOffset.y })}
          ref={ref => this.scrollView = ref}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          style={[ styles.scroll ]}
        >
          <PersonalInfo backToLogin={this.backToLogin} pagingHeight={scrollViewHeight} personalInfo={personalInfo} updatePersonalInfo={this.updatePersonalInfo} />
          <SkillsCategory
            bgColor='teal'
            headingText='Tell us what you would like to learn. Select from the popular skills offered in your location:'
            pagingHeight={scrollViewHeight}
            skillsSections={categoriesToLearn}
          />
          <SkillsCategory
            bgColor='blueviolet'
            headingText='Tell us what you would like to teach. Select up to 3 skills:'
            pagingHeight={scrollViewHeight}
            skillsSections={categoriesToTeach}
          />
          <UserDesc pagingHeight={scrollViewHeight} personalInfo={personalInfo} updatePersonalInfo={this.updatePersonalInfo} />
          <ZipCode
            pagingHeight={scrollViewHeight}
            postalCode={this.state.postalCode}
            updateZipCode={() => this.updateState('postalCode')}
          />
        </ScrollView>

        <View style={styles.circleButtonWrapper}>
          {/* <CircleButton
            chevronColor='white'
            chevronDirection='up'
            chevronSize={50}
            circleColor='blue'
            circleSize={60}
            handlePress={() => this.changePage('prev')}
          /> */}
          <Touchable iosType='opacity' onPress={() => this.changePage('prev')} style={styles.navButtons} >
            <Text style={styles.buttonText}>Back</Text>
          </Touchable>

          <Touchable iosType='opacity' onPress={nextButtonOnPress} style={styles.navButtons} >
            <Text style={styles.buttonText}>{nextButtonText}</Text>
          </Touchable>

          {/* {nextOrSubmitButton} */}
        </View>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    paddingBottom: '$pagePadding',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$orange',
  },
  scroll: {
    width: '100%',
    marginTop: '$pagePadding',
  },
  text: {
    // fontSize: '22rem'
  },
  circleButtonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navButtons: {
    padding: '10rem',
    marginTop: '$pagePadding',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '$purple',
    borderRadius: '20rem',
  },
  buttonText: {
    color: '$white',
    fontSize: '20rem',
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
