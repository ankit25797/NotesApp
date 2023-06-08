import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import CommonStyles from '../styles/CommonStyles';

const ViewScreen = () => {
  const route = useRoute();
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (route.params) {
      setNote(route.params);
    }
  }, [route.params]);

  return (
    <View style={CommonStyles.p15}>
      {note && (
        <>
          <Text style={CommonStyles.titleText}>{note.title}</Text>
          <Text style={CommonStyles.subTitleText}>{note.content}</Text>
        </>
      )}
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({});
