import React from "react";
import { Link } from "react-router-dom";
import * as vm from "./member-row.model";

interface Props {
  member: vm.Member;
}

export const MemberRow = (props: Props) => {
  const { member } = props;
  return (
    <React.Fragment key={member.id}>
      <img src={member.avatar_url} />
      <span>
        <Link to={`/details/${member.login}`}>{member.login}</Link>
      </span>
    </React.Fragment>
  );
};
