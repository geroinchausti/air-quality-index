import React from "react";
import classNames from "classnames";
import { AQIStates } from "../utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | string[];
}) {
  return (
    <div
      className={classNames(
        "max-w-full rounded overflow-hidden shadow-lg p-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardListItem({
  label,
  children,
  className,
}: {
  label: string;
  className?: string | string[];
  children: React.ReactNode;
}) {
  return (
    <li>
      <span className={classNames("font-bold mr-2", className)}>{label}:</span>
      {children}
    </li>
  );
}

export function CardList({ children }: { children: React.ReactNode }) {
  return <ul className='space-y-2 px-4 list-none'>{children}</ul>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className='text-xl font-bold py-4'>{children}</h3>;
}

export function CardLink({ status, href }: { status: string; href: string }) {
  return (
    <a
      href={href}
      target='_blank'
      className={classNames(
        "font-semibold hover:font-bold capitalize underline decoration-solid",
        {
          "text-green-600": status === AQIStates.Good,
          "text-yellow-600": status === AQIStates.Moderate,
          "text-orange-600": status === AQIStates.UnhealthyForSensitiveGroups,
          "text-red-600": status === AQIStates.Unhealthy,
          "text-violet-600": status === AQIStates.VeryUnhealthy,
          "text-amber-600": status === AQIStates.Hazardous,
        }
      )}
    >
      {status}
    </a>
  );
}
