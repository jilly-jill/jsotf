import axios from "axios";
import { useEffect } from "react";
import useHistory from 'react';


function chooseFighter() {

    const history=useHistory();
    const changeHandlerAddFighter = (e) => {
        const fighter = e.target.fighter;
        const value = e.target.value
        const tempFighter = {...addFighter};
        tempFighter[fighter] = value;
        setAddFighter;
    }

    const[addFighter, setAddFighter] = useState(
        {fighterName: "",
        fighterImage: "",}
    )

    const [fighter, setFighter] = useState([]);
        useEffect(() => {
            axios.get(url)
            .then(response => {
                setFighter(response.data);
            }).catch(e => {
                console.log(e);
            })})
        
        return(

            <div align="center">
                <div>
                    <select OnChange={changeHandlerAddFighter} className= "add-fighter-card">
                    {fighter.map((fighter, index) =>(
                        <option key={fighter.fighterName} value={index}>
                            {fighter.fighterName}
                        </option>
                    ))}
                        </select>
                        </div>
                        </div>)}
                        