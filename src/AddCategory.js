import React, { useState } from 'react'

export const AddCategory = ( { setCategorias } ) => {

    const [inputValue, setinputValue] = useState('')

    const handleinputvalue = (e) => {

       setinputValue(e.target.value);

    }

    const handleSubmit = (e) => {

       e.preventDefault(); // prevengo el comportamieto del form por defecto

       if( inputValue.trim().length > 2){
           
                  setCategorias( cats => [inputValue,...cats] );
                  setinputValue('');
                }
    }

    return (


        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value = { inputValue }
            onChange = { handleinputvalue }
        />
      </form>


    )
}
