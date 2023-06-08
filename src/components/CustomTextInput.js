import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import {FONT_SIZE} from '../theme/fonts';
import COLORS from '../theme/colors';

const CustomTextInput = ({label, onChangeText, value}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Enter text..."
        placeholderTextColor="#1C56B9"
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: COLORS._primary_blue,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: COLORS._primary_blue,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: FONT_SIZE.font12,
    color: COLORS._font_blue,
    marginBottom: 3,
  },
});
