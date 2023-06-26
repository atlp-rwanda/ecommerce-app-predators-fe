import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOrder } from '../../redux/action/reviewAction';

interface ReviewData {
    id: number;
    rating: number;
    feedback: string;
}
interface OrderData {
    id: number;
    status: string;
    message: string;
    product_id: number;
}

export default function Review() {
    // const { id } = useParams();
    // const dispatch = useDispatch();
    // const [rating, setRating] = useState('');
    // const [feedback, setFeedback] = useState('');
    // const [product_id, setProduct_id] = useState('');

    // useEffect(() => {
    //     return dispatch(getOrder({ id }));
    // }, [dispatch, id]);





    const [, setShowForm] = useState(false);

    const handleCloseForm = () => {
        setShowForm(false);
        window.location.reload(); // Reload the page
    };

    return (
        <>

            <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-10">
                <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                    <div className="flex justify-between w-full p-2">
                        <h3 className="mx-auto">Add Review</h3>
                        <div>
                            <button
                                onClick={handleCloseForm}
                                className="flex items-center justify-center shadow-sm ring-1 ring-inset ring-gray-300 rounded-full w-6 h-6"
                            >
                                <i id="cancel_btn" className="material-symbols-rounded">
                                    close
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mt-5">
                            How do you rate us in the range of 1 to 5?
                        </label>
                        <select className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue mb-3">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <textarea
                            className="w-full  border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue"
                            placeholder="Your feedback message"
                        ></textarea>
                    </div>
                    <Link
                        to="/product-page"
                        type="submit"
                        className="flex items-center justify-center text-white bg-customBlue rounded mt-3 py-2 w-21"
                    >
                        SAVE
                    </Link>
                </div>
            </div>
        </>
    );
}
