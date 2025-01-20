import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProperties = () => {
    const axiosSecure = useAxiosSecure();

    const {data:properties=[]} = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await axiosSecure('/properties');
            return res.data;
        }
    })
    return [properties];
};

export default useProperties;