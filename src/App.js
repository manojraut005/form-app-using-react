import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    toast.success("Successfully Saved...!")
    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center bg-black justify-center  ">
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
/>

    <div className=" bg-[#555555] w-full h-[100px] mb-2 flex flex-col justify-center items-center ">
      <h1 className="text-white font-bold text-3xl  ">Form App</h1>
      <p className="text-teal-200 opacity-80 pl-24">It will print data object in console</p>
    </div>
   <form className="w-[800px]" onSubmit={submitHandler}>

    <label className="text-[#eaeae7] pl-1 text-xs  " htmlFor="firstName">First name</label>
    <br/>
    <input
       required
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Manoj"
      value={formData.firstName}
      onChange={changeHandler}
      className=" w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 mb-2  "
    />

    <br/>
    <label  className="text-[#eaeae7] pl-1 text-xs" htmlFor="lastName">Last name</label>
    <br/>
    <input
     required
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Raut"
      value={formData.lastName}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 "
    />

    <br/>
    <label  className="text-[#eaeae7] pl-1 text-xs " htmlFor="email">Email Address</label>
    <br/>
    <input
     required
      type="email"
      name="email"
      id="email"
      placeholder="manoj@raut.com"
      value={formData.email}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 "
    />

    <br/>

    <div className="flex justify-between gap-5 ">
    <div className="w-full"> 
    <label  className="text-[#eaeae7] pl-1 text-xs " htmlFor="country">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500  "
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>

   

    </div>
    <div className="w-full">
    <label  className="text-[#eaeae7] pl-1 text-xs " htmlFor="state">State / Province</label>
    <br/>
    <input
     required
      type="text"
      name="state"
      id="state"
      placeholder="Maharashtra"
      value={formData.state}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 "
    />

    <br/>
    </div>
   
    </div>

    
    <label  className="text-[#eaeae7] pl-1 text-xs" htmlFor="streetAddress">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="Golden road..."
      value={formData.streetAddress}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 "
    />

    <br/>

    <div className="flex justify-between gap-5 ">
      <div className="w-full">
      <label  className="text-[#eaeae7] pl-1 text-xs " htmlFor="city">City</label>
    <br/>
    <input
     required
      type="text"
      name="city"
      id="city"
      placeholder="Mumbai...."
      value={formData.city}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 "
    />

  <br/>
      </div>

      <div className="w-full">
      <label  className="text-[#eaeae7] pl-1 text-xs " htmlFor="postalCode">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="000000"
      value={formData.postalCode}
      onChange={changeHandler}
      className="w-full bg-[#555555] rounded-[0.5rem] p-[10px] text-white border-b-2 border-teal-500 "
    />

    <br/>
      </div>
    </div>
   
   
   
    <br/>
    <fieldset>
      <legend  className="text-white mb-2 font-bold ">By Email</legend>

      <div className="flex gap-3  ">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
      />
      <label  className="text-white " htmlFor="comments">Comments</label>
     
      </div>
      <div>
        <p  className="text-[#999997] ml-6">Get notified when someones posts a comment on a posting.</p>
      </div>

      <div className="flex gap-3 mt-2">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
        <label  className="text-white " htmlFor="candidates">Candidates</label>
      
      </div>
      <div>
      
        <p  className="text-[#999997] ml-6 ">Get notified when a candidate applies for a job.</p>
      </div>

      <div className="flex gap-3 mt-2">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <label  className="text-white " htmlFor="offers">Offers</label>
     
      </div>
      <div>
        
        <p  className="text-[#999997] ml-6 ">Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      


    </fieldset>

    <br/>
    <br/>
    <fieldset>
      <legend  className="text-white  font-bold ">Push Notifications</legend>
      <p  className="text-[#999997] mb-3">These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
        className="mb-3"
      />

      <label  className="text-white pl-2 " htmlFor="pushEverything">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
        className="mb-3"
      />

      <label  className="text-white pl-2 " htmlFor="pushEmail">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
        className="mb-3"
      />

      <label  className="text-white pl-2" htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4 mt-5"
   >Save</button>






   </form>

   </div>
  );
}

export default App;
