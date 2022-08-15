import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0D0D0D',
    padding: 24,
  },
  body: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
  },
  imageContainer: {
    marginTop: 24,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 132,
    height: 34,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 32,
    marginTop: -50,
  },
  listEmptyTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
  listEmptySubtitle: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  }
})