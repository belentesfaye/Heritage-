import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 559 78' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 13C0 5.8203 5.8203 0 13 0H545.5C552.68 0 558.5 5.8203 558.5 13V65C558.5 72.1797 552.68 78 545.5 78H13C5.82029 78 0 72.1797 0 65V13Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
