import AppConstants from '../constants/app-constants'
import { dispatch, register } from '../dispatchers/app-dispatcher'

export default {
  addItem( item ) {
    dispatch({
      action: AppConstants.ADD_ITEM, item
    })
  },
  removeItem( item ) {
    dispatch({
      action: AppConstants.REOMOVE_ITEM, item
    })
  },
  increaseItem( item ) {
    dispatch({
      action: AppConstants.INCREASE_ITEM, item
    })
  },
  decreaseItem( item ) {
    dispatch({
      action: AppConstants.DECREASE_ITEM, item
    })
  }
}
