import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGif = ( categoria ) => {

   const [state, setstate] = useState({

    data: [],
    loading : true

   });




useEffect( () => {

getGifs(categoria)
        .then(  imgs => {

            setstate({
                data: imgs,
                loading : false
            });

        })

}, [categoria]);




/* 
   setTimeout(() => {

    setstate({

data : [1,2,3,4,5,6,7,8,9],
loading : false

    })
       
   }, 3000); */

  return state;
    
}
