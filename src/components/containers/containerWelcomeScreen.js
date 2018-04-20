import { connect } from 'react-redux';
import actions from '../../store/actions';
import WelcomeScreen from '../screens/WelcomeScreen';

const mapStateToProps = state => ({
  mainItemDetails: state.foodStore.mainItemDetails,
  categoryContents: state.foodStore.categoryContents,
});

const mapDispatchToProps = dispatch => ({
  refreshMenu: (menuData, cartData) => {
    dispatch(actions.refreshMenu(menuData, cartData));
  },
  purgeCart: () => {
    dispatch(actions.purgeCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);