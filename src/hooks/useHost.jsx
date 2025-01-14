import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useHost = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isHost, isLoading: isHostLoading } = useQuery({
        queryKey: ['isHost', user?.email],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/host?email=${user?.email}`)
            return res.data.host;
        }
    })
    return [isHost, isHostLoading]
};

export default useHost;