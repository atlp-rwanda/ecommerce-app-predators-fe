import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addReview } from '../../redux/action/reviewAction';

interface ReviewData {
    product_id: number;
    rating: number;
    feedback: string;
}

interface ReviewProps {
    id: number;
}

export default function Review(props: ReviewProps) {
    const dispatch = useDispatch();
    const { id } = props;
    const [rating, setRating] = useState(1);
    const [feedback, setFeedback] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRating(parseInt(e.target.value));
    };

    const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value);
    };

    const handleAddReview = () => {
        const review: ReviewData = {
            product_id: id,
            rating: rating,
            feedback: feedback,
        };

        dispatch(addReview(review) as any)
            .then(() => {
                toast.success('Your review has been added.');
                setRating(rating);
                setFeedback(feedback);
                setShowForm(false);
            })
            .catch(() => {
                toast.error('Failed to add review. Please try again.');
                setRating(1);
                setFeedback('');
                setShowForm(false);
            });
    };

    const handleCloseForm = () => {
        setShowForm(false);

    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <>
            {!showForm ? (
                <div
                    className="bg-customBlue justify-center text-white rounded-full px-3 py-1 w-1/2 flex cursor-pointer"
                    onClick={handleShowForm}
                >
                    Add Review
                </div>
            ) : (
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
                            <select
                                value={rating}
                                onChange={handleRatingChange}
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue mb-3"
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            <textarea
                                value={feedback}
                                onChange={handleFeedbackChange}
                                className="w-full  border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:customBlue focus:border-customBlue"
                                placeholder="Your feedback message"
                            ></textarea>
                        </div>
                        <button
                            onClick={handleAddReview}
                            className="flex items-center justify-center text-white bg-customBlue rounded px-3 py-2 w-full"
                        >
                            SAVE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
