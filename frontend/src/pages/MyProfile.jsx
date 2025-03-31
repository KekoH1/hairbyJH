import React, { useState } from "react";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Kevin Hattina",
    email: "kevin@email.com",
    phone: "0701234567",
    address: "Storgatan 1, 123 45 Stockholm",
    gender: "Man",
    dob: "1990-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      {isEdit ? (
        <input
          className="bg-gray-100 text-3xl font-medium max-w-60 mt-4 "
          type="text"
          value={userData.name}
          onChange={e =>
            setUserData(prev => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl mt-4">{userData.name}</p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="underline mt-3">Kontakt Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5">
          <p className="font-medium">Email:</p>
          <p className="text-blue-600 underline">{userData.email}</p>
          <p className="font-medium">Telnr:</p>
          {isEdit ? (
            <input
              className="bg-gray-200"
              type="text"
              value={userData.phone}
              onChange={e =>
                setUserData(prev => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-600 underline">{userData.phone}</p>
          )}
          <p className="font-medium">Adress:</p>
          {isEdit ? (
            <input
              className="bg-gray-200"
              type="text"
              value={userData.address}
              onChange={e =>
                setUserData(prev => ({ ...prev, address: e.target.value }))
              }
            />
          ) : (
            <p>{userData.address}</p>
          )}
        </div>
      </div>
      <div>
        <p className="underline mt-3">Generell information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5">
          <p className="font-medium">Kön:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-200"
              onChange={e =>
                setUserData(prev => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Man">Man</option>
              <option value="Kvinna">Kvinna</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p className="font-medium">Födelse Datum:</p>
          {isEdit ? (
            <input
              className="max-w-20 bg-gray-200"
              type="date"
              onChange={e =>
                setUserData(prev => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-gray-600 px-8 py-2 rounded-full hover:bg-blue-400 hover:text-white"
            onClick={() => setIsEdit(false)}
          >
            Spara
          </button>
        ) : (
          <button
            className="border border-gray-600 px-8 py-2 rounded-full hover:bg-blue-400 hover:text-white"
            onClick={() => setIsEdit(true)}
          >
            Redigera
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
