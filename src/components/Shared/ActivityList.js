import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {activityList} from '../../utils/dummyData/activityList';


const Item = ({ title, description, date }) => (
    <View style={styles.itemContainer}>
        <View style={styles.listActivityTextContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemDescription}>{description}</Text>
        </View>
        <View style={styles.listTimeTextContainer}>
            <Text style={styles.listTimeText}>{date}</Text>
        </View>
    </View>
);

const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} date={item.date} />
);

const listEmptyMessage = () => (
    <View style={styles.itemContainer}>
        <Text style={styles.emptyItemText}>No hay mas registros en la lista</Text>
    </View>
);

const ActivityList = () => {
    return (
        <SafeAreaView style={styles.listContainer}>
            <FlatList data={activityList} keyExtractor={item => item.id} renderItem={renderItem} ListEmptyComponent={listEmptyMessage} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    },
    itemContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: 15,
            marginVertical: 8,
            marginHorizontal: 10,
    },
    listActivityTextContainer: {
        flexDirection: 'column',
        flex: 2,
    },
    listTimeTextContainer: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection:'row',
        textAlign: 'right',
    },
    listTimeText:{
        fontSize: 12,
        color: 'rgba(0,0,0,0.6)',
    },
    itemTitle: {
        fontSize: 16,
    },
    itemDescription:{
        fontSize: 14,
    },
    emptyItemText: {
        textAlign: 'center',
    },
});

export default ActivityList;
