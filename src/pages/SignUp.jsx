import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import pic from "../assets/icons/Form.png";
import arrow from "../assets/icons/Arrow.svg"
import rightarrow from "../assets/icons/RightArrow.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/slices/authSlice";
import { CreateBusiness } from "../redux/slices/businessSlice";
const SignUp = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
       // Separate states for name, email, and password
    const handleButtonClick = () => {

    };
      const [businessType, setBusinessType] = useState("");

      const handleBusinessTypeChange = (e) => {
        setBusinessType(e.target.value);
      };

    const [description,setDescription]=useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [companysize, setCompanysize] = useState("");

  // Event handler for company size change
  const handleCompanysizeChange = (e) => {
    setCompanysize(e.target.value);
  };
  // Event handlers for input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  const handleCompanyChange = (e) => {
      setCompany(e.target.value);
    };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Form submission handler

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };
  //handler signup
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here using name, email, and password
    dispatch(signup({ name, email, password , role : "owner" }));
  };

  const user = useSelector((state)=>state.auth.user)
  const token = localStorage.getItem("token")
  const handleBusiness = () =>{
    if(company == "" || description == "" || businessType == "" || companysize == "") console.log("zbi")
    dispatch(CreateBusiness({name:company,description,industry : businessType,CompanySize : companysize , owner : user._id}))
  }
  useEffect(()=>{
    if(user){
      handleBusiness()
    }
  },[user])
  return (
    <div className="flex justify-between items-center">
      <div className="text-lg bg-sombre w-full h-screen">
        <Navbar />
        <div className="flex w-[60%]   mx-20 my-20">
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="w-full relative flex items-center flex-col justify-center h-screen">
        <img
          src={arrow}
          alt=""
          className="w-[30px] absolute right-[100px] top-16"
        />
        <div className="mb-5 bg-red-10 text-[#333333] text-3xl font-semibold  w-[60%]">
          {currentStep === 1 && "Unlock Collaborative Success"}
          {currentStep === 2 && "Step 2: "}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2  w-[60%]">
          <img src={rightarrow} className=" w-5 " alt="" />
          {currentStep === 1 && (
            <>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                required
                className="border p-2 rounded-md bg-input  "
                placeholder="enter your company name"
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="border p-2 rounded-lg bg-input"
                placeholder="your business description"
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="enter your password"
                required
                className="border p-2 rounded-lg bg-input"
              />
              <button
                type="button"
                onClick={handleNextClick}
                className="bg-primaryGreen rounded-xl text-white p-2"
              >
                Next
              </button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <label>Company name</label>
              <input
                type="email"
                value={company}
                onChange={handleCompanyChange}
                required
                className="border p-2 rounded-lg bg-input"
                placeholder="Your business description"
              />
              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                required
                placeholder="Enter your description"
                className="border p-2 rounded-lg bg-input"
              />
              <label>Company size</label>
              <input
                type="number"
                value={companysize}
                onChange={handleCompanysizeChange}
                required
                min="0" // Add this line to restrict input to positive numbers
                className="border p-2 rounded-lg bg-input"
              />
              <label>Type of business</label>
              <select
                value={businessType}
                onChange={handleBusinessTypeChange}
                required
                className="border p-2 rounded-lg bg-input"
              >
                <option value="">Select Type</option>
                <option value="retail">Retail</option>
                <option value="technology">Technology</option>
                <option value="hospitality">Hospitality</option>
                {/* Add more options as needed */}
              </select>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-primaryGreen rounded-xl text-white p-2"
              >
                signup
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
