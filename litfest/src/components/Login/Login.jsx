import React, {useState} from "react";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email);
    console.log(password);
    
    
  }
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black">

     
      <img
        src="/cave.gif"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      
      <div className="relative inset-0 z-10 flex items-center justify-center min-h-[100dvh] ">

       
        <div className="relative w-[70%] max-w-[900px]">

          {/* Book */}
          <img
            src="/book-open.svg"
            alt="Book open"
            className="w-full h-auto"
          />

        
          <div
            className="
              absolute
              top-[18%]
              left-[14%]
              w-[35%]
              font-Great Vibes
              text-[#2a1a0a]
            "
          >
            <h2 className="text-3xl italic mb-8 text-center ">
              Login Form
            </h2>

            <form onSubmit={handleSubmit} className="max-w-[250px] mx-auto flex flex-col">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-Great Vibes px-2 py-1 rounded-md focus:outline-none"
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-Great Vibes mb-3 px-2 py-1 rounded-md focus:outline-none"
              />

              <a
                href="#"
                className=" cursor:pointer text-sm italic underline text-right"
              >
                Forgot Password?
              </a>

              <button
                className=" bg-[#5A2D0C] rounded-full text-[#F5E6C8] px-6 py-2 mt-5 cursor-pointer"
              >
                Login
              </button>

              <p className="text-sm italic mt-2 text-center">
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="underline font-semibold"
                >
                  Register
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
