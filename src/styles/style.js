import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1d0b52',
    },
    navigationPane: {
        width: 200,
        backgroundColor: '#0078d4',
        padding: 10,
        paddingTop: 20,
    },
    contentArea: {
        flex: 1,
        padding: 10,
    },
    toolbar: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     backgroundColor: '#0078d4',
     padding: 10,
    },
listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
},
listItemText: {
    fontSize: 16,
    marginLeft: 10,
},
});    
     
     
     
