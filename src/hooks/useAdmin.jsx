import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin?email=${user?.email}`)
            return res.data.admin;
        }
    })
    return [ isAdmin, isAdminLoading];
};

export default useAdmin;