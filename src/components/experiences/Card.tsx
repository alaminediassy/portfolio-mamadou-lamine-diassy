import Link from 'next/link'
import clsx from 'clsx'
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function Card<T extends React.ElementType = 'div'>({
                                                              as,
                                                              className,
                                                              children,
                                                          }: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
    as?: T
    className?: string
}) {
    const Component = as ?? 'div'

    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items-start')}
        >
            {children}
        </Component>
    )
}

Card.Link = function CardLink({
                                  children,
                                  ...props
                              }: React.ComponentPropsWithoutRef<typeof Link>) {
    return (
        <>
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-marine-card" />
            <Link {...props}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{children}</span>
            </Link>
        </>
    )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
                                                                        as,
                                                                        href,
                                                                        children,
                                                                    }: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
    as?: T
    href?: string
}) {
    const Component = as ?? 'h2'

    return (
        <Component className="text-base font-semibold tracking-tight text-soft">
            {href ? <Card.Link href={href}>{children}</Card.Link> : children}
        </Component>
    )
}

Card.Description = function CardDescription({
                                                children,
                                            }: {
    children: React.ReactNode
}) {
    return (
        <p className="relative z-10 mt-2 text-sm text-soft-light">
            {children}
        </p>
    )
}

Card.Company = function CardCompany({ children }: { children: React.ReactNode }) {
    return (
        <div
            aria-hidden="true"
            className=" flex items-center text-sm font-medium text-oranger uppercase"
        >
            {children}
        </div>
    )
}

Card.Period = function CardPeriod<T extends React.ElementType = 'p'>({
                                                                           as,
                                                                           decorate = false,
                                                                           className,
                                                                           children,
                                                                           ...props
                                                                       }: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
    as?: T
    decorate?: boolean
}) {
    const Component = as ?? 'p'

    return (
        <Component
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-soft-light',
                decorate && 'pl-3.5',
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 " />
        </span>
            )}
            {children}
        </Component>
    )
}
