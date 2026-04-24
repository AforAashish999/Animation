import MobileAppDevelopment from '@/components/AnimatedBeam/MobileAppDevelopment'
import SingleBeam from '@/components/AnimatedBeam/SingleBeam'
import SoftwareDevelopment from '@/components/AnimatedBeam/SoftwareDevelopment'
import { PulsatingButton } from '@/components/ui/pulsating-button'
import React from 'react'

export default function page() {
    return (
        <div>
            <div>
                <h1 className='bg-purple-400 py-2'> Single Beam </h1>
                <SingleBeam />
            </div>

            <section className='bg-gray-900 pb-10'>
                <h1 className='bg-purple-400 py-2'> Mobile App Development </h1>
                <MobileAppDevelopment />
            </section>

            <section className='bg-gray-900 pb-10'>
                <h1 className='bg-purple-400 py-2'> Software Development </h1>
                <SoftwareDevelopment />
            </section>

        </div>
    )
}
