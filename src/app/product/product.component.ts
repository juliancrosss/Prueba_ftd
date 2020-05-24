import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Farmacia y droguería online 24 horas a domicilio - Farmatodo';

  schema = { "@context": "https://schema.org/", "@type": "Product", "name": "Dolex Gripa 12 Tabs Congestión nasal, Dolor cabeza y fiebre.  x12Tab.GSK Acetaminofén Fenilefrina Clorfenamina.", "image": "https://lh3.googleusercontent.com/zq7FAApZmK-tGLnmcaQzlE3Wk-3bRk2wtZ-WmxUo_dcg-xWqj_wF4s0Baz7ATSrXD8QviRvKimPBb2sW-x7C5n0CcaDAqOxSOmV7", "description": ".", "sku": "1000409", "mpn": "1000409", "brand": { "@type": "Thing", "name": "Dolex" }, "offers": { "@type": "Offer", "url": "https://www.farmatodo.com.co/product/1000409", "priceCurrency": "COP", "price": 11200, "itemCondition": "https://schema.org/NewCondition", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Farmatodo" } } }

  quantity = 1;
  showText = false;
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private gtmService: GoogleTagManagerService,
  ) { }

  clickAumentar() {
    this.quantity = this.quantity + 1
    const gtmTag = {
      event: 'button-click-aumentar',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);

  }

  

  clickDisminuir() {
    this.quantity = this.quantity - 1

    const gtmTag = {
      event: 'button-click-disminuir',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);

  }
  clickComprar(){
    this.showText = true
    const gtmTag = {
      event: 'button-click-comprar',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Dolex Gripa 12 Tabs Congestión nasal, Dolor cabeza y fiebre' }
    );

    //(click)="showText = true"
  }

}
