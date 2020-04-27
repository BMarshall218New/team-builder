import React, { useState } from "react";

const MemberForm = ({ addNewMember }) => {
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const handleChanges = event => {
        console.log(event.target.name);
        setMember({ ...member, [event.target.name]: event.target.value })
        //I dont understand the syntax, why is it repeated?
    }
    const submitForm = event => {
        event.preventDefault();
        addNewMember(member);
        setMember({ name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="Member">Team Member </label>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={member.name}
                onChange={handleChanges}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={member.email}
                onChange={handleChanges}

            />
            <input
                type="text"
                placeholder="Email"
                name="role"
                value={member.role}
                onChange={handleChanges}

            />
            <br />
            <button type="submit">Add Member</button>

        </form>
    )
}

export default MemberForm;

