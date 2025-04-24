import { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
  }

  console.log(name);

  return (
    <form className="min-h-[80vh] flex   " action="">
      <div className="flex flex-col gap-4 shadow-xl mx-auto h-fit mt-10  border border-gray-200 p-8 min-w-[340px] text-sm rounded-lg">
        <div>
          <p className="text-2xl font-semibold">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p className="text-sm">
            Please {state === "Sign Up" ? "Sign Up" : "Login"} to book
            appointment
          </p>
        </div>
        {state === "Sign Up" ? (
          <div className="flex flex-col">
            <label htmlFor="">Full Name</label>

            <input
              className="outline-none border border-gray-200 rounded-lg px-2 py-1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter you name"
            />
          </div>
        ) : null}

        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            className="outline-none border border-gray-200 rounded-lg px-2 py-1"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter you name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            className="outline-none border border-gray-200 rounded-lg px-2 py-1"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter you name"
          />
        </div>
        <button className="bg-primary text-white w-full  py-2 cursor-pointer rounded-lg">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary font-medium cursor-pointer underline"
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            Create a new account?
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary font-medium cursor-pointer underline"
            >
              Sign up
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
