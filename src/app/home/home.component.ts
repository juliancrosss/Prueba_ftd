import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private gtmService: GoogleTagManagerService,
  ) { }

  clickDetalle() {
    const gtmTag = {
      event: 'button-click-detalle',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);

  }

  ngOnInit(): void {
  }

}
