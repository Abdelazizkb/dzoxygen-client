import React ,{useState,useEffect}from 'react';
import Cities from './Cities';
import { connect } from 'react-redux';
import { filterPost } from '../actions/post';





function Filter({setFilter,filterPost}) {
    const [formData, setFormData] = useState({
        city: '',
        size:'',
    });

    const { city,size } = formData;

    const onChange = e => {setFormData({ ...formData, [e.target.name]: e.target.value })}


    useEffect(() => {
        filterPost(city,size)
    }, [formData])



    return (
               <div className="text-center">
                  <h1 className="text-3xl font-bold my-4"> : ترتيب حسب </h1>  

                   <div>
                       <h2 className="text-xl font-medium mt-4" >الولاية</h2> 
                       <select className="p-2 bg-white rounded-sm" name="city"  onChange={e=>{onChange(e)}}>
                         <Cities />
                       </select>
                   </div>

                   <div>
                       <h2 className="text-xl font-medium mt-4"  >الحجم</h2> 
                       <select className="p-2 bg-white rounded-sm" name="size"   onChange={e=>{onChange(e)}}>
                           <option value="">لا يهم </option>
                           <option value="7">5 L </option>
                           <option value="7">7 L </option>
                           <option value="7">10 L </option>
                           <option value="15">15 L</option>
                           <option value="20">20 L </option>
                       </select>  
                   </div>
       
                  {/*<h2 className="text-xl font-medium mt-4" >امكانية التوصيل </h2> 
                  <input type="radio"name="livraison" value="livraison" checked={false}/>
                  <label for="livraison">نعم</label>                   <br/> 

                  <input type="radio"name="livraison" value="livraison" checked={false}/> 
                  <label for="livraison">لا يهم</label>

                  
                  <h2 className=" text-xl font-medium mt-4">السعر </h2> 
                  <div dir="rtl" lang='ar' className="mt-2">
                      <label  for="livraison">أدنى سعر</label> 
                      <input className="w-5/6 border-2 rounded-lg px-3 border-gray-300 bg-gray-100 " type="number"  name="max" value={0} max={1000} /> 
                  </div>
                  <div dir="rtl" lang='ar'  className="my-2">
                     <label className="my-1" for="livraison">أعلى سعر</label> 
                     <input className="w-5/6 border-2 rounded-lg px-3 border-gray-300 bg-gray-100  bg-opacity-80" type="number" name="min" value={0} max={1000} /> 
                  </div>
                 */} 


                </div>
    );
}


export default connect(null,{filterPost}) (Filter);