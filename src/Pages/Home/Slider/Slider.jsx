import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../../assets/SliderImages/Beachside Vacation Rental.jpg'
import img3 from '../../../assets/SliderImages/kelvin-zyteng-LMq-rTluKfQ-unsplash.jpg'
import img4 from '../../../assets/SliderImages/Senior Living Community.jpg'

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[600px]"
            >
                <SwiperSlide> <img  src={img1} alt="" /> </SwiperSlide>
                <SwiperSlide> <img  src={img3} alt="" /> </SwiperSlide>
                <SwiperSlide> <img  src={img4} alt="" /> </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;