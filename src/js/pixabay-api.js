import axios from "axios";

export async function getImages(value, currentPage){
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    
    // const params = new URLSearchParams({
    //     key: "44030880-e45e37f6dd8504bc3a71fd6c0",
    //     q: value,
    //     image_type: "photo",
    //     orientation: "horizontal",
    //     safesearch: "true",
    //     page: `${currentPage}`,
    //     per_page: "15"
    // })
    const params = new URLSearchParams();
    params.append('key', '44030880-e45e37f6dd8504bc3a71fd6c0');
    params.append('q', `${value}`);
    params.append('image_type', 'photo');
    params.append('orientation', 'horizontal');
    params.append('safesearch', 'true');
    params.append('page', `${currentPage}`);
    params.append('per_page', '15');

    const url = `${BASE_URL}${END_POINT}?${params}`;
    try{
        return await axios.get(url);
    }
    catch(error){
        console.error(error.message)
    }
    

    
}

