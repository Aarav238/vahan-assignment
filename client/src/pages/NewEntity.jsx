import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { FaEdit } from 'react-icons/fa';
import toast from "react-hot-toast";
const NewEntity = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [entity, setEntity] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  useEffect( () => { 
    async function fetchData() {
      console.log("calling useeffect")
        try {
            const res = await axios.get(`http://localhost:3000/person/${id}`); 
            setEntity(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
   
}, []);

useEffect(() => {
  if (entity) {
    setName(entity.name || '');
    setEmail(entity.email || '');
    setMobile(entity.mobileNumber || '');
    setDob(entity.dateOfBirth || '');
  }
}, [entity]);



console.log(entity);

const handleSaveClick = async () => {
  try {
    const response = await axios.put(`http://localhost:3000/person/${id}`, {
     id: id,
     name: name,
     email: email,
     mobileNumber: mobile,
     dateOfBirth: dob

    });

    if(response.status === 208){
      toast.error(response.data.message)
    }
    else{
      toast.success("Entity Updated Successfully")
      navigate('/')
      setIsEditing(false);
    }
    
  } catch (error) {
    console.error('Error updating profile', error);
  }
};



  return (
    <div className=" flex flex-col justify-center h-screen items-center max-w-md mx-auto overflow-hidden md:max-w-2xl">
      <div className=" p-4 md:flex w-full rounded-xl bg-white shadow-2xl">
        <div className="w-full p-6  rounded-lg">
          <div className="relative">
            <h2 className="text-4xl font-extrabold mb-6 ">User Profile</h2>
            <button onClick={handleEditClick} className="absolute top-0 right-0 p-3 bg-white rounded-full shadow-lg items-center">
              <FaEdit className="text-gray-600 hover:text-gray-800" size={24} />
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="font-bold">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg font-medium">{name}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg font-medium">{email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Mobile</label>
              {isEditing ? (
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg font-medium">{mobile}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Date of Birth</label>
              {isEditing ? (
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="p-3 bg-gray-100 rounded-lg font-medium">{dob}</p>
              )}
            </div>
          </div>
          {isEditing && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveClick}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition duration-300"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewEntity