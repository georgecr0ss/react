import AppConstants from '../constants/app-constants'
import { dispatch, register } from '../dispatchers/app-dispatcher'
import { EventEmmiter } from 'events'

const CHANGE_EVENT = 'change'

var _catalog = []

for (var i = 0; i < 9; i++) {
  _catalog.push({
    'id': 'Widget' + i,
    'title': 'Widget #' + i,
    'summary': 'A greate widget',
    'description': 'standard dummy text ever since the 1500s',
    'cost': i
  })
}

var _cartItems = []

const _removeItem = { item } => {
  _cartItems.splice( _cartItems.findIndex( i => i === item ), 1 )
}

const _findCartItem = ( item ) => {
  return _cartItems.find( cartItem => cartItem.id === item.id )
}

const _increaseItem = ( item ) => item.qty++

cosnt _decreaseItem =( item ) => {
  item.qty--
  if ( item.qty ===0 ) {
    __removeItem( item )
  }
}

const _addItem = ( item ) => {
  const cartItem = _findCartItem( item )
  if( !cartItem ) {
    _cartItems.push( Object.assign({qty: 1}, item))
  } else {
    _increaseItem( cartItem )
  }
}

const _cartTotals = ( qty = 0, total = 0 ) => {
  _cartItems.forEach( cartItem => {
    qty += cartItem.qty
    total += cartItem.qty * cartItem.coast
  })

  retur { qty, total }
}

cosnt AppStore = Object.assign(EventEmmiter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT )
  },
  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ) {
    this.removeListener( CHANGE_EVENT, callback )
  },
  getCart() {
    return _cartItems
  },
  getCatalog() {
    return _catalog.map( item => {
      return Object.assign({}, _cartItems.find( cItem => cItem.id === item.id))
    })
  },
  getCartTotals() {
    return _cartTotals()
  },
  dispatcherIndex: register( function( action ) {
    // body...
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
          _addItem( action.item )
        break;
      case AppConstants.REOMOVE_ITEM:
          _removeItem( action.item )
        break;
      case AppConstants.INCREASE_ITEM:
          _increaseItem( action.item )
        break;
      case AppConstants.DECREASE_ITEM:
          _decreaseItem( action.item )
        break;
      default:

    }
    AppStore.emitChange()
  })
})

export default AppStore
