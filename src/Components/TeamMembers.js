import React, { useState } from "react";

const TeamMembers = props => {
    return (
        <div className="MembersList">
            {props.members.map(member => (
                <div className="member">
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))
            }
        </div >
    );
};

export default TeamMembers