import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {

  constructor() {}
  public hide() {
      let tabs = document.querySelectorAll('.tabbar');
      let scrollContent = document.querySelectorAll('.scroll-content');
      if (tabs !== null) {
        Object.keys(tabs).map((key) => {
          tabs[key].style.transform = 'translateY(56px)';
        });

        // fix for removing the margin if you got scorllable content
        setTimeout(() =>{
          Object.keys(scrollContent).map((key) => {
            scrollContent[key].style.marginBottom = '0';
          });
        })
      }
    }

    public show() {
      let tabs = document.querySelectorAll('.tabbar');
      if (tabs !== null) {
        Object.keys(tabs).map((key) => {
          tabs[key].style.transform = 'translateY(0px)';
        });
      }
    }
}
