import clsx from "clsx";
import { FunctionComponent, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = ({
  className,
  Svg,
  inverted,
  ...otherProps
}: IconProps) => {
  return <Svg className={clsx("", {}, [className])} {...otherProps} />;
};
