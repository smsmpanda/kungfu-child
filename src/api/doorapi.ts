import axios from "../../node_modules/axios/index";
import { ApiUri } from "../common/apiconfig";

export class DoorService implements IDoorServie {
    GetDoorsList(): void {
        axios.get(ApiUri.APIGetDoorList, {
            params: {
                page: 0,
                size: 2
            }
        })
            .then(function (response) {
                console.log(response?.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}