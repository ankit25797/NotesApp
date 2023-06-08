import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonStyles from '../styles/CommonStyles';
import NoteList from '../components/NoteList';
import COLORS from '../theme/colors';
import {FONT_SIZE} from '../theme/fonts';
import {useDisableBackButton} from '../utils/DisableBackButton';
import {useNotes} from '../services/Context';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  useDisableBackButton();
  const navigation = useNavigation();
  const {notes} = useNotes();

  return (
    <View style={[CommonStyles.p15]}>
      <Text
        style={[
          CommonStyles.titleText,
          CommonStyles.textAlignCenter,
          styles.title,
        ]}>
        Notes List
      </Text>
      {notes && <NoteList notes={notes} />}
      <View style={styles.note}>
        <Text style={[styles.addText, CommonStyles.textAlignCenter]}>
          Created new note...{' '}
        </Text>
        <CustomButton
          title={'Add Note'}
          onPress={() => navigation.navigate('Add')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  note: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS._primary_blue_OP7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addText: {
    fontSize: FONT_SIZE.font14,
    color: COLORS._font_light,
  },
  title: {
    marginBottom: 15,
  },
});
