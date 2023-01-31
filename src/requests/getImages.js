import axios from "axios";

const getImages = (query) => {
  if(!query) {
    return Promise.resolve([])
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = (response.data.collection.items)
        let images=[]
        
        for (let i=0; i<imageResults.length; i++) {
          if (imageResults[i].data[0].media_type === "image") {
//            parsedImages.push(imageResults[i].data[0])
            images.push(imageResults[i].links[0])
          } 
        }
        console.log(images)
      })
      .catch((err) => {
        console.log(err)
      })
    }  
  }

  export default getImages;
