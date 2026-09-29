import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'dark' | 'light' | 'line' }>;

export function Button({ children, variant = 'dark', className = '', ...props }: Props) {
  return <a className={`button button--${variant} ${className}`} {...props}><span>{children}</span><i aria-hidden="true">↗</i></a>;
}
