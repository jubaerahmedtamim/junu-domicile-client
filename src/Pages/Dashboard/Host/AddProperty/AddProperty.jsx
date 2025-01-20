import { useState } from 'react';
import handleImagesUpload from '../../../../Utilities/ImageUpload/handleImagesUpload';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../hooks/useAuth';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'WiFi',
    'Kitchen',
    'Water',
    'Electricity',
    'Gas'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}


const AddProperty = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        propertyId: "",
        ownerEmail: `${user?.email}`,
        propertyTitle: "",
        address: {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
        },
        type: "",
        bedrooms: "",
        bathrooms: "",
        monthlyRent: "",
        isAvailable: false,
        utilitiesIncluded: [],
        size: "",
        allowedPeople: "",
        amenities: [],
        description: "",
        imageUrls: [], // For storing image URLs
        availability: {
            availableFrom: "",
            leaseTerm: "",
        },
        rules: {
            petsAllowed: false,
            smokingAllowed: false,
            partyAllowed: false,
        },
        nearbyLocations: [],
        contactInfo: {
            phoneNumber: "",
            email: "",
        },
    });


    const handleMultiChange = (event) => {
        const {
            target: { value },
        } = event;

        setPersonName(typeof value === 'string' ? value.split(',') : value)
        setFormData(
            // On autofill we get a stringified value.
            { ...formData, utilitiesIncluded: value }

        );
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleNestedChange = (e, field) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [field]: {
                ...formData[field],
                [name]: value,
            },
        });
    };

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const urls = await handleImagesUpload(files);
        // console.log(urls);
        setFormData({ ...formData, imageUrls: urls });
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        // Submit the formData to the backend here

        const res = await axiosSecure.post('/properties', formData)
        if(res.data?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your property has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/manageProperties')
        }
    };



    return (
        <div>
            <Helmet>
                <title>Add property</title>
            </Helmet>
            <div>
                <SectionTitle heading={"Add a property"} subHeading={"Create your property"}></SectionTitle>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto p-4 bg-gray-100 shadow-md rounded-md">

                <div className='flex flex-col md:flex  gap-4'>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Property Id *</span>
                        </div>
                        <input
                            type="text"
                            name="propertyId"
                            placeholder="Property ID"
                            value={formData.propertyId}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Property title *</span>
                        </div>
                        <input
                            type="text"
                            name="propertyTitle"
                            placeholder="Property Title"
                            value={formData.propertyTitle}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                </div>

                <h3>Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Street *</span>
                        </div>
                        <input
                            type="text"
                            name="street"
                            placeholder="Street"
                            value={formData.address.street}
                            onChange={(e) => handleNestedChange(e, "address")}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>City *</span>
                        </div>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.address.city}
                            onChange={(e) => handleNestedChange(e, "address")}
                            className="input input-bordered w-full"
                            required

                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>State *</span>
                        </div>
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.address.state}
                            onChange={(e) => handleNestedChange(e, "address")}
                            className="input input-bordered w-full"
                            required

                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Postal Code/ Post code *</span>
                        </div>
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={formData.address.postalCode}
                            onChange={(e) => handleNestedChange(e, "address")}
                            className="input input-bordered w-full"
                            required

                        />
                    </label>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Country *</span>
                        </div>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.address.country}
                            onChange={(e) => handleNestedChange(e, "address")}
                            className="input input-bordered w-full"
                            required

                        />
                    </label>
                </div>
                {/* property info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Property type *</span>
                        </div>
                        <select value={formData.type} name='type' onChange={handleChange} className="select select-bordered" required >
                            <option disabled>Select the type of your property.</option>
                            <option value={'apartment'} >Apartment</option>
                            <option value={'house'}>House</option>
                            <option value={'villa'}>Villa</option>
                            <option value={'room'}>Room</option>
                            <option value={'flat'}>Flat</option>
                        </select>
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Number of Bedrooms *</span>
                        </div>
                        <input
                            type="number"
                            name="bedrooms"
                            placeholder="Number of Bedrooms"
                            value={formData.bedrooms}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Number of Bathrooms *</span>
                        </div>
                        <input
                            type="number"
                            name="bathrooms"
                            placeholder="Number of Bathrooms"
                            value={formData.bathrooms}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Monthly rent amount *</span>
                        </div>
                        <input
                            type="number"
                            name="monthlyRent"
                            placeholder="Monthly Rent"
                            value={formData.monthlyRent}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Property size *</span>
                        </div>
                        <input
                            type="number"
                            name="size"
                            placeholder="Size (sq ft)"
                            value={formData.size}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Allowed People *</span>
                        </div>
                        <input
                            type="number"
                            name="allowedPeople"
                            placeholder="Allowed People"
                            value={formData.allowedPeople}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: 370 }}>
                        <InputLabel id="demo-multiple-chip-label">Utilities</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleMultiChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            required
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <label className="font-semibold">Is Available:</label>
                    <input
                        type="checkbox"
                        name="isAvailable"
                        checked={formData.isAvailable}
                        onChange={handleChange}
                        className="ml-2"
                        required
                    />
                </div>

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    required
                />
                <h3>Owner Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Phone Number *</span>
                        </div>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={formData?.contactInfo?.phoneNumber}
                            onChange={(e) => handleNestedChange(e, "contactInfo")}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text'>Contact email *</span>
                        </div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData?.contactInfo?.email}
                            onChange={(e) => handleNestedChange(e, "contactInfo")}
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                </div>

                <div>
                    <label className="font-semibold">Upload Images:</label>
                    <input
                        type="file"
                        name='photos'
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="file-input file-input-bordered w-full"
                        required
                    />
                    <div className="flex space-x-2 mt-2">
                        {formData.imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`Uploaded ${index}`} className="w-20 h-20 object-cover rounded" />
                        ))}
                    </div>
                </div>

                <button disabled={!formData.imageUrls.length} type="submit" className="btn btn-primary w-full">
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddProperty;