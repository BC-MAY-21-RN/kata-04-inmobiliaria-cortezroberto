/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    // CARD
    card: {
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        backgroundColor: '#f5fdff',
        padding: 20,
        borderRadius: 15,
    },
    // PROPERTY IMAGE AND SCORE
    imageCard: {
        width: 130,
        height: 130,
        borderRadius: 15,
    },
    score: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#fbedb7',
        marginTop: 92,
        marginHorizontal: 36,
        width: 60,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        color: '#7b632a',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconScore: {
        color: '#eeba00',
        fontSize: 18,
    },
    // PROPERTY INFO
    infoCard: {
        paddingHorizontal: 10,
    },
    nameProperty: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    addressName: {
        fontSize: 18,
        color: '#888989',
    },
    specs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    specsText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    costText: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
    },
    icon: {
        color: '#888989',
        fontSize: 20,
    },
    // COST AND LIKE BUTTON
    costNLike: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    },
    circledIcon: {
        width: 35,
        height: 35,
        backgroundColor: '#00b074',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
    },
    iconLike: {
        fontSize: 24,
    },
});

export default style;
