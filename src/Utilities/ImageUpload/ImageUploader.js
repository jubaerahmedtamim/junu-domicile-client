import axios from "axios";


const ImageUploader = async (imageFile) => {
    try {
        const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
        const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

        if (!image_hosting_api) {
            throw new Error('Image hosting key is not defined in the environment variable.');
        }
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const res = await axios.post(image_hosting_url, imageFile, {
            headers: {
                'Content-Type':  'multipart/form-data',
            }
        })
        return res.data;

    }
    catch (error) {
        console.log("Error uploading image",error);
        throw error;
    }
};

export default ImageUploader;