import { Component } from '@angular/core';
import { MapsService } from './maps.service';
import { MouseEvent } from '@agm/core';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: string = '';
  lng: string = '';
  region: string = '';
  markers$ : Observable<any>;
  location: Object;

  constructor(private map: MapsService){}
  ngOnInit(){
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.region = data.region_name;
    });
    var xhr = this.map.getStops();
    console.log(xhr.responseText);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
    xhr.onload = function() {
    var responseText = xhr.responseText;
    console.log(responseText);
    };
  }

  onMouseOver(infoWindow, gm) {

        infoWindow.open();
    }
}
