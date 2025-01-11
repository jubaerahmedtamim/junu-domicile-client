import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleSocialLogin = async() => {
        const res = await googleSignIn();
        console.log(res.user);
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