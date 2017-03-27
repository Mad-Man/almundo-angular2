import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hotel } from './models/hotel';


@Injectable()
export class HotelsService {

    /**
     * Base api uri
     */
    private apiUrl: string = '/api/hoteles/';

    /**
     * Constructor Method
     * @param http {object}  (instance of Http)
     */
    constructor(private http: Http) { }

    /**
     * Method to retrieve the hotel list from the api
     * @param destinationId {string} 
     */
    getList(destinationId: string): Promise<Hotel[]> {
        return this.http.get(this.apiUrl + destinationId)
            .toPromise()
            .then(response => response.json().results as Hotel[])
            .catch((err: any) => { console.log(err) });
    }
}

