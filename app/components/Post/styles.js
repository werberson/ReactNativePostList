import { StyleSheet } from 'react-native';
import colors from '../../layout/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    marginBottom: 0,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  shadowContainer: {
    shadowColor: colors.shadow,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      widget: 0,
    },
    shadowOpacity: 100,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.semi,
    paddingBottom: 10,
  },
  title: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: colors.calm,
    fontSize: 13,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'justify',
  },
  author: {
    color: colors.clear,
    fontSize: 13,
    paddingTop: 5,
  },
});

export default styles;
