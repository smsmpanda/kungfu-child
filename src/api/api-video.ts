import axios from "axios";
import { ApiUri as urls } from "../common/api-config";

interface IVideoServie<T> {
    GetVideoList(): Promise<Response<T>>;
}

//#region  api response

class Response<T> {
    public code: number;
    public message: string;
    public result: Result<T>;
}

export class Result<T> {
    public list: T[] = Array<T>();
    public total: number;

    constructor() {
        this.list = Array<T>();
        this.total = 0;
    }
}

export class Video {
    public id: number;
    public title: string;
    public userName: string;
    public userPic: string;
    public duration: string;
    public playUrl: string;
    public coverUrl: string;
}
//#endregion
export class VideoService implements IVideoServie<Video> {
    async GetVideoList(page: number = 0, size: number = 10): Promise<Response<Video>> {
        try {
            const response = await axios.get(urls.apiGetVideoList, {
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
}