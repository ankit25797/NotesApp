import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Note from './Note';

const NoteList = ({notes, onEditNote, onDeleteNote}) => {
  return (
    <View>
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          onEditNote={onEditNote}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({});
