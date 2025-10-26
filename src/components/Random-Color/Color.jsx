import { useState } from "react";

function color(){
    const[typeOfColor, setTypeOfcolor]=useState("hex");
    const[color, setColor]=useState("#000000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function handleCreateRandomHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor="#";
        for(let i=0; i<6;i++){
            hexColor=hexColor+hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor(){
        const r= randomColorUtility(256);
        const g= randomColorUtility(256);
        const b= randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    return(
        <>
        <div style={{background: color}} className="container">
            <button onClick={()=>setTypeOfcolor('hex')}>Generate Random HEX color</button>
            <button onClick={()=>setTypeOfcolor('rgb')}>Generate Random RGB color</button>
            <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor : handleCreateRandomRgbColor}>Genrate Random color</button>
            <div>
                <h1>{typeOfColor==="rgb"? "RGB color" : "Hex Color"}</h1>
                <h1>{color}</h1>
            </div>
        </div>
        </>
    );

}
export default color;