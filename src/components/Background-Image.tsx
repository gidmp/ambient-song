import React from "react";

interface ImgProps{
    image: any;
}

const Background:React.FC<ImgProps> = props =>{
    return(
        <div className = "background-img" style = {{backgroundImage: `url(${props.image})`}}>
            {props.children}
        </div>
    )
}

export default Background