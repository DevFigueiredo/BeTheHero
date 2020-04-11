import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,   
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    Incident: {
        marginTop: 20,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    incidentPropety: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    
    contentBox: {    
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    contentBoxText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 30
    },
    contentDescription:{
    fontSize: 15,
    color: '#737380',
    marginTop: 14
    },
    actions:{
        flexDirection: 'row',
        marginTop: 10,
    justifyContent: 'space-between'

    },
    action: {
      backgroundColor: '#E02041',
      padding: 24,
      borderRadius: 10,
      marginRight: 10,
      height: 50,
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    }

 
});