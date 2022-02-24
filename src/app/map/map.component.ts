import { Component, OnInit } from '@angular/core';
import { Loader } from 'google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  cords = {lat: 50.06540434687645, lng: 19.949948314705384};
  constructor() { }

  ngOnInit(): void {
    this.initMap(this.cords);
  }

  initMap(cords: any): void {
    const loader = new Loader('AIzaSyBXWbQMxIGJizLbSJO51fxKm_6LPqP-bU0');
    const mapElement = document.getElementById('map');

    loader.load().then(function (google) {
      const map = new google.maps.Map(mapElement as Element, {
          center: cords,
          zoom: 18,
      });

      const marker = new google.maps.Marker({
        position: cords,
        map: map,
      });
  });
  }

}
