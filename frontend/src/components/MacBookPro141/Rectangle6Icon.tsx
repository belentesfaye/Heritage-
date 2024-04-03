import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 469 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 6C0 2.68629 2.68629 0 6 0H463C466.314 0 469 2.68629 469 6V67C469 70.3137 466.314 73 463 73H6C2.68629 73 0 70.3137 0 67V6Z'
      fill='#48742C'
      stroke='#48742C'
    />
  </svg>
);

const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
