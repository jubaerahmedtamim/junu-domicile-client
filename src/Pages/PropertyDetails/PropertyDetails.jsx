import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null)
    console.log(property);
    useEffect(()=> {
        fetch('/public/properties.json')
        .then(res => res.json())
        .then(data => {
            const found = data.find(item => id === item.propertyId)
            setProperty(found)
        })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Property Details</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Property Details'} subHeading={"View details of the property"}></SectionTitle>
            </div>
            <div>
                {property?.propertyId}
            </div>
        </div>
    );
};

export default PropertyDetails;