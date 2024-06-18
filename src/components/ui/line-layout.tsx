import React from 'react'

export default function Linelayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="min-h-screen bg-[#051537] bg-[url('/bg-line.svg')] w-full bg-cover bg-top">{children}</div>
  )
}
