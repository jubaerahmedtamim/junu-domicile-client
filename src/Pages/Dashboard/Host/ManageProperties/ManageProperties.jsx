import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageProperties = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: properties = [] } = useQuery({
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
            <div className=" w-full md:max-w-4xl mx-auto">
                <h2 className="text-xl">Your property: {properties.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Property Id</th>
                                <th>Type</th>
                                <th>Monthly rent</th>
                                <th>Availability</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                properties.map((property, index) => <tr key={property._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{property.propertyId}</td>
                                    <td>{property.type}</td>
                                    <td>{property.monthlyRent}</td>
                                    <td>{property.isAvailable ? "Available" : "Booked"}</td>
                                    <td></td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProperties;