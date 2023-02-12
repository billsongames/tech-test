import axios from "axios";

const getImages = (query) => {
  if(!query) {
    return Promise.resolve([])
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = (response.data.collection.items)

        const results=[]

        for (let i=0; i<imageResults.length; i++) {
          if (imageResults[i].data[0].media_type === "image") {
            let thumbnailUrl=(imageResults[i].links[0].href)
            let title=(imageResults[i].data[0].title)
            let description=(imageResults[i].data[0].title)
            
// URL FOR FULLSCREEN IMAGE            
//            let fullscreenUrl = ((thumbnailUrl.split("~")[0])+"~orig.jpg")            
          
            let imageObject = {
              thumbnail: thumbnailUrl,
              original: thumbnailUrl,
              originalTitle: title,
              originalHeight: 600,
              description: description,
            }

            results.push(imageObject)
          }
        }
        return(results)
      })  
      .catch((err) => {
        console.log(err)
      })
  }
}  

export default getImages;
