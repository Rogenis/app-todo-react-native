import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginLeft: 20,
 },
 isChecked: {
  textDecorationLine: 'line-through',
  flex: 1,
  fontSize: 16,
  color: '#F2F2F2',
  marginLeft: 20,
 }
});
  