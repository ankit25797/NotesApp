import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonStyles from '../styles/CommonStyles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import {useNotes} from '../services/Context';
import {useNavigation, useRoute} from '@react-navigation/native';

const EditScreen = () => {
  const route = useRoute();

  const [value, setValue] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (route.params) {
      setValue(route.params);
    }
  }, [route.params]);

  const {updateNote} = useNotes();
  return (
    <View style={CommonStyles.p15}>
      <Text style={[CommonStyles.titleText, CommonStyles.textAlignCenter]}>
        Edit Note
      </Text>
      <View style={{marginTop: 50}}>
        <CustomTextInput
          label={'Title'}
          value={value.title}
          onChangeText={e => {
            setValue({...value, title: e});
          }}
        />
        <CustomTextInput
          label={'Content'}
          value={value.content}
          onChangeText={e => {
            setValue({...value, content: e});
          }}
        />

        <CustomButton
          title={'Update'}
          onPress={() => {
            if (!value.title || !value.content) {
              alert('Please enter values...');
              return;
            }
            updateNote(value);
          }}
        />
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
