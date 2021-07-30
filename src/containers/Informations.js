import React from 'react';

const fournisseur=[
  {
    name:"auress gaz",
      wilaya:"Boumered Oueld moussa",
      numero:"0663879126 / 024932620",
      adress:"zone industriel",
      plus:""
  },
  {
    name:"Linde Gas Algerie",
    wilaya:"Constantine",
    numero:"+213 31 668157 ",
    adress:"zone industriel",
    plus:""
},
{
    name:"Linde Gas Algerie",
    wilaya:"alger",
    numero:"024885467",
    adress:"Réghaïa",
    plus:""
},
{
    name:"Linde Gas Algerie",
    wilaya:"ouargla",
    numero:" 029 71 38 45",
    adress:"zone industriel",
    plus:""
},
{
    name:"leader gaz",
    wilaya:"djelfa",
    numero:"0668076047 / 0668076042",
    adress:"zone industriel",
    plus:""
},
{
    name:"Linde Gas Algerie",
    wilaya:"oran",
    numero:"041341002",
    adress:"oran",
    plus:""
},

]

function Informations(props) {
    return (
        <div className= "bg-main text-center  w-full flex flex-col   min-h-screen	pt-3/6"> 
        <h1 className="text-3xl font-semibold my-5">  ☎️ أرقام موزعين الأكسجين في الجزائر ☎️ </h1>
             <div className="flex justify-center md:justify-between flex-wrap container">
                  {
                    fournisseur.map((e,i)=>{
                      return <div className="flex flex-col bg-white shadow-sm items-end justify-center w-80 p-4 rounded-md my-2">
                          <span className="flex" dir="rtl" lang='ar'><p className="ml-3" dir="rtl" lang='ar'>المؤسسة:</p>{e.name}</span>  
                          <span className="flex" dir="rtl" lang='ar'><p className="ml-3" dir="rtl" lang='ar'>الولاية:</p>{e.wilaya}</span>  
                          <span className="flex" dir="rtl" lang='ar'><p className="ml-3" dir="rtl" lang='ar'>العنوان:</p>{e.adress}</span>  
                          <span className="flex" dir="rtl" lang='ar'><p className="ml-3" dir="rtl" lang='ar'>الهاتف:</p>{e.numero}</span>  
                          <a className="text-blue-700" dir="rtl" lang='ar'href={e.plus}>المزيد</a>  
                       </div>    
                    }) 
                  }
             </div>

        </div>
    );
}

export default Informations;