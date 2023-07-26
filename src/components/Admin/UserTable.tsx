import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/action/disableAction';
import profile from './../../assets/dashboard/account_circle.svg';
import { setRoles } from '../../redux/action/AdminAction';

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  roleId: number;
}

interface SetData {
  id: number;
  setRole: number;
}

const UserTable = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.getAllUsers.data);
  useEffect(() => {
    dispatch(getAllUsers() as any);
  }, [dispatch]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [setRole, setSetRole] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const [newRole, setNewRole] = useState<SetData>({
    id: 0,
    setRole: -1,
  });
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleIconClick = (id: number) => {
    setIsPopupOpen(true);
    setNewRole((prevData) => ({
      ...prevData,
      id: id,
    }));
  };

  const handleSetRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10); // Parse e.target.value as a number
    setSetRole(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    const newUserRole: SetData = {
      ...newRole,
      setRole: setRole,
    };
    dispatch(setRoles(newUserRole) as any)
      .then(() => {
        setIsPopupOpen(false);
        setIsLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 5000); // Reload after 5 seconds (5000 milliseconds)
      })
      .catch((err: any) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="relative mt-10 mb-6 shadow-lg w-[90%]">
      <p className="font-medium mb-2 inline-block">Admin User Management</p>
      <div className="w-full pb-2 overflow-x-auto">
        <table className="font-light w-full">
          <thead className="bg-blue-200">
            <tr>
              <th className="w-32 text-start font-bold px-6 py-1 capitalize">
                Account Status
              </th>
              <th className="w-32 text-start font-bold px-6 py-1 capitalize">
                User Name
              </th>
              <th className="w-32 text-start font-bold px-6 py-1 capitalize">
                User Email
              </th>
              <th className="w-32 text-start font-bold px-6 py-1">User Role</th>
              <th className="w-32 text-start font-bold px-6 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map Users! */}
            {users?.data?.users?.map((user: User) => (
              <tr key={user.id}>
                <td className="w-32 text-start px-6 py-1">
                  <button
                    className={`bg-${
                      user.status !== 'active' ? 'tertiary' : 'customBlue'
                    } hover:bg-${
                      user.status !== 'active' ? 'red' : 'customBlue'
                    } text-white font-bold py-1 px-6 rounded-lg capitalize`}
                  >
                    {user.status}
                  </button>
                </td>

                <td className="w-48 font-light py-4 rounded-lg flex items-center">
                  <img
                    src={profile}
                    alt="User"
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                  {user.name}
                </td>

                <td className="w-48 text-start font-light px-6 py-1">
                  {user.email}
                </td>
                <td className="w-48 text-start font-light px-6 py-1">
                  {user.roleId === 0
                    ? 'Admin'
                    : user.roleId === 1
                    ? 'Vendor'
                    : 'Buyer'}
                </td>
                <td className="w-32 text-start font-light px-6 py-1">
                  <div className="symbols flex justify-between">
                    <i className="material-symbols-rounded cursor-pointer text-customBlue-500">
                      visibility
                    </i>
                    <i className="update material-symbols-rounded cursor-pointer text-orange-500 cursor-pointer">
                      edit
                    </i>
                    <i className="material-symbols-rounded cursor-pointer text-red-500 cursor-pointer">
                      delete_forever
                    </i>
                    <i
                      className="material-symbols-rounded cursor-pointer cursor-pointer"
                      onClick={() => handleIconClick(user.id)}
                    >
                      manage_accounts
                    </i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPopupOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-10">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
              <h3 className="text-lg font-medium mb-4">Assign User Roles</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Roles & Permission
                </label>
                <select
                  value={setRole}
                  onChange={handleSetRoleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue"
                >
                  <option value="0">Admin</option>
                  <option value="1">Vendor</option>
                  <option value="2">Buyer</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 mr-2 bg-customBlue text-white rounded-md hover:bg-customBlue focus:outline-none focus:customBlue focus:ring-2"
                >
                  {isLoading ? 'Loading' : 'ASSIGN'}
                </button>
                <button
                  onClick={handleClosePopup}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-red-500 focus:ring-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserTable;
