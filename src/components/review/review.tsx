import React from 'react'

export default function Review() {
    return (

        // isPopupOpen && (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-10">
                <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                    <h3 className="text-lg font-medium justify-center mb-4">Your review is essential for better services</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Leave your lating from 1 to 5 stars
                        </label>
                        <select
                            // value={setRole}
                            // onChange={handleSetRoleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label className="block text-sm font-medium mt-5 mb-1">
                            Your feedback message
                        </label>
                        <textarea

                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue"
                        >
                        </textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            // onClick={handleSubmit}
                            className="px-4 py-2 mr-2 bg-customBlue text-white rounded-md hover:bg-customBlue focus:outline-none focus:customBlue focus:ring-2"
                        >
                            {/* {isLoading ? 'Loading' : 'ASSIGN'} */}
                        </button>
                        <button
                            // onClick={handleClosePopup}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-red-500 focus:ring-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>


    )
}
