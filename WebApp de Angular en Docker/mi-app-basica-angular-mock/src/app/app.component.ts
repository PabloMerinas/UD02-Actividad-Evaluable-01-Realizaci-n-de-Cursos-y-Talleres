import { Component } from '@angular/core';
import {Avenger} from "./Avenger";
import {MiServicioService} from "./mi-servicio.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-basica-angular';

  myFirstAvenger: Avenger;
  mySecondAvenger: Avenger;

  constructor(private miServicioService: MiServicioService) {
    this.getFirstAvenger();
    this.getSecondAvenger();
  }

  getFirstAvenger() {
    this.miServicioService.getAvenger(0).then(
      avenger => {
        this.myFirstAvenger = avenger;
      }
    )
  }

  getSecondAvenger() {
    this.miServicioService.getAvenger(1).then(
      avenger => {
        this.mySecondAvenger = avenger;
      }
    )
  }

}
