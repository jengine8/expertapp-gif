import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';



export const GifGrid=  ({category})=>{

    const [images, setImages]= useState([]);

    useEffect(()=>{

        getGif();

    },[category]);


        const getGif= async ()=>{
            const url=`https://api.giphy.com/v1/gifs/search?api_key=opwyhBxH4Stpdy089502Au9jKo4AnkMN&q=${encodeURI(category)}&limit=10`;
            const resp=await fetch(url);
            const {data}=  await resp.json();

            const gifts= data.map(img =>{
                return{
                    id: img.id,
                    title:img.title,
                    url:img.images?.downsized_medium.url
                }
            })

          setImages(gifts);

        

        }

        
    

    return(
        <div>
            <h3>{category}</h3>
            <ol className="contenedor">
                {
                    images.map((img)=>{
                         return  <GifGridItem
                         key={img.id}
                          {...img}/> 
                    })
                }
            </ol>
        </div>
    )

}



