import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-i18n-demo';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('de');
  }

  useLanguage(language: string) {
      this.translate.use(language);
  }
}

