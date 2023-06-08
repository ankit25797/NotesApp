import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const AuthContext = createContext();

export const useNotes = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState('');
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (notes && notes.length > 0) {
      AsyncStorage.setItem('currentNotes', JSON.stringify(notes));
    }
    if (notes && notes.length === 0) {
      AsyncStorage.setItem('currentNotes', JSON.stringify([]));
    }
  }, [notes]);

  useEffect(() => {
    AsyncStorage.getItem('currentNotes').then(value => {
      if (value) {
        setNotes(JSON.parse(value));
      }
    });
  }, []);

  const changeNotes = note => {
    setNotes(note);
  };
  const deleteNote = id => {
    const newNotes = notes.filter(obj => {
      return obj.id !== id;
    });

    setNotes(newNotes);
  };

  const addNote = note => {
    setNotes([...notes, {...note, id: notes.length + 1}]);
    navigation.goBack();
  };
  const updateNote = note => {
    const newNotes = notes.map(obj => {
      if (obj.id === note.id) {
        return {...note};
      }
      return obj;
    });
    setNotes(newNotes);
    navigation.goBack();
  };

  return (
    <AuthContext.Provider
      value={{
        notes,
        changeNotes,
        deleteNote,
        addNote,
        updateNote,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
