import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CommonStyles from '../styles/CommonStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import {useNotes} from '../services/Context';

const AddScreen = () => {
  const [value, setValue] = useState({
    title: '',
    content: '',
  });
  const {addNote} = useNotes();
  return (
    <View style={CommonStyles.p15}>
      <Text style={[CommonStyles.titleText, CommonStyles.textAlignCenter]}>
        Add Note
      </Text>
      <View style={{marginTop: 50}}>
        <CustomTextInput
          label={'Title'}
          onChangeText={e => {
            setValue({...value, title: e});
          }}
        />
        <CustomTextInput
          label={'Content'}
          onChangeText={e => {
            setValue({...value, content: e});
          }}
        />

        <CustomButton
          title={'Add'}
          onPress={() => {
            if (!value.title || !value.content) {
              alert('Please enter values...');
              return;
            }
            addNote(value);
          }}
        />
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({});
