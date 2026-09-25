import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  dataHover?: boolean;
}

interface LinkProps extends BaseProps {
  to: string;
}

interface AnchorProps extends BaseProps {
  href: string;
}

interface ButtonOnlyProps extends BaseProps {
  type?: 'button' | 'submit';
}

type ButtonProps = LinkProps | AnchorProps | ButtonOnlyProps;

/**
 * Unified CTA button. Use `to` for internal routes, `href` for anchors/external,
 * or no link for a plain button. Variants: primary (gold) / outline.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, onClick, dataHover = true } = props;
  const cls = `${styles.btn} ${variant === 'outline' ? styles.outline : styles.primary} ${
    className ?? ''
  }`;

  const hover = dataHover ? 'true' : undefined;

  if ('to' in props) {
    return (
      <Link to={props.to} className={cls} onClick={onClick} data-hover={hover}>
        {children}
      </Link>
    );
  }

  if ('href' in props) {
    return (
      <a href={props.href} className={cls} onClick={onClick} data-hover={hover}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={cls}
      onClick={onClick}
      data-hover={hover}
    >
      {children}
    </button>
  );
}
