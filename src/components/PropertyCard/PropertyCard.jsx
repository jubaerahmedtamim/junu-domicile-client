import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { FaBed, FaFire, FaLightbulb, FaMapLocationDot, FaShower, FaWifi } from 'react-icons/fa6';
import { GiHouse } from 'react-icons/gi';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import { FaParking } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';


const PropertyCard = ({ property }) => {
    const {title, address, type, bedrooms, bathrooms, monthlyRent, size, allowedPeople, image } = property;
    const [isFavorite, setIsFavorite] = useState(true);
    return (
        <div>
            <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://i.ibb.co.com/0s4P8H4/Beachside-Vacation-Rental.jpg"
                        alt="green iguana"
                    />

                    <CardContent>
                        <div className='flex justify-between items-center mb-4'>
                            <div className=' bg-slate-100 rounded-md px-3 py-1 text-sm'>
                                <p className='flex justify-center items-center'><TbCurrencyTaka />{monthlyRent}/month</p>
                            </div>
                            {/* favorite property or not? */}
                            <div onClick={() => setIsFavorite(!isFavorite)} className=' text-white'>
                                <Tooltip title="Add to favorite" placement="left">
                                    {
                                        isFavorite ? <FavoriteIcon className='text-rose-500'></FavoriteIcon> : <FavoriteBorderIcon></FavoriteBorderIcon>
                                    }
                                </Tooltip>
                            </div>
                        </div>
                        <h3 className='text-base font-semibold mb-2'>{title}</h3>
                        <div className='flex flex-col justify-between mb-4 gap-2'>
                            <div className='flex items-center gap-2 text-sm'>
                                <FaMapLocationDot />
                                <p>{Object.values(address).join(', ')}</p>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <GiHouse />
                                <p>{type}</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2 text-sm'>
                                <FaBed />
                                <p>{bedrooms}</p>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <FaShower />
                                <p>{bathrooms}</p>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <MdOutlineFamilyRestroom />
                                <p>{allowedPeople}</p>
                            </div>
                        </div>
                        <hr className='my-3' />
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center text-sm'>
                                <p className='text-sm'>WIFI</p>
                                <FaWifi />
                            </div>
                            <div className='flex flex-col items-center text-sm'>
                                <p className='text-sm'>Gas</p>
                                <FaFire />
                            </div>
                            <div className='flex flex-col items-center text-sm'>
                                <p className='text-sm'>Parking</p>
                                <FaParking />
                            </div>
                            <div className='flex flex-col items-center text-sm'>
                                <p className='text-sm'>Electricity</p>
                                <FaLightbulb />
                            </div>
                        </div>

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default PropertyCard;