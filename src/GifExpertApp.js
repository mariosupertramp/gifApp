import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

 const [categorias, setCategorias] = useState(['juguetes'])


    return (
        <>

        <h2>Gif Expert App</h2>

        < AddCategory setCategorias = { setCategorias } />

        <hr />


 <ol>

{

categorias.map( categoria => (

     <GifGrid 
       key = {categoria}
       categoria = {categoria} 
    /> 
    //return <li key={categoria}>{categoria}</li>

))

}

</ol>



        </>
    )
}
