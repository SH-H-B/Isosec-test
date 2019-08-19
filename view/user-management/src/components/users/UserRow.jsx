import React from "react";

const UserRow = props => {
  const name = props.user.name.split(" ");

  return (
    <tr>
      <td>{props.user.index + 1}</td>
      <td>{name[0]}</td>
      <td>{name[1]}</td>
      <td>{props.user.gender}</td>
      <td>{props.user.email}</td>
    </tr>
  );
};

export default UserRow;
