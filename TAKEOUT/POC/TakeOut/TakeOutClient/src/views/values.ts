// import {inject} from "aurelia-framework";
// import {HttpClient} from "aurelia-fetch-client";

// @inject(HttpClient)
export class Values {
    values: string[] = [];

    // constructor(private http: HttpClient) { }

    activate() {
    	this.values = ["1", "2", "value3"];
    	return true;
        // return this.http.fetch("http://localhost:YOURPORTNUMBER/api/values").
        //     then(response => response.json()).then(data => {
        //         this.values = data;
        //     });
    }
}