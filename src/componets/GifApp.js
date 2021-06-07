import React from "react";
import { useState } from "react";
import { GifGrid } from "./GifGrid";
import TypeCategorie from "./TypeCategorie";


const GifApp= () =>{

    const [categories, setCategories]= useState(['Pokemon']);

   

    return(
        <div>
            <TypeCategorie setCat={setCategories}/>
            <h2>Giff-Expert</h2>
            <hr/>

            <ol>
                   {
                       categories.map(cat =>{

                            return  <GifGrid 
                            key={cat}
                            category={cat}/> 

                       })
                   }
            </ol>
        </div>
    );
}


export default GifApp;