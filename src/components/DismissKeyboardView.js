import React from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native'

export default function DismissKeyboardView(props) {
  return (
    <KeyboardAvoidingView {...props}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={props.contentContainerStyle}>{props.children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
