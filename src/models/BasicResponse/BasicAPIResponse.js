export default class BasicAPIResponse {

    constructor (
        response,
        error
    ){ };

    toJson() {
        let json = {
            "data": this.response,
            "error": this.error
        }

        return json;
    }

}