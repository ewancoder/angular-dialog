import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from '@ewancoder/angular-logger';

@Injectable()
export class DialogService {
    private readonly shown: BehaviorSubject<boolean>;
    private readonly message: BehaviorSubject<string>;
    private currentMessage: string;
    confirm: () => void;
    reject: () => void;

    get shown$(): Observable<boolean> {
        return this.shown.asObservable();
    }

    get message$(): Observable<string> {
        return this.message.asObservable();
    }

    constructor(logger: LoggerService) {
        this.shown = new BehaviorSubject<boolean>(false);
        this.message = new BehaviorSubject<string>('');
        this.currentMessage = '';

        logger.log('Initialized DialogService.', ['dialog', 'service', 'init']);
    }

    show(message: string): Promise<boolean> {
        if (this.currentMessage !== message) {
            this.currentMessage = message;
            this.message.next(message);
        }

        return new Promise<boolean>((resolve, reject) => {
            this.confirm = () => {
                this.shown.next(false);
                resolve(true);
            }

            this.reject = () => {
                this.shown.next(false);
                resolve(false);
            }

            this.shown.next(true);
        });
    }
}
