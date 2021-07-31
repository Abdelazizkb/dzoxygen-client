import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';






function AddPost({ isAuthenticated, addPost }) {

    const [formData, setFormData] = useState({
        city: 'أدرار',
        size: '5',
        description: 'لايوجد'
    });
    const [errors, setErrors] = useState({})

    const { city, phone, size, price, description } = formData;

    const onChange = e => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

    const handleValidation = () => {
        let fields = formData;
        let errors = {};
        let formIsValid = true;


        //phone
        if (!fields["price"]) {
            formIsValid = false;
            errors["price"] = "أدخل  السعر";
        }

        if (typeof fields["price"] !== "undefined") {

            if (!fields["price"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["price"] = "أدخل رقم صحيح";
            }
        }
        //price
        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "أدخل  رقم الهاتف";
        }

        if (typeof fields["phone"] !== "undefined") {

            if (!fields["phone"].match(/^[0-9]{9,10}/g)) {
                formIsValid = false;
                errors["phone"] = "يرجى منكم إدخال  رقم الهاتف بشكل صحيح";
            }
        }

        setErrors(errors);
        return formIsValid;

    }

    const onSubmit = e => {
        e.preventDefault();
        if (handleValidation()) {
            addPost(city, phone, size, price, description);
            document.getElementById("price").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("description").value = "";
        }

    };


    if (!isAuthenticated)
        return <Redirect to="/login" />

    return (
        <form className="bg-main text-right py-32 md:px-16 ">

            <div className="w-4/6 mx-auto bg-white pr-10 shadow-md">
                <h1 className="text-center font-bold text-3xl py-2">إضافة الإعلان</h1>
                <div>
                    {/*first ligne */}
                    <div className="md:flex ">
                        <div className="md:w-3/6 my-3">
                            <label className="font-semibold" for="size" > : السعة</label><br />
                            <select name="size" className="w-5/6 h-12 border border-gray-500 text-right" onChange={e => { onChange(e) }} >
                                <option value="7">5 L </option>
                                <option value="7">7 L </option>
                                <option value="7">10 L </option>
                                <option value="15">15 L</option>
                                <option value="20">20 L </option>
                            </select>
                        </div>
                        <div className="md:w-3/6 my-3">
                            <label className="font-semibold" for="price" >   : السعر</label><br />
                            <input id="price" className="w-5/6 h-12 border border-gray-500 text-right" name="price" placeholder="سعر القارورة " type="text" required onChange={e => onChange(e)} />
                            <div style={{ color: "red" }}>{errors["price"]}</div>
                        </div>
                    </div>
                    {/*second ligne */}
                    <div className="md:flex ">
                        <div className="md:w-3/6 my-3">
                            <label className="font-semibold" for="wilaya" > : الولاية</label><br />
                            <select name="city" required className="w-5/6 h-12 border border-gray-500 text-right" value="أدرار" onChange={e => onChange(e)} >
                                <option value="أدرار">    أدرار </option>
                                <option value="الشلف">    الشلف </option>
                                <option value="الأغواط">    الأغواط </option>
                                <option value="أم البواقي   ">    أم البواقي     </option>
                                <option value="باتنة">    باتنة </option>
                                <option value="بجاية">    بجاية </option>
                                <option value="بسكرة">    بسكرة </option>
                                <option value="بشار">    بشار </option>
                                <option value="البليدة">    البليدة </option>
                                <option value="البويرة">    البويرة </option>
                                <option value="تمنراست">    تمنراست </option>
                                <option value="تلمسان">    تلمسان </option>
                                <option value="تيارت">    تيارت </option>
                                <option value="تيزي وزو">    تيزي وزو    </option>
                                <option value="الجزائر">    الجزائر </option>
                                <option value="الجلفة">    الجلفة </option>
                                <option value="جيجل">    جيجل </option>
                                <option value="سطيف">    سطيف </option>
                                <option value="سعيدة">    سعيدة </option>
                                <option value="سكيكدة">   سكيكدة     </option>
                                <option value="سيدي بلعباس  ">    سيدي بلعباس    </option>
                                <option value="عنابة">    عنابة </option>
                                <option value="قالمة">    قالمة  </option>
                                <option value="قسنطينة">    قسنطينة </option>
                                <option value="المدية   ">    المدية     </option>
                                <option value="مستغانم">    مستغانم </option>
                                <option value="المسيلة  ">    المسيلة    </option>
                                <option value="معسكر">   معسكر   </option>
                                <option value="وهران    ">    وهران  </option>
                                <option value="البيض">    البيض </option>
                                <option value="اليزي">    اليزي  </option>
                                <option value="برج بوعريريج ">    برج بوعريريج       </option>
                                <option value="بومرداس">    بومرداس </option>
                                <option value="الطارف   ">    الطارف     </option>
                                <option value="تندوف    ">    تندوف  </option>
                                <option value="تسمسيلت  ">    تسمسيلت    </option>
                                <option value="الوادي">   الوادي     </option>
                                <option value="خنشلة    ">    خنشلة  </option>
                                <option value="سوق أهراس    ">    سوق أهراس  </option>
                                <option value="تيبازة">    تيبازة    </option>
                                <option value="ميلة">    ميلة </option>
                                <option value="عين الدفلى       ">    عين الدفلى         </option>
                                <option value="النعامة  ">    النعامة    </option>
                                <option value="عين تموشنت       ">    عين تموشنت         </option>
                                <option value="غرداية">   غرداية     </option>
                                <option value="غليزان   ">    غليزان     </option>
                                <option value="المغير   ">    المغير     </option>
                                <option value="المنيعة">    المنيعة  </option>
                                <option value="أولاد جلال   ">    أولاد جلال     </option>
                                <option value="برج باجي مختار           ">    برج باجي مختار             </option>
                                <option value="بني عباس     ">    بني عباس       </option>
                                <option value="تيميمون      ">    تيميمون        </option>
                                <option value="تقرت ">   تقرت        </option>
                                <option value="جانت ">    جانت   </option>
                                <option value="عين صالح     ">    عين صالح       </option>
                                <option value="عين قزّام    ">    عين قزّام      </option>
                            </select>
                        </div>
                        <div className="md:w-3/6 my-3">
                            <label className="font-semibold" for="phone" > : رقم الهاتف</label><br />
                            <input id="phone" className="w-5/6 h-12 border border-gray-500 text-right" name="phone" placeholder="xx xx xx xx xx/xxx xxx xxx" type="text" required onChange={e => onChange(e)} />
                            <div style={{ color: "red" }}>{errors["phone"]}</div>
                        </div>
                        {
                    /*<div className="md:w-3/6 my-3">
                        <label className="font-semibold" for="daira" >   : الدائرة</label><br/>
                        <input required className="w-5/6 h-12 border border-gray-500 text-right"  name="daira" placeholder="الدائرة " type="text"  />
                    </div>*/}
                    </div>
                    {/*fourth ligne
                <div className="md:flex ">
                    <div className="md:w-3/6 my-3">
                    </div>
                    <div className="md:w-3/6 my-3">
                        <label className="font-semibold" for="size" > : امكانية التوصيل</label><br/>
                        <label className="font-semibold" for="size" >  نعم</label>
                        <input required className=" " name="delivery"   type="radio"  /> <br/>
                        <label className="font-semibold" for="size" >  لا</label>
                        <input required className=" " name="nodelivery"   type="radio"  />
                    </div>
                </div>
                */}
                    {/*fifth ligne */}

                    <div className=" ">
                        <div className=" my-3 ">
                            <label className="font-semibold" for="size" > : بعض التفاصيل (إختياري)</label><br />
                            <textarea id="description" placeholder="بامكانك اضافة ملاحظة" className=" w-5/6 h-28 border border-gray-500 text-right" name="description" type="text" onChange={e => onChange(e)} /> <br />
                        </div>
                    </div>
                </div>
                <div className="text-center  " onClick={e => onSubmit(e)}>
                    <input id="btn" title="يرجى ملئ كل الخانات الإجبارية" className=" mb-4  bg-primary border-primary hover:opacity-75 text-white w-24 h-8 font-medium border-1"
                        type="submit" value="أضف الإعلان" />
                </div>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPost })(AddPost);