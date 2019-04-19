import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

interface Location{
  latitude: string;
  longitude: string;
  region_name :string;
}

@Injectable({
  providedIn: 'root'
})


export class MapsService {

  constructor(private http: HttpClient) { }
  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=c8f3e09b2a364f2b2c1b0a1b6827f9f3')
  }

  getStops(){
   var xhr = new XMLHttpRequest()
   if ("withCredentials" in xhr) {

     xhr.open('GET', "/data/stops.json/", true);

   } else {
     xhr = null;

   }
   return xhr;
   }
  }
