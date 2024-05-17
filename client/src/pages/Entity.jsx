import { useState, useEffect } from "react";
import EntityCard from "../components/EntityCard"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Entity = () => {


  const navigate = useNavigate();
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:3000/getPersons');
        setEntities(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();

  }, []);




  return (
    <>
      <div className="flex bg-white sticky top-0 z-50 justify-between items-center p-4">
        <div className="text-4xl sticky font-bold flex-grow text-center">ALL ENTITIES</div>
        <button onClick={() => navigate("/create")} className="bg-green-600 text-white px-2 py-2 rounded ml-4 font-semibold">New Entity</button>
      </div>
      {!loading ? (<div className="h-screen grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
        {entities.map((entity, index) => (
          <div key={index}>
            <EntityCard data={entity} />
          </div>
        ))}
      </div>) : (<div className="flex justify-center items-center h-screen">
        <div
          id="Loader"
          className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"
        />
      </div>)}

    </>


  )
}

export default Entity