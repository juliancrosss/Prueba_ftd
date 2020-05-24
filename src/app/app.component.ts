import { Component, OnInit } from '@angular/core';
import { Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {

  constructor(
    private metaTagService: Meta,
    private router: Router,
    private gtmService: GoogleTagManagerService,
  ) { }

  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    'name': 'Farmatodo',
    'url': 'www.farmatodo.com.co'
  };

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'title', content: 'Farmacia y droguería online 24 horas a domicilio - Farmatodo' },
      { name: 'description', content: 'Farmatodo, cadena de droguerías de autoservicio especializada en productos para la salud, belleza, cuidado personal y cuidado del bebé.' },
      { name: 'title', content: 'Farmacia y droguería online 24 horas a domicilio - Farmatodo' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Farmatodo' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);

    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
