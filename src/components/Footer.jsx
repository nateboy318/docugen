import React from 'react'

const Footer = () => {
    return (
        <footer class="">
            <div class="max-w-screen-7xl relative mx-auto px-4 py-12 sm:px-6 lg:px-32 ">
                <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        class="bg-green hover:bg-blue inline-block rounded-full p-2 text-white transition sm:p-3 lg:p-2"
                        href="#MainContent"
                    >
                        <span class="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div class="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div class="flex justify-center text-black lg:justify-start">
                            <h2 class="mb-2  flex w-32 rounded-full text-lg font-bold">
                                DocuGen<span class="text-blue">.</span>
                            </h2>
                        </div>

                        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Join our AI-driven document revolution, redefining
                            workflows for unparalleled efficiency. Propel your
                            business to new heights with us.
                        </p>
                    </div>

                    <div class="flex items-center  justify-center gap-4 px-4  py-2 font-semibold sm:gap-12">
                        <a
                            href="#"
                            className="from-green to-blue inline-block bg-gradient-to-r bg-clip-text transition-all hover:font-extrabold hover:text-transparent "
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="from-green to-blue inline-block bg-gradient-to-r bg-clip-text transition-all hover:font-extrabold hover:text-transparent"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="from-green to-blue inline-block bg-gradient-to-r bg-clip-text transition-all hover:font-extrabold hover:text-transparent"
                        >
                            Features
                        </a>

                        <a
                            href="#"
                            className="from-green to-blue inline-block bg-gradient-to-r bg-clip-text transition-all hover:font-extrabold hover:text-transparent"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#"
                            className="from-green to-blue inline-block bg-gradient-to-r bg-clip-text transition-all hover:font-extrabold hover:text-transparent"
                        >
                            Roadmap
                        </a>
                    </div>
                </div>

                <p class="mt-6 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
