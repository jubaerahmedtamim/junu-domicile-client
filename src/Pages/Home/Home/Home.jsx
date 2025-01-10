import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;