import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerModule } from 'ewancoder-angular-logger';
import { DialogService } from './dialog.service';

@NgModule({
    imports: [ LoggerModule.forRoot() ]
})
export class DialogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DialogModule,
            providers: [ DialogService ]
        }
    }
}
