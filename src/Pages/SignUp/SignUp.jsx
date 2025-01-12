import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import ImageUploader from "../../Utilities/ImageUpload/ImageUploader";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";




const SignUp = () => {
    const { updateUserProfile, signUp } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {

        // const imageFile = {
        //     image: data.photo[0]
        // }
        // const res = await ImageUploader(imageFile);

        // if (res.success) {
        // }


        const { name, email, password } = data;
        // const photoUrl = res?.data?.display_url;
        const photoUrl = 'Currently on available'
        console.log(name, email, password)

        const userInfo = {
            name,
            email
        }

        const signInRes = await signUp(email, password);
        if (signInRes) {
            const updateRes = await updateUserProfile(name, photoUrl);
            const res = await axiosPublic.post('/users', userInfo);
            
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your sign up has been successfully done.",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/');
            }

        }

    }
    return (
        <div>
            <Helmet>
                <title>Sign up </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center  lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="flex justify-center mt-10">
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className="divider w-3/4 mx-auto"></div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input {...register('name', { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-xs text-red-600">This field is required.</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })}
                                    aria-invalid={errors.email ? "true" : "false"} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <span className="text-xs text-red-600">Name field is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <span className="text-xs text-red-600">Password field is required</span>
                                )}
                                {
                                    //TODO: valid your password and below comfirm password field.
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Picture</span>
                                </label>
                                <input {...register('photo')} type="file" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <div className="flex justify-center items-center mb-5">
                            <p>Already have an account? <Link to={'/login'} className="text-blue-600">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;