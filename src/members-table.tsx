import React from "react";
import { MemberRow } from "./member-row";
import { Member } from "./member-row.model";
import { MembersTableHeader } from "./members-table-header";

interface Props {
  organization: string;
}

export const MembersTable = (props: Props) => {
  const { organization } = props;
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((response) => {
        setMembers(response);
      });
    // .catch((error) => {
    //   console.log(error.message);
    // });
  }, [organization]);

  if (members) {
    return (
      <div className="user-list-container">
        <MembersTableHeader />
        {members.map((member) => (
          <MemberRow key={member.id} member={member} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <span className="error-api">La API "{organization}" no existe.</span>
    </div>
  );
};
