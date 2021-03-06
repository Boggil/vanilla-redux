import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../reducers/store';
import { add } from '../reducers/store';

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState('');

  console.log(toDos.reducer);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.reducer.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
};

function mapDispatchToProps(dispatch) {
  return {
    // addToDo: text => dispatch(actionCreators.addToDo(text)),
    addToDo: text => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);