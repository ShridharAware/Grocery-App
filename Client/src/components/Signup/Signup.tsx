import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Signup: React.FC = () => {
  const success = () => toast.success("User registered successfuly.");
  const failure = () => toast.error("User registeration failed..");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onFormChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const url = "/api/v1/auth/register";
      const response = await axios.post(url, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // User registered successfully
        success();
      } else {
        // User registration failed
        failure();
      }

      // Reset the form data
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      failure();
    }
  };

  return (
    <>
      <section className="">
        {/* { Jumbotron } */}
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      {/* { 2 column grid layout with text inputs for the first and last names } */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                          Full name
                        </label>
                        <input
                          type="name"
                          name="name"
                          value={formData.name}
                          className="form-control"
                          onChange={onFormChange}
                        />
                      </div>

                      {/* { Email input } */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          className="form-control"
                          onChange={onFormChange}
                        />
                      </div>

                      {/* { Password input } */}
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          className="form-control"
                          onChange={onFormChange}
                        />
                      </div>

                      {/* { Submit button } */}
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </button>
                      <Toaster />
                      <Link
                        className="text-decoration-none "
                        style={{ marginLeft: "20px" }}
                        to="/login"
                      >
                        Go to login
                      </Link>
                      {/* { Register buttons } */}
                      <div className="text-center">
                        <p>or sign in with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <BsFacebook
                            style={{ height: "2rem", width: "2rem" }}
                          />
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <BsGoogle style={{ height: "2rem", width: "2rem" }} />
                        </button>

                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <BsTwitter
                            style={{ height: "2rem", width: "2rem" }}
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* { Jumbotron } */}
      </section>
    </>
  );
};

export default Signup;
