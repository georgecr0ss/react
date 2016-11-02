import React from 'react';
import StoreWatcher from '../../mixins/store-watcher';
import TodoStore from '../../stores/store'

function getInfo() {
  return TodoStore.info();
}
const TodoInfo = (props) => {
  console.log(props);
  let style ={width: 300, float:'right', height: '100%'}
  if (props.active > props.completed) {
    style.backgroundColor = 'red';
    style.color =  '#FAFAFA';
  } else if(props.active < props.completed) {
    style.backgroundColor =  'green';
    style.color = '#FAFAFA';
  } else {
    style.backgroundColor = 'yellow';
    style.color =  '#1e1e1e';
  }
  return (
    <div className={props.class} style={style}>
      <h4>TODOs Info: {props.active} / {props.completed}</h4>
    </div>
  )
}

export default StoreWatcher(TodoInfo, getInfo)
