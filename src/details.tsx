import React from "react";
import { Link, useParams } from "react-router-dom";
import { Member } from "./member-row.model";

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

export const Details = () => {
  const { login } = useParams();
  const [member, setMember] = React.useState<MemberDetailEntity>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);

  return member ? (
    <>
      <h3>{member.name}</h3>
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <Link to="/">Volver</Link>
    </>
  ) : (
    <>Loading...</>
  );
};
