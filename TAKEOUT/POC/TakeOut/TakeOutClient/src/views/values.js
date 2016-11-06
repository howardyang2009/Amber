// import {inject} from "aurelia-framework";
// import {HttpClient} from "aurelia-fetch-client";
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Values;
    return {
        setters:[],
        execute: function() {
            // @inject(HttpClient)
            class Values {
                constructor() {
                    this.values = [];
                }
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
            exports_1("Values", Values);
        }
    }
});
//# sourceMappingURL=values.js.map