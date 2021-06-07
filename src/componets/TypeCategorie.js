import React, { useState } from "react";
import PropTypes from "prop-types";


const TypeCategorie= ({setCat})=>{

    const [text, setText]= useState("");

    const handleInputChange= (e)=>{
        setText(e.target.value);

    }

    const formSubmit=(e)=>{
        e.preventDefault();

        if(text.trim().length>2){
            setCat(categorias=>[text, ...categorias]);
            setText('');
        }

        
        
    }

   return( <form onSubmit={formSubmit}>
       
        <input type="text"
        value={text}
        onChange={handleInputChange}
        />
    </form>
   )

};

TypeCategorie.propTypes={
    setCat: PropTypes.func.isRequired
}


export default TypeCategorie;


