import { StyleSheet } from 'react-native';
import colors from '../../layout/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 60,
  },
  shadowContainer: {
    shadowColor: colors.shadow,
    shadowRadius: 5,
    shadowOpacity: 100,
    shadowOffset: {
      widget: 0,
      height: 2,
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.gray,
  },
});

export default styles;
