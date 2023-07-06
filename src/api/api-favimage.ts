import { ApiUri as urls } from "../common/api-uri";
import service from '../common/https'
import { ResponseWrapper, Result } from '../common/api-common'

export class FavImage {
    public id: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;
}

export async function getImagesAsync(page: number = 0, size: number = 10): Promise<Array<FavImage>> {
    try {
        const response = await service.get<Array<FavImage>>(urls.getImages, {
            params: {
                page: page,
                size: size
            }
        })
        return response.data
    } catch (error) {
        return null
    }
}