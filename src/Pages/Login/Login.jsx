import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Login = () => {
    const { singIn } = useAuth();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        singIn(data.email, data.password)
        .then(res => {
            console.log(res.user);
        })
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body relative">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', {required: true})} type="email" placeholder="email" className="input input-bordered"  />
                                {errors.email && <span className="text-xs text-red-600">Email field is required.</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', {required: true})} type={isOpen ? 'text': "password"} placeholder="password" className="input input-bordered"  />
                                {errors.password && <span className="text-xs text-red-600">Password field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider w-3/4 mx-auto mt-0"></div>
                        <div className="flex justify-center">
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className="divider w-3/4 mx-auto"></div>
                        <div className="flex justify-center items-center my-5">
                            <p>New to this site? <Link to={'/signup'} className="text-blue-600">Sign Up</Link> </p>
                        </div>
                        {/* testing true and false */}
                        <div onClick={()=> setIsOpen(!isOpen)} className="flex absolute right-10 top-44 justify-center items-center">
                                {
                                    isOpen ?  <button><FaRegEye /></button> :  <button><FaRegEyeSlash /></button> 
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;