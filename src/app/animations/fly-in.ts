import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyIn = trigger('flyIn', [
    state('active', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        animate(450, keyframes([
            style({ opacity: 0, transform: 'translateX(-30%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(25px)', offset: 0.4 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ]))
    ]),
    transition('* => void', [
        animate(600, keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            // style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(30%)', offset: 1.0 })
        ]))
    ])
]);
