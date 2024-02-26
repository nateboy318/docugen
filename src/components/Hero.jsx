import React from 'react'

const Hero = () => {
    return (
        <section>
            <div class="max-w-screen-3xl mx-auto px-6 py-12 sm:py-16 lg:px-32 lg:py-20 xl:py-24">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="hidden h-64 justify-end overflow-hidden rounded-lg sm:h-80 lg:order-last lg:flex lg:h-full lg:items-center">
                        <img
                            alt=""
                            src="/src/assets/clipboard-3d.png"
                            class=" float-right"
                        />
                    </div>

                    <div class="flex flex-col items-center lg:items-start lg:py-16">
                        <span class=" shadow-4xl bg-blue text-md whitespace-nowrap rounded-full px-5 py-2 text-white lg:text-center ">
                            Coming Soon
                        </span>
                        <h2 class=" mt-8 text-center text-4xl font-bold  md:text-6xl lg:text-left xl:text-7xl">
                            Revolutionize Documentation with&nbsp;
                            <span class="from-green to-blue inline-block bg-gradient-to-r bg-clip-text text-transparent">
                                AI-Powered
                            </span>{' '}
                            Precision
                        </h2>

                        <p class="mt-4 text-center text-xl text-gray-600 lg:text-left">
                            Streamline your workflow and enhance accuracy with
                            our cutting-edge AI. Say goodbye to manual document
                            creation and embrace efficiency.
                        </p>

                        <a
                            href="#"
                            className="bg-blue mt-8 inline-block rounded px-12 py-4 text-center text-sm font-medium text-white transition hover:animate-pulse focus:outline-none focus:ring focus:ring-black lg:mt-16 lg:text-left"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
