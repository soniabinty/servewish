import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../provider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
   
    axios
      .get(`https://servewish-server.vercel.app/reviews?email=${user.email}`)
      .then((response) => setReviews(response.data))
      .catch(() => toast.error('Failed to load reviews'));
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
    
    console.log('Updating review:', updatedReview);  // Debug log
    
    axios
      .put(`https://servewish-server.vercel.app/review/${selectedReview._id}`, updatedReview)
      .then((response) => {
        console.log('Update response:', response);  // Debug log
        if (response.data.modifiedCount > 0) {
          toast.success('Review updated successfully!');
          setReviews((prev) =>
            prev.map((review) =>
              review._id === selectedReview._id ? { ...review, ...updatedReview } : review
            )
          );
          setModalOpen(false);
          setSelectedReview(null);
        } else {
          toast.error('Failed to update the review');
        }
      })
      .catch((error) => {
        console.error('Update error:', error);  // Debug log
        toast.error('An error occurred while updating the review');
      });
  };
  
  const handleDelete = (id) => {
    console.log('Deleting review with id:', id);  
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://servewish-server.vercel.app/review/${id}`)
          .then((data) => {
            console.log('Delete response:', data);  // Debug log
            if (data.data.deletedCount > 0) {
              toast.success('Review deleted successfully');
              setReviews((prev) => prev.filter((review) => review._id !== id));
            } else {
              toast.error('Failed to delete the review');
            }
          })
          .catch((error) => {
            console.error('Delete error:', error);  // Debug log
            toast.error('An error occurred while deleting the review');
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      
      <h1 className="text-2xl font-bold mb-6 text-center">My Reviews</h1>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (





<div key={review._id} class="flex flex-col bg-green-300 shadow-sm border border-slate-200  py-6 w-10/12  mx-auto">
 
  <div class="p-2 text-center mt-4">
    <h4 class="mb-1 text-2xl font-semibold text-slate-800 text-green-900">
    {review.title}
    </h4>
    <p
      class="text-sm font-semibold text-slate-500 uppercase">
     Rating: {review.rating} ⭐
    </p>
    <p class="text-base text-slate-600 mt-4 font-light ">
    {review.reviewText}
    </p>
  </div>
  <div class="flex  justify-center p-6 pt-2 gap-7">
    
  <button onClick={() => openUpdateModal(review)} className="btn btn-xs bg-green-900 text-white border-none hover:bg-green-900">Update</button>
  <button onClick={() => handleDelete(review._id)} className="btn btn-xs bg-green-900 text-white border-none hover:bg-green-900">Delete</button>

     {/* <button onClick={() => openUpdateModal(review)}>
              <FaEdit className='text-2xl text-green-900' />
            </button>
            <button onClick={() => handleDelete(review._id)} >
              <MdDeleteForever className='text-2xl text-red-900' />
            </button> */}
    
  </div>
</div>
          
        ))}
      </div>

      {isModalOpen && selectedReview && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-hidden={!isModalOpen}
        >
          <div className="modal-box relative">
            <h2 className="font-bold text-lg">Update Review</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">Service Title</label>
                <input
                  type="text"
                  name="serviceTitle"
                  defaultValue={selectedReview.title}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">Review Text</label>
                <textarea
                  name="reviewText"
                  defaultValue={selectedReview.reviewText}
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Rating</label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={selectedReview.rating}
                  min="1"
                  max="5"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn"
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
