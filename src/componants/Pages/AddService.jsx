import axios from "axios";
import AuthContext from "../provider/AuthContext";
import { useContext } from "react";
import { LiaServicestack } from "react-icons/lia";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

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
      .post("https://servewish-server-c8u6iz51g-bintys-projects.vercel.app/service", newService)
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
    <div>
      <Helmet>
        <title>ServeWISH-add service</title>
      </Helmet>
      <div className="text-center flex flex-col justify-center mb-4">
        <div className="flex items-center text-center text-green-900 mx-auto">
          <LiaServicestack className="text-2xl" />
          <h1 className="logo-name btn btn-ghost text-xl p-0">ServeWISH</h1>
        </div>
        <h1 className="text-3xl font-bold">Add a service</h1>
        <p className="">
          Explore, review, and discover trusted
          <br />
          services with real user feedback to make informed decisions
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-l from-green-300 to-green-600 shadow-lg rounded-lg my-8">
        <form onSubmit={handleAddService} className="card-body">
          <div className="md:grid grid-cols-2 gap-4">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Service Title"
                className="input input-bordered"
                required
              />
            </div>

            {/* Company */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Website */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Website</span>
              </label>
              <input
                type="url"
                name="website"
                placeholder="Website"
                className="input input-bordered"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered"
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
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>

            {/* Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Image</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Service Image URL"
                className="input input-bordered"
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
              className="w-full border rounded-lg p-2"
              rows="4"
              placeholder="Enter Service Description"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-green-900 text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
