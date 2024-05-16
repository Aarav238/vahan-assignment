import { useState, useEffect } from "react";
import EntityCard from "../components/EntityCard"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Entity = () => {


    const navigate = useNavigate();
    const [entities, setEntities] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:3000/getPersons'); 
                setEntities(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
       
    }, []);

    
    

  return (
    <>
      <div className="flex justify-between items-center m-2 p-2">
    <div className="text-4xl font-bold flex-grow text-center">ALL ENTITIES</div>
    <button onClick={() => navigate("/create")} className="bg-green-600 text-white px-2 py-2 rounded ml-4 font-semibold">New Entity</button>
  </div>

    <div className="h-screen grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
      {entities.map((entity, index) => (
        <div key={index}>
          <EntityCard data={entity} />
        </div>
      ))}
    </div>
    </>
    
    
  )
}

export default Entity