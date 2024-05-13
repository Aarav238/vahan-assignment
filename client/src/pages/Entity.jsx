import { useState, useEffect } from "react";
import EntityCard from "../components/EntityCard"
import axios from 'axios'
const Entity = () => {

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
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 justify-items-stretch">
      {entities.map((entity, index) => (
        <div key={index}>
          <EntityCard data={entity} />
        </div>
      ))}
    </div>
    
  )
}

export default Entity