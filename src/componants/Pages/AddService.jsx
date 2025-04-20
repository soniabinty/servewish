import axios from "axios";
import AuthContext from "../provider/AuthContext";
import { useContext } from "react";
import { LiaServicestack } from "react-icons/lia";
import toast from "react-hot-toast";
import img from '../../assets/service/standard-quality-control-concept-m.jpg'


const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const company = form.company.value;
    const website = form.website.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const email = user.email;
    const addedDate = new Date().toLocaleDateString();

    console.log(
      title,
      company,
      website,
      category,
      price,
      description,
      image,
      email,
      addedDate
    );

    const newService = {
      title,
      company,
      website,
      category,
      price,
      description,
      image,
      email,
      addedDate,
    };

    axios
      .post("https://servewish-server.vercel.app/service", newService)
      .then((data) => {
        console.log(data.data);
        form.reset(); 
        toast.success("Service added successfully!");
      })
      .catch((error) => {
        console.error("Error adding service:", error);
      });
  };

  return (
<div      className="relative w-full md:h-[700px] h-[950px] mb-12  "
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

<div className="absolute inset-0 bg-black bg-opacity-70 px-2 mt-12 h-full  text-white  ">
      {/* <Helmet>
        <title>ServeWISH-add service</title>
      </Helmet> */} 
      <div className="text-center justify-center mt-8 ">
        
        <h1 className="text-3xl font-bold">Add a service</h1>
        <p className="">
          Explore, review, and discover trusted
          <br />
          services with real user feedback to make informed decisions
        </p>
      </div>
      <div className=" mx-auto  shadow-lg rounded-lg ">
        <form onSubmit={handleAddService} className="card-body text-white">
          <div className="md:grid grid-cols-3 gap-4">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Service Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Service Title"
                className="input input-bordered bg-gray-700 text-white"
                required
              />
            </div>

            {/* Company */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Company Name</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="input input-bordered bg-gray-700"
                required
              />
            </div>

            {/* Website */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Website</span>
              </label>
              <input
                type="url"
                name="website"
                placeholder="Website"
                className="input input-bordered bg-gray-700"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered bg-gray-700"
                required
              >
                <option value="" disabled selected>
                  Select a Category
                </option>
                <option value="Restaurants">Restaurants</option>
                <option value="Transports">Transports</option>
                <option value="Home Services">Home Services</option>
                <option value="Medical">Medical</option>
                <option value="Beauty and Spa">Beauty and Spa</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered bg-gray-700"
                required
              />
            </div>

            {/* Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Service Image</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Service Image URL"
                className="input input-bordered bg-gray-700"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-medium text-white mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border rounded-lg p-2 bg-gray-700"
              rows="4"
              placeholder="Enter Service Description"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#fb110d] hover:bg-[#fb110d] text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>

</div>
  );
};

export default AddService;
