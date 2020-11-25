import React from 'react'
import { useFetchGif } from './hooks/useFetchGif'

//import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categoria } ) => {


const {data:imagenes, loading} = useFetchGif( categoria );


    return (

        <>

        <h3> { categoria } </h3>

         {loading && <p>loading</p>}
        
       {  <div className="card-grid">
           {
              imagenes.map( img => (

              <GifGridItem  
                  key = { img.id }
                  { ...img } 
              />
              ))
                              
           }
            
        </div> }

        </>
    )
}
