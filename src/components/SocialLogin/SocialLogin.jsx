import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSocialLogin = async () => {
        const googleRes = await googleSignIn();
        console.log(googleRes.user);
        if (googleRes.user) {
            const userInfo = {
                name: googleRes?.user?.displayName,
                email: googleRes?.user?.email,
            }
            const res = await axiosPublic.post('/users', userInfo);
            console.log(res.data)
            if (res.data.insertedId === null) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your login has been successfully done.",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/');
            }
        }
    }
    return (
        <div>
            <button onClick={handleSocialLogin} className="btn btn-outline btn-sm flex items-center gap-2">
                <FcGoogle className="text-xl" />
                login in with google
            </button>
        </div>
    );
};

export default SocialLogin;