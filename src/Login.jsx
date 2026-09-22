import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const navigate = useNavigate();
    let islogin = false;

    const localdata = JSON.parse(localStorage.getItem("userData"));
    const handleClick = (e)=>{
        e.preventDefault();
        if(email == localdata.email){
            if(pwd==localdata.password){
                islogin = true;
                navigate("/home");
            }else{
                // document.querySelector("pwd").innerHTML = "Wrong Password";
                // Toolkit 
            }
        }else{
            navigate("/register");
        }
    }

    useEffect(()=>{
        if(islogin == true){
            localStorage.setItem("login",JSON.stringify({islogin : true}));
        }
    },[islogin]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6"> <div className="card shadow">
                    <div className="card-body p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        <form>
                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>{setPwd(e.target.value)}} />
                                <div className="pwd"></div>
                            </div>
                            {/* Button */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" onClick={handleClick}> Login </button>
                            </div>
                            <div>
                                <p>You don't have an Account ? <a href="register">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;