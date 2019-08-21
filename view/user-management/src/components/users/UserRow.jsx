import React from "react";
import { Link } from "@reach/router";

const UserRow = props => {
  const name = props.user.name.split(" ");

  return (
    <tr>
      <td>
        <Link style={{ color: "white" }} to={`/users/${props.user.index}`}>
          {props.user.index + 1}
        </Link>
      </td>
      <td>
        <Link style={{ color: "white" }} to={`/users/${props.user.index}`}>
          {name[0]}
        </Link>
      </td>
      <td>
        <Link style={{ color: "white" }} to={`/users/${props.user.index}`}>
          {name[1]}
        </Link>
      </td>
      <td className="text-capitalize">{props.user.gender}</td>
      <td>{props.user.email}</td>
    </tr>
  );
};

export default UserRow;
