import React from 'react'
import AppStore from '../../stores/app-store'
import StoreWatchMixin from '../../mixins/store-watch-mixins'
import { Link } from 'react-router'

const CartSummary = ( props ) => {
  console.log(props);
  return(
    <div style={{paddinbTop: 15}}>
      <Link to="/cart" className="btn btn-success">
        {`Cart Items: ${props.qty} / $${props.total}`}
      </Link>
    </div>
  )
}

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals)
