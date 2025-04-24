import { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Nishant singh",
    image: assets.profile_pic,
    email: "bytewizard404@gmail.com",
    phone: "+918881343598",
    address: {
      line1: "Lucknow, U.P.",
      line2: "sdidharthnagar, U.P.",
    },
    gender: "Male",
    dob: "2003-03-24",
  });

  const [ifEdit, setIfEdit] = useState(false);
  console.log(ifEdit);

  return (
    <div className="max-w-lg  flex flex-col gap-2 text-sm">
      <div>
        <div>
          <img className="w-36 rounded-md" src={userData.image} alt="" />
          {ifEdit ? (
            <input
            className="mt-2 outline-none text-3xl rounded border borderg-gray-200"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
            />
          ) : (
            <p className="font-medium text-3xl mt-2">{userData.name}</p>
          )}
        </div>
      </div>
      <hr className="bg-gray-400 h-[1px] border-none" />
      <div>
        <p className="text-lg font-semibold">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3">
          <p>Email id:</p>
          <p className="text-primary">{userData.email}</p>
          <p>Phone:</p>
          {ifEdit ? (
            <input
            className="w-fit outline-none  rounded border borderg-gray-200"
              value={userData.phone}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  phone: e.target.value,
                });
              }}
              type="text"
            />
          ) : (
            <p className="text-primary">{userData.phone}</p>
          )}
          <p className="mt-1">Address:</p>
          {ifEdit ? (
            <p>
              <input
              className="w-fit outline-none  rounded border borderg-gray-200 mt-1"
                value={userData.address.line1}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: {
                      ...userData.address,
                      line1: e.target.value,
                    },
                  });
                }}
                type="text"
              />
              <br />
              <input
              className="w-fit outline-none  rounded border borderg-gray-200 mt-1"
                value={userData.address.line2}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line2: e.target.value },
                  });
                }}
                type="text"
              />
            </p>
          ) : (
            <p className="mt-1">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
        <p className="font-semibold text-xl py-1">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2">
          <p>Gender</p>
          {ifEdit ? (
            <select
            className="w-fit outline-none  rounded border borderg-gray-200"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  gender: e.target.value,
                });
              }}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday:</p>
          {ifEdit ? (
            <input
            className="w-fit outline-none  rounded border borderg-gray-200"
              value={userData.dob}
              type="date"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  dob: e.target.value,
                });
              }}
            ></input>
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
        {ifEdit ? (
        <button className="bg-primary mt-4 px-5 py-2 rounded-full text-white font-medium cursor-pointer" onClick={() => setIfEdit(false)}>Save Changes</button>
      ) : (
        <button className="bg-primary mt-4 px-5 py-2 rounded-full text-white font-medium cursor-pointer" onClick={() => setIfEdit(true)}>Edit Profile</button>
      )}
      </div>
      
    </div>
  );
}

export default MyProfile;
