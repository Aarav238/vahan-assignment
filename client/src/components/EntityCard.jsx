import axios from "axios";
import toast from "react-hot-toast";

const EntityCard = ({data}) => {

  

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/person/${data.id}`)
    
    toast.success("Entity Deleted successfully")
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    

  }
  return (
    

<div className=" text-black  p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data.name}</h5>
    </p>
    <p className="mb-3 font-normal text-gray-700 ">{data.email}</p>
    <div className="flex justify-between">
    <a href={`entity/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        More Details
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    <button onClick={handleDelete}  className="px-3 py-2 bg-red-700  rounded-lg text-white font-medium text-center items-center hover:bg-red-900">
      Delete 
    </button>
    </div>
   
  
</div>

  )
}

export default EntityCard