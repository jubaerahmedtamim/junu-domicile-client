import axios from "axios";

const handleImagesUpload = async (images) => {
    try {
        const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_KEY;
        const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

        const uploadPromises = images.map(image => {
            const formData = new FormData();
            formData.append('image', image);
            return axios.post(image_hosting_url, formData)
        })
        const responses = await Promise.all(uploadPromises);
        const urls = responses.map(response => response.data.data.display_url )
        return urls;
    }

    catch (error) {
        console.error("Error uploading images", error);
    }
    
}
export default handleImagesUpload;