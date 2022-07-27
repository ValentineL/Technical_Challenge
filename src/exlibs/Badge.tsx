import * as React from "react";
import { FC, ReactElement } from "react";

export type BadgeProps = {
  /**
   * The display label of the badge
   */
  label?: string;
  /**
   * The Semantic State of this container.
   */
  state?: undefined | "error" | "complete";
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `<Badge />` component extends `React.HTMLAttributes<HTMLDivElement>`.
 * @param props
 * @constructor
 */
export const Badge: FC<BadgeProps> = (
  props: BadgeProps
): ReactElement | null => {
  const { className, label, state = "neutral", ...rest } = props;

  const classes = [
    className,
    "s-badge",
    `s-badge__${state?.toLowerCase()}`,
  ].join(" ");

  return (
    <div {...rest} className={classes}>
      <span className={"s-badge__text"}>{label}</span>
    </div>
  );
};

Badge.defaultProps = {
  state: undefined,
};
