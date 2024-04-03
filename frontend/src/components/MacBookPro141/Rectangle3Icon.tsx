import { memo, SVGProps } from 'react';

const Rectangle3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 559 79' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 13.5C0 6.3203 5.8203 0.5 13 0.5H545.5C552.68 0.5 558.5 6.3203 558.5 13.5V65.5C558.5 72.6797 552.68 78.5 545.5 78.5H13C5.82029 78.5 0 72.6797 0 65.5V13.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle3Icon);
export { Memo as Rectangle3Icon };
