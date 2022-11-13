import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('header_menu') yourElement: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {

    if (window.innerHeight < window.scrollY) {
      let style = `
        background-color: #FFFFFFCC; 
        width: 100%;
        height: auto;
        padding: 15px 0;
        backdrop-filter: blur(10px);`;
      this.yourElement!.nativeElement.setAttribute('style', style);
    }
    else
      this.yourElement!.nativeElement.setAttribute('style', '');
  }


}
