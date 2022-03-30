import axios from "axios";

const url = `http://gateway.marvel.com/v1/public/characters?name=`;
const key = `&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${md5Digest}`;

[post, setPost]

function findByName(findByName) {
        const request = url + `${findbyName}` + key;
        axios.get(request)
         .then(response =>{
             return response.data;
         })
         .catch(err => {
             console.log(err);
         })

}


export default findByName();