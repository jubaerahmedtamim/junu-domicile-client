import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageProperties = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: properties =[] } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/properties?email=${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <Helmet>
                <title>Manage Properties</title>
            </Helmet>
            <SectionTitle heading={'manage property'} subHeading={'Manage your property'}></SectionTitle>
            <div>
                {properties.length}
            </div>
        </div>
    );
};

export default ManageProperties;