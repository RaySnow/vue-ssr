import request from "../framework/network/request";

export default function getBanners(params) {
    return request.get('/api/banners', {params: params}).then((data) => {
        if (+data.code === 1) {
            return {
                data: data.data
            }
        } else {
            return {
                error: data.message
            }
        }
    }).catch(e => {
        console.log(e.message);
    })
}
