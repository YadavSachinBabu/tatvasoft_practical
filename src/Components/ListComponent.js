import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "./Actions";

function ListComponent(props) {
  const { users } = props || {};

  const handleDelete = (data) => {
    props?.deleteUser(data);
  };

  return (
    <div className='users-data-container'>
      {users.length > 0 && (
        <ul className='list-container'>
          {users?.map((user, index) => {
            return (
              <li
                key={index}
                className='user-data-list-div'
                style={{ listStyleType: "disc" }}
              >
                {user?.gender === "MALE" && (
                  <span>{`Mr. ${user.firstName} ${user.lastName}`}</span>
                )}
                {user?.gender === "FEMALE" && (
                  <span>{`Ms. ${user.firstName} ${user.lastName}`}</span>
                )}
                {user?.gender === "" && (
                  <span>{`${user.firstName} ${user.lastName}`}</span>
                )}
                <span
                  className='delete-button'
                  onClick={() => handleDelete(user)}
                >
                  <strong>X</strong>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  deleteUser,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
