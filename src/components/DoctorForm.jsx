import React, { useState } from 'react';
import "../css/CreateDocAcc.css"


const DoctorForm = ({ onCreateDoctor }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fellowship1, setFellowship1] = useState('');
    const [fellowship2, setFellowship2] = useState('');
    const [identificationNo, setIdentificationNo] = useState('');
    const [department, setDepartment] = useState('');

    const createAcc = () => {
        console.log(`Form values: ${firstName}, ${lastName}, ${fellowship1}, ${fellowship2}, ${identificationNo}, ${department}`);

        const newRow = (
            <tr className="tr">
                <td className="td">{identificationNo}</td>
                <td className="td">{firstName} {lastName}</td>
                <td className="td">{fellowship1}, {fellowship2}</td>
                <td className="td">{department}</td>
                <td className="td">
                    <a href="#" className="edit"><i className="fas fa-edit"></i> Edit</a>
                </td>
            </tr>
        );

        // Append the new row to the table body (assuming you have a state managing this)
        // For demonstration, just logging it
        console.log('New row created:', newRow);

        // Redirect logic if needed
        setTimeout(() => {
            console.log('Redirecting to AdminDashboardDoctor.html');
            // window.location.href = 'AdminDashboardDoctor.html';
        }, 100);
    };



///////////////////////////////////////////////////////////////////////////////////////////

const handleSubmit = () => {
    const newDoctor = {
      identificationNo,
      name: `${firstName} ${lastName}`,
      fellowship: `${fellowship1}, ${fellowship2}`,
      department,
    };
    onCreateDoctor(newDoctor);
  };



    return (
        <div className="div-19 createDoctorForm">
            <div className="profile-section">
                <div className="profile-picture">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/017e85dd21cd6764f2f4994df5fc178e38bb0038207282b7c72a3f8f1e452c61?apiKey=25b957d3db53419f881a9efe72b830ae&"
                        alt="Profile"
                    />
                    <button className="change-profile-btn">Add Profile</button>
                </div>
                <div className="profile-details">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="first-name">First Name*</label>
                            <input  type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="last-name">Last Name*</label>
                            <input type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="address">Fellowship 1</label>
                            <input type="text" id="address" value={fellowship1} onChange={e => setFellowship1(e.target.value)} / >
                        </div>
                        <div className="col">
                            <label for="city">Fellowship 2</label>
                            <input type="text" id="city" value={fellowship2} onChange={e => setFellowship2(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="experience">Years Of Experience</label>
                            <input type="number" id="experience" />
                            
                        </div>
                        <div className="col">
                            <label for="IDNo">Identification No</label>
                            <input type="number" id="IDNo" value={identificationNo} onChange={e => setIdentificationNo(e.target.value)}/>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="blood-group">Blood Group</label>
                            <input type="text" id="blood-group" name="blood-group"/>
                        </div>
                        <div className="col">
                            <label for="depName">Department Name</label>
                            <input type="text" id="depName" value={department} onChange={e => setDepartment(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="mobile">Mobile</label>
                            <input type="number" id="mobile" name="mobile"/>
                        </div>
                        <div className="col">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="div-57" type="button" onClick={handleSubmit}>Create Account</button>

        </div>
    );
};

export default DoctorForm;




