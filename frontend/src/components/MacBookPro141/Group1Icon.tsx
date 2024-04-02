import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 121 121' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={60.5} cy={60.5} r={60.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
