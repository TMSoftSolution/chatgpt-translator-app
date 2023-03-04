import { StyleSheet } from 'react-native';
import { WIDTH } from '../Conversation/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  input: {
    borderWidth: 2,
    borderColor: '#91D8E4',
    width: WIDTH - 40,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#EAFDFC',
    paddingHorizontal: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    shadowColor: '#82AAE3',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  translatedText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#000',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  picture: {
    marginTop: 30,
    width: 256,
    height: 256,
    backgroundColor: '#FF33CC'
    
  }
});