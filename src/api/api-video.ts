import axios from "axios";
import { ApiUri as urls } from "../common/api-config";

interface IVideoServie<T> {
    GetVideoList(): Result<T>;
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
    public GetVideoList(page: number = 0, size: number = 10): Result<Video> {
        axios.get<any, Result<Video>>(urls.APIGetDoorList, {
            params: {
                page: page,
                size: size
            }
        }).then(function (response) {
            console.log(response);
            return response;
        }).catch(function (error) {
            console.log(error);
            return null
        })
        return null
    }
}