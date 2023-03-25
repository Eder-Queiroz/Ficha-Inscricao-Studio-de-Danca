export default class BasicAPIResponse {

    constructor (response, error){ 
        this.response = response;
        this.error = error;
    };

    toJson() {
        let json = {
            "data": this.response,
            "error": this.error
        }

        return json;
    }

}