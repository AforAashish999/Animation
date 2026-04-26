import MobileAppDevelopment from '@/components/AnimatedBeam/MobileAppDevelopment'
import SingleBeam from '@/components/AnimatedBeam/SingleBeam'
import SoftwareDevelopment from '@/components/AnimatedBeam/SoftwareDevelopment'
import SoftwareCycle from '@/components/SoftwareCycle'
import { PulsatingButton } from '@/components/ui/pulsating-button'
import React from 'react'
import SEOFunnel from '@/components/SEOFunnel'
import MobileAppSection from '@/components/Mobileappsection'
import HeroMobileApp from '@/components/HeroMobileApp'
import CloudInfrastructure from '@/components/CloudInfrastructure'

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

            <section className='bg-black'>
                <SoftwareCycle />
                <SEOFunnel />
              <HeroMobileApp />
              <CloudInfrastructure />
            </section>
        </div>
    )
}


