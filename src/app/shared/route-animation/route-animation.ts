import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('right')),
  transition('* => isRight', slideTo('left')),
  transition('isLeft => *', slideTo('left')),
  transition('isRight => *', slideTo('right')),
  transition('* => isLeft1', slideTo('right')),
  transition('* => isRight1', slideTo('left')),
  transition('isLeft1 => *', slideTo('left')),
  transition('isRight1 => *', slideTo('right')),
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          zIndex: '1',
          position: 'absolute',
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })], optional),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(
        ':enter',
        [animate('600ms ease', style({ [direction]: '0%' }))],
        optional
      ),
    ]),
  ];
}
