import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from '../../componants/Shared/Loading'

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://servewish-server.vercel.app/reviews?email=${user.email}`)
      .then((response) => {
        setReviews(response.data)
        setLoading(false)
      })
        
    
     
  }, [user.email]);

  const openUpdateModal = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedReview = {
      reviewText: event.target.reviewText.value,
      rating: event.target.rating.value,
    };

    axios
      .put(`https://servewish-server.vercel.app/review/${selectedReview._id}`, updatedReview)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          toast.success("Review updated successfully!");
          setReviews((prev) =>
            prev.map((review) =>
              review._id === selectedReview._id ? { ...review, ...updatedReview } : review
            )
          );
          setModalOpen(false);
        } else {
          toast.error("Failed to update the review");
        }
      })
      .catch(() => toast.error("An error occurred while updating the review"));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://servewish-server.vercel.app/review/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            toast.success("Review deleted successfully");
            setReviews((prev) => prev.filter((review) => review._id !== id));
          } else {
            toast.error("Failed to delete the review");
          }
        });
      }
    });
  };
  if(loading) {
    return <Loading></Loading>
  }
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mt-10 text-gray-800">My Reviews</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
          <div className="flex-grow">
          <h4 className="mb-2 text-xl font-semibold text-gray-900">{review.title}</h4>
            <p className="text-sm text-gray-500 font-medium">⭐ Rating: {review.rating}</p>
            <p className="text-gray-700 mt-3">{review.reviewText}</p>
          </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => openUpdateModal(review)}
                className="px-4 py-2 border-[#fb110d] border text-[#fb110d] rounded-md transition"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="px-4 py-2 bg-[#fb110d] text-white rounded-md transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 flex items-center justify-center  md:p-0 bg-black/50 backdrop-blur-md z-50">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-lg font-bold">Update Review</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700">Service Title</label>
                <input
                  type="text"
                  name="serviceTitle"
                  defaultValue={selectedReview.title}
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700">Review Text</label>
                <textarea
                  name="reviewText"
                  defaultValue={selectedReview.reviewText}
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Rating</label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={selectedReview.rating}
                  min="1"
                  max="5"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-[#fb110d] text-white rounded-md">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
