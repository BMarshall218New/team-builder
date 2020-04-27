import React, { useState } from 'react';
import memberData from "./data";
import MemberForm from "./Components/Form";
import './App.css';
import TeamMembers from './Components/TeamMembers';

function App() {
  const [members, setMembers] = useState(memberData);
  console.log(members)

  const addNewMember = member => {
    const newMember = {
      id: "",
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
    //Why do you use "members" and "newMembers" here?
  };
  return (
    <div className="App">
      <h1>Members List</h1>
      <MemberForm className="memberForm" addNewMember={addNewMember} />
      <TeamMembers members={members} />
    </div>
  );
}

export default App;
