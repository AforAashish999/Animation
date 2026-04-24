'use client'

import React, { forwardRef, useRef } from 'react'

import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { PulsatingButton } from '@/components/ui/pulsating-button'

import { SiMinds } from "react-icons/si";
import { PiStackLight } from "react-icons/pi";
import { LiaConnectdevelop } from "react-icons/lia";
import { Bug } from 'lucide-react'
import { MdRocketLaunch } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaMicrochip } from "react-icons/fa6";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'z-10 flex size-13 items-center justify-center rounded-full xl border-[0.5px] border-gray-700  bg-gray-800 text-gray-300 white/70 p-3 ',
                className
            )}
        >
            {children}
        </div>
    )
})

Circle.displayName = 'Circle'

export default function SoftwareDevelopment() {
    const containerRef = useRef<HTMLDivElement>(null)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)
    const div3Ref = useRef<HTMLDivElement>(null)
    const div4Ref = useRef<HTMLDivElement>(null)
    const div5Ref = useRef<HTMLDivElement>(null)
    const div6Ref = useRef<HTMLDivElement>(null)
    const div7Ref = useRef<HTMLDivElement>(null)

    return (
        <div
            className='relative flex h-[470px] w-full items-center justify-center overflow-hidden p-10'
            ref={containerRef}
        >
            <div className='flex size-full max-h-[700px] max-w-lg flex-col items-stretch justify-between gap-10'>
                <div className='flex flex-row items- center justify-around -between w-full'>
                    <div className='flex flex-col gap-1  items-center '>
                        <Circle ref={div1Ref} className='rounded-xl'>
                            <Icons.planning />
                        </Circle>
                        <p className='text-sm text-gray-400'> Planning </p>
                    </div>

                    <div className='flex flex-col gap-1  items-center '>
                        <Circle ref={div2Ref} className='rounded-xl'>
                            <Icons.design />
                        </Circle>
                        <p className='text-sm text-gray-400'> Design </p>
                    </div>

                    <div className='flex flex-col gap-1  items-center '>
                        <Circle ref={div3Ref} className='rounded-xl'>
                            <Icons.development />
                        </Circle>
                        <p className='text-sm text-gray-400'> Development </p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <PulsatingButton
                        distance=" 6px"
                        className="bg-gray-700 blue-50 blue -400 p-0  text-white rounded-full">
                        <Circle
                            ref={div4Ref}
                            className='size-25 rounded-full bg-gray-900 border-2 border-blue-600 flex flex-col gap-1.5'
                        >
                            <Icons.software />
                            <div className='text-[11px] flex flex-col justfy-center items-center'>
                                <p className=' font-semibold text-[10px] bold'> Software</p>
                                <p className='text-[9px] text-blue-600 font-semibold '> Cycle</p>
                            </div>
                        </Circle>
                    </PulsatingButton>


                </div>

                <div className='flex flex-row items-center justify-around between'>

                    <div className='flex flex-col gap-1  items-center '>
                        <Circle
                            ref={div5Ref}
                            className='size-11 backdrop-blur border-0 bg-gray-800 '
                        >
                            <Icons.testing />
                        </Circle>
                        <p className='text-xs text-gray-400'> Testing </p>
                    </div>

                    <div className='flex flex-col gap-1  items-center '>
                        <Circle
                            ref={div6Ref}
                            className='size-11 backdrop-blur border-0 bg-gray-800 '
                        >
                            <Icons.launch />
                        </Circle>
                        <p className='text-xs text-gray-400'> Launch </p>
                    </div>

                    <div className='flex flex-col gap-1  items-center '>
                        <Circle
                            ref={div7Ref}
                            className='size-11 backdrop-blur border-0 bg-gray-800 '
                        >
                            <Icons.support />
                        </Circle>
                        <p className='text-xs text-gray-400'> Support </p>
                    </div>

                </div>
            </div>


            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={20}
                duration={4}
                delay={0}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
                curvature={0}
                duration={4}
                delay={2}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={-20}
                duration={4}
                delay={4}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div5Ref}
                curvature={20}
                duration={4}
                delay={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
                curvature={0}
                duration={4}
                delay={8}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div7Ref}
                curvature={-20}
                duration={4}
                delay={10}
            />
        </div>
    )
}

const Icons = {
    planning: () => <SiMinds  className='text-4xl text -blue-600 ' />,
    design: () => <PiStackLight  className='text-2xl' />,
    development: () => <LiaConnectdevelop  className='text-2xl' />,
    testing: () => <Bug  className='text-2xl text-green-400' />,
    launch: () => <MdRocketLaunch className='text-green-400' />,
    support: () => <BiSupport  className='text-2xl text-green-400' />,
    software: () => <FaMicrochip  className='text-4xl  text-blue-400' />,
}
