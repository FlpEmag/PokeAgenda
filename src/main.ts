import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule} from './app/_module/_core/core.module'



platformBrowserDynamic()
  .bootstrapModule(CoreModule)
    .catch(err => console.error(err));
