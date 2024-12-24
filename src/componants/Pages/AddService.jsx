import axios from "axios";

import AuthContext from "../provider/AuthContext";
import { useContext } from "react";


const AddService = () => {
  const {user } = useContext(AuthContext)

  const handleAddService = (e) =>{
    e.preventDefault()
    const form = e.target 
   
    const title = form.title.value
    const company = form.company.value
    const website = form.website.value
    const category = form.category.value
    const price = form.price.value
    const description = form.description.value
    const image = form.image.value
const email = user.email
const addedDate = new Date().toLocaleDateString();
  
   
    console.log(title , company , website , category , price , description , image ,email , addedDate)

    const newService = {
      title , company , website , category , price , description , image , email  , addedDate 
    };

    axios.post('http://localhost:5000/service', newService)
    .then(data =>{
      console.log(data.data)
    })


 


}

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-l from-green-300 to-green-600 shadow-lg rounded-lg my-8">
  
    
  <form onSubmit={handleAddService} className="card-body">
     

     <div className="md:grid grid-cols-2 gap-4">

         {/* Title */}
     <div className="form-control">
            <label className="label">
              <span className="label-text">Service Title</span>
            </label>
            <input type="text" name="title" placeholder="Service Title" className="input input-bordered" required />
           
       
           
          </div>


            {/* company */}


            <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
           
       
           
          </div>

          {/* website */}


          <div className="form-control">
            <label className="label">
              <span className="label-text">Website</span>
            </label>
            <input type="url" name="website" placeholder="Website" className="input input-bordered" required />
           
       
           
          </div>




              {/* category */}


          
              <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" name="category" placeholder="Company Name" className="input input-bordered" required />
           
       
           
          </div>


            {/* PRICE */}


          
            <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
           
       
           
          </div>


  {/* IMAGE */}
  <div className="form-control">
            <label className="label">
              <span className="label-text">Service image</span>
            </label>
            <input type="url" name="image" placeholder="service image" className="input input-bordered" required />
          </div>




        

      


     </div>

     {/* description */}

     <div className="md:col-span-2">
          <label className="block font-medium text-white mb-2">Description</label>
          <textarea
        name="description"
            className="w-full border rounded-lg p-2"
            rows="4"
            placeholder="Enter Service Description"
          />

</div>
          
      
          <div className="form-control mt-6">
            <button className="btn bg-green-900 text-white">Submit</button>
          </div>
        </form> 
         
             
          
      
    </div>
  );
};

export default AddService;
