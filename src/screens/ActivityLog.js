import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import ActivityList from '../components/Shared/ActivityList';
const ActivityLog = () => {
    return (
    <View style = {styles.container}>

      <View style={styles.activityListContainer}>
        <ActivityList />
      </View>

  </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#689ACA'
    },

    activityListContainer: {
      backgroundColor: '#689ACA'
    },

  });

export default ActivityLog;
