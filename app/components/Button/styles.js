import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 11,
    width: 19,
  },
  text: {
    color: '$white',
    fontWeight: '300',
    fontSize: 14,
    paddingVertical: 20,
  }
})