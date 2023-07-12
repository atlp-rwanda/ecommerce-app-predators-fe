import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disableAccount, getAllUsers } from '../../redux/action/disableAction';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface User {
  getAllUsers: any;
  id: number;
  name: string;
  email: string;
  status: string;
  data: User[];
}

interface DisableData {
  id: number;
  status: 'active' | 'inactive';
  reason: string;
}

const UserTable = (): JSX.Element => {
  const dispatch = useDispatch();
  //users

  const users = useSelector((state: User) => state.getAllUsers.data);

  useEffect(() => {
    dispatch(getAllUsers() as any);
  }, [dispatch]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [disableData, setDisableData] = useState<DisableData>({
    id: 0,
    status: 'active',
    reason: '',
  });

  const handleIconClick = (id: number): void => {
    setIsPopupOpen(true);
    setDisableData((prevData) => ({
      ...prevData,
      id: id,
    }));
  };

  const handleClosePopup = (): void => {
    setIsPopupOpen(false);
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setStatus(e.target.value as 'active' | 'inactive');
  };

  const handleReasonChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setReason(e.target.value);
  };

  const handleSave = (): void => {
    setIsLoading(true);
    const updatedDisableData: DisableData = {
      ...disableData,
      status: status,
      reason: reason,
    };
    dispatch(disableAccount(updatedDisableData) as any)
      .then(() => {
        setIsPopupOpen(false);
        setIsLoading(false);
        toast.success('Account disabled successfully!');
        window.location.reload();
      })
      .catch((err: Error) => {
        console.log(err);
        setIsLoading(false);
        toast.error('Account disable failed. Please try again.');
      });
  };
  return (
    <div className="w-[100%]">
      <div className="relative mt-10 mb-6 shadow-lg">
        <p className="font-medium mb-2 inline-block">Recent Users</p>
        <div className="w-full pb-2 overflow-x-auto">
          <table className="font-light w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="w-32 text-start font-light px-6 py-1">Id</th>
                <th className="w-32 text-start font-light px-6 py-1">Name</th>
                <th className="w-32 text-start font-light px-6 py-1">Email</th>
                <th className="w-full text-start font-light py-4">Status</th>
                <th className="w-32 text-start font-light px-6 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.users?.map((user: User) => (
                <tr key={user.id}>
                  <td className="w-32 text-start px-6 py-1">{user.id}</td>
                  <td className="w-full text-start font-light py-4">
                    {user.name}
                  </td>
                  <td className="w-32 text-start px-6 py-1">{user.email}</td>
                  <td className="w-32 text-start px-6 py-1">{user.status}</td>
                  <td className="w-32 text-start px-6 py-1">
                    <div className="symbols flex justify-between">
                      <i
                        className="material-symbols-rounded cursor-pointer text-blue-500 cursor-pointer"
                        onClick={() => handleIconClick(user.id)}
                      >
                        disabled_visible
                      </i>
                      {isPopupOpen && (
                        <>
                          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-10">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                              <h3 className="text-lg font-medium mb-4">
                                Status and Reason
                              </h3>
                              <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                  Status
                                </label>
                                <select
                                  value={status}
                                  onChange={handleStatusChange}
                                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                  <option value="active">Active</option>
                                  <option value="inactive">Inactive</option>
                                </select>
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">
                                  Reason
                                </label>
                                <textarea
                                  id="w3review"
                                  name="w3review"
                                  value={reason}
                                  onChange={handleReasonChange}
                                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                              </div>
                              <div className="flex justify-end">
                                <button
                                  onClick={handleSave}
                                  className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-2"
                                >
                                  {isLoading ? 'Loading' : 'Save'}
                                </button>
                                <button
                                  onClick={handleClosePopup}
                                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-gray-500 focus:ring-2"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <i className="update material-symbols-rounded cursor-pointer text-orange-500">enable</i>
                      <i className="material-symbols-rounded cursor-pointer text-red-500">delete</i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
