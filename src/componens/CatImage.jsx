import React, { useState,  useEffect } from "react"
import axios from "axios"
import styles from "./CatImage.module.css"


function CatImage() {
  
        const [catImg, setCatImg] = useState(null)
        const [loading, setLoading] = useState(true)
    
    async function fetchImg(){
      try{
        const response = await axios.get("https://api.thecatapi.com/v1/images/search");
        setCatImg(response.data[0].url);
        setLoading(false)
      }
      catch(error)
       {console.error("Error", error)
       setLoading(false)
      }
    };
    
    
        useEffect(() => {
           fetchImg()
        }, [])
    
        if (loading) {
          return <div>Loading...</div>;
        }


    return (
    <div className={styles.img_box}  >
            <img  src={catImg}alt="" />
            <button onClick={fetchImg}>Load New Image</button>
        </div>
    )
}

export default CatImage