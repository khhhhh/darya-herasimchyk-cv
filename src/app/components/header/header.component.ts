import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  translateService: TranslateService;

  constructor(translate: TranslateService) {
    this.translateService = translate;
  }

  ngOnInit(): void {
  }


  setLang(lang: string): void {
    this.translateService.use(lang);
  }
}
