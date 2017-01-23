import { ModuleWithProviders, NgModule } from '@angular/core';
import { DialogService } from './dialog.service';

@NgModule({})
export class DialogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DialogModule,
            providers: [ DialogService ]
        }
    }
}
