export const getGifs = async( categoria ) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vz990CvPmgsJZd3M1s7wRW4yv2Q2dJqJ&q=${ encodeURI(categoria) }&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
    
    return {
         id : img.id,
         title : img.title,
         url : img.images.downsized_medium.url 
    }
    })
    
  return gifs;
    
    }
    