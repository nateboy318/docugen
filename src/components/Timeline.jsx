import React from 'react'

const Timeline = () => {
    return (
        <div>
            <section class=" px-6 py-12 sm:py-16 lg:px-32 lg:py-20 lg:pb-32 xl:py-24 xl:pb-44">
                <div class="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <p class="text-sm font-bold uppercase tracking-widest ">
                            The Docugen AI Journey
                        </p>
                        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:mb-8 lg:text-7xl">
                            Mapping Our Future
                        </h2>
                        <p class="mx-auto mt-4 max-w-6xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
                            Set for a grand debut in Q3 of 2024, Docugen AI is
                            on a meticulously planned four-step journey to
                            ensure we bring a truly exceptional product to our
                            users, right on schedule.
                        </p>
                    </div>
                    <ul class="max-w-screen-3xl mx-auto mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:mt-20  lg:grid-cols-4">
                        <li class="flex-start group relative flex lg:flex-col">
                            <span
                                class="bg-green absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-[2px] lg:left-auto lg:right-0 lg:top-[18px] lg:h-[2px] lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"
                            ></span>
                            <div class="group-hover:bg-blue inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-50 transition-all  duration-200">
                                <p>&#x1F3E0;</p>
                            </div>
                            <div class="ml-6 lg:ml-0 lg:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    Phase 1: The Foundations
                                </h3>
                                <h4 class="mt-2 text-base text-gray-700">
                                    We begin by laying the groundwork for
                                    Docugen AI, focusing on research and
                                    infrastructure setup to create core
                                    functionalities.
                                </h4>
                            </div>
                        </li>
                        <li class="flex-start group relative flex lg:flex-col">
                            <span
                                class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-[2px] bg-gray-300 lg:left-auto lg:right-0 lg:top-[18px] lg:h-[2px] lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"
                            ></span>
                            <div class="group-hover:bg-blue inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-50 transition-all  duration-200">
                                <p>&#x1F916;</p>
                            </div>
                            <div class="ml-6 lg:ml-0 lg:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    Phase 2: AI Integration
                                </h3>
                                <h4 class="mt-2 text-base text-gray-700">
                                    Next, we seamlessly integrate advanced AI
                                    capabilities into our platform, refining
                                    algorithms and interfaces.
                                </h4>
                            </div>
                        </li>
                        <li class="flex-start group relative flex lg:flex-col">
                            <span
                                class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-[2px] bg-gray-300 lg:left-auto lg:right-0 lg:top-[18px] lg:h-[2px] lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"
                            ></span>
                            <div class="group-hover:bg-blue inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-50 transition-all  duration-200">
                                <p>&#x1F600;</p>
                            </div>
                            <div class="ml-6 lg:ml-0 lg:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    Phase 3: UX Refinement
                                </h3>
                                <h4 class="mt-2 text-base text-gray-700">
                                    We prioritize enhancing user experience,
                                    focusing on interface improvements and
                                    testing for optimal performance.
                                </h4>
                            </div>
                        </li>
                        <li class="flex-start group relative flex lg:flex-col">
                            <div class="group-hover:bg-blue inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-50 transition-all  duration-200">
                                <p> &#x1F680;</p>
                            </div>
                            <div class="ml-6 lg:ml-0 lg:mt-10">
                                <h3 class="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    Phase 4: Launch Preparation
                                </h3>
                                <h4 class="mt-2 text-base text-gray-700 ">
                                    In the final phase, we meticulously prepare
                                    for launch, ensuring a flawless release
                                    through testing and feedback integration.
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Timeline
