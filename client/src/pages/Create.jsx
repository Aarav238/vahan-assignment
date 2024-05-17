import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; 
const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    setLoading(true);
    const response = await axios.post("http://localhost:3000/person", formData)
    if(response.status === 208){
      setLoading(false)
      toast.error(response.data.message)
    }

    else{
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          mobileNumber:"",
          dateOfBirth: ""
        });
        setLoading(false);
        toast.success("Entity Created successfully")
      
        navigate("/");
        }, 1000);
    }
    } catch (error) {
      setLoading(false)
      toast.error("Something Went Wrong");
      // console.log("error - ", error.response)
    }
   

    
    
  };

  return (
    // <div className>
    //    <div className="bg-gray-100 p-6 rounded-lg shadow-md ">
    //   <h2 className="text-2xl font-semibold mb-4">Create an Entity</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="customer_name"
    //         className="block text-sm font-medium text-gray-700"
    //       >
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         placeholder="Enter Name"
    //         value={formData.name}
    //         onChange={handleInputChange}
    //         className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="customer_email"
    //         className="block text-sm font-medium text-gray-700"
    //       >
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         placeholder="Enter Email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //         className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="product"
    //         className="block text-sm font-medium text-gray-700"
    //       >
    //         Mobile Number
    //       </label>
    //       <input
    //         type="text"
    //         id="mobileNumber"
    //         name="mobileNumber"
    //         placeholder="Enter Mobile Number"
    //         value={formData.mobileNumber}
    //         onChange={handleInputChange}
    //         className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="quantity"
    //         className="block text-sm font-medium text-gray-700"
    //       >
    //         Date of Birth
    //       </label>
    //       <input
    //         type="date"
    //         id="dateOfBirth"
    //         name="dateOfBirth"
    //         value={formData.dateOfBirth}
    //         onChange={handleInputChange}
    //         className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
    //         required
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className=" flex items-center justify-center w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
    //     >
    //       {loading ? (
    //         <svg
    //           fill="white"
    //           xmlns="http://www.w3.org/2000/svg"
    //           height="1em"
    //           viewBox="0 0 512 512"
    //         >
    //           <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
    //         </svg>
    //       ) : (
    //         "Create"
    //       )}
    //     </button>
    //   </form>
    // </div>
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4 text-center">Create an Entity</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="customer_name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="customer_email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="product"
          className="block text-sm font-medium text-gray-700"
        >
          Mobile Number
        </label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Enter Mobile Number"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        {loading ? (
          <svg
            className="animate-spin"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
          </svg>
        ) : (
          "Create"
        )}
      </button>
    </form>
  </div>
</div>

   
  );
};

export default Create;