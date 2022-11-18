import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   asyncPlusAction,
//   asyncMinusAction,
// } from "../redux/actions/counterAction";
// import { asyncAddUsersAction } from "../redux/actions/userAction";

// import { asyncAddProducts } from "./../redux/actions/product";

function Ed() {
  // const dispatch = useDispatch();

  // const value = useSelector((state) => state.counter.cash);
  // const users = useSelector((state) => state.userReducer.users);
  // const state = useSelector((state) => state);

  // React.useEffect(() => {
  //   dispatch(AddUsersAction());
  // }, []);

  return (
    <div>
      {/* <div className="wrap-btn">
        <button className="plus" onClick={() => dispatch(asyncPlusAction())}>
          PLUS
        </button>
        <button className="reset">RESET</button>
        <button className="minus" onClick={() => dispatch(asyncMinusAction())}>
          MINUS
        </button>
      </div>
      <div className="wrap-value">
        <div className="value">{value}</div>
      </div>
      <div className="wrap-btn">
        <button
          className="plus"
          onClick={() => dispatch(asyncAddUsersAction())}
        >
          ADD
        </button>
        <button className="reset">RESET</button>
        <button className="minus" onClick={() => dispatch(asyncAddProducts())}>
          CLEAR
        </button>
      </div>
      <div className="wrap-value">
        <div className="value">
          {users.map((user, index) => (
            <div className="users" key={index}>
              {user.name}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Ed;
