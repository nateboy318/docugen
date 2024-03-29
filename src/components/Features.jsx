import React from 'react'

const Features = () => {
    return (
        <section
            id="Features"
            class="flex justify-center py-12 sm:py-16 lg:px-32 lg:py-20 xl:py-24"
        >
            <div class="max-w-screen-3xl ">
                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div class="mx-auto flex  max-w-3xl flex-col items-center text-center lg:mx-0 lg:inline-block lg:items-start lg:text-left">
                        <h2 class="text-3xl font-bold sm:text-7xl">
                            Powerful Document<br></br>
                            <span class="from-green to-blue inline-block bg-gradient-to-r bg-clip-text text-transparent">
                                Creation
                            </span>{' '}
                            Tools
                        </h2>

                        <p class="mt-4 max-w-lg  text-gray-600 ">
                            Discover a new level of document generation
                            efficiency with Docugen AI. Our platform offers
                            intuitive features like smart templates,
                            customizable categories, and real-time previews,
                            empowering users to create accurate documents
                            effortlessly.
                        </p>

                        <a
                            href="#"
                            className="bg-blue mt-8 inline-block rounded px-12 py-4 text-sm font-medium text-white transition hover:animate-pulse focus:outline-none focus:ring focus:ring-black lg:mt-16"
                        >
                            Sign Up
                        </a>
                    </div>

                    <div class="mx-auto grid max-w-xl grid-cols-2 gap-8 sm:grid-cols-2">
                        <a
                            class="block rounded-xl border border-gray-100 p-4  shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-100 p-3">
                                <p>&#x1F4C4;</p>
                            </span>

                            <h2 class="mt-2 font-bold">Smart Templates</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Showcase how Docugen AI learns from
                                user-uploaded templates to create accurate and
                                customized documents quickly.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-100 p-3">
                                <p>&#x23F0;</p>
                            </span>

                            <h2 class="mt-2 font-bold">Real-Time</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Preview generated documents in real-time,
                                ensuring accuracy and making adjustments as
                                needed before finalizing.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-100 p-3">
                                <p>&#x1F510;</p>
                            </span>

                            <h2 class="mt-2 font-bold">Data Privacy</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Your data is protected with local storage of
                                sensitive information and adherence to industry
                                regulations.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="#"
                        >
                            <span class="inline-block rounded-lg bg-gray-100 p-3">
                                <p>&#x1F4DA;</p>
                            </span>

                            <h2 class="mt-2 font-bold">Custom Categories</h2>

                            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Create and organize document categories tailored
                                to their specific needs, enabling efficient
                                document management.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
