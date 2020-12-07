import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ toDo }) => {
  return (
    /* 
      toDo? => ?는 redux persist를 아직 적용하지 않아서 새로고침을 하였을 때
      state 값이 초기화 되므로 toDo 값이 없을 때의 에러를 막기위한 방지이다.
      ※: Detail Page에 state가 초기화 되었기 때문에 값이 안찍힘.
     */
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;

  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps, null)(Detail);