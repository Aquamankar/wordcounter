import React from 'react'
import { useState } from 'react'


const Word = () => {
    const [wordof, setwordof] = useState("0");
   
    const [charvol, setcharvol] = useState("0")
const isLetter =(c)=>{
    return c.toLowerCase() !== c.toUpperCase();

}
const onlyChar=(chon)=>{
   chon=chon.replace(/\s+/g,"");
   let spitt =chon.trim().split('')
   setcharvol(spitt.length);

}
const readThis =(str)=>{
    console.log(str)
    onlyChar(str)

    
    
    let wordcount=0;
    let isword=false;
    let endline=str.length - 1 ;
    if(str    === null || str.length===0)
      return setwordof(0);
    
    
    let ch= str.split('');
    for(let i=0;i<ch.length;i++){
        
        if(isLetter(ch[i]) && i !== endline){
            isword=true;
            
        }
        else if (!isLetter(ch[i]) && isword) {
    
            wordcount++;
            isword = false;
        }
        else if (isLetter(ch[i]) && i === endline)
                wordcount++;
        
    }
    return setwordof(wordcount);

    


}

  return (
    <>
    <section className="mainbox h-screen w-screen flex items-center justify-center bg-blue-300">
     <div className=" flex lg:h-2/4 lg:w-2/4 p-1 lg:p-3  items-center justify-center flex-col ">
            <div ><h1 className='text-slate-900 mb-3 font-bold text-xl'>Word counter</h1></div>
           <div className="textbox lg:p-4">
           <form action="" className='w-auto lg:w-4/4 p-2' >
             <textarea placeholder='write or copy text here' className='color-white rounded p-2 focus:outline-dashed outline-2 outline-offset-2' name="text" id="textval" cols="40" rows="10" onChange={(e)=>{
                readThis(e.target.value)
             }}></textarea>
           </form>
        <div className="resultbox rounded mt-2 bg-pink-300 p-2 flex gap-3 ">
            <div className="flex-1  items-center flex flex-col-reverse   "><div className="valueNam text-slate-600">Words</div><span className="res  text-md ">{wordof}</span></div>
            <div className=" flex-1  items-center flex flex-col-reverse "><div className="valueNam text-slate-600">Charactors</div><span className="anothrtres text-md">{charvol}</span></div>
        </div>
        
    </div>
     </div>
    </section>
   
    </>
  )
}

export default Word