import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import COLORS from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {useNotes} from '../services/Context';
import CustomButton from './CustomButton';

const Note = ({note, onEditNote = () => {}, onDeleteNote = () => {}}) => {
  const {title, content} = note;
  const charaterToSlice = 15;
  const navigation = useNavigation();
  const {deleteNote} = useNotes();
  return (
    <View style={styles.note}>
      <Pressable onPress={() => navigation.navigate('View', note)}>
        <Text style={styles.noteTitle}>{title}</Text>
        <Text style={styles.noteContent}>
          {content && content.length > charaterToSlice
            ? `${content.slice(0, charaterToSlice)}...`
            : content}
        </Text>
      </Pressable>
      <View style={styles.btnContainer}>
        <CustomButton
          title={'Edit'}
          onPress={() => navigation.navigate('Edit', note)}
        />
        <CustomButton
          title={'Delete'}
          onPress={() => deleteNote(note.id)}
        />
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  note: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS._primary_blue_OP7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS._font_light,
  },
  noteContent: {
    fontSize: 16,
    color: COLORS._font_light,
    opacity: 0.8,
  },
});
