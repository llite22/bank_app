import { Link, LinkProps } from "react-router-dom";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import clsx from "clsx";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const AppLink = ({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  target,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      target={target}
      className={clsx("", {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
