import { ApiUri as urls } from "../common/api-uri";
import service from '../common/https'

export class Post {
    public id: number;
    public title: string;
    public body: string;
}

export async function getPostsAsync(): Promise<Array<Post>> {
    try {
        const response = await service.get<Array<Post>>(urls.getPosts)
        return response.data
    } catch (error) {
        return null
    }
}