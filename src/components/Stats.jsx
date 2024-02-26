import React from 'react'

export default function Stats() {
    return (
        <section
            id="Stats"
            className="px-6 py-12 sm:py-16 lg:px-32 lg:py-20 xl:py-24"
        >
            <div className="max-w-screen-3xl mx-auto ">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-7xl">
                        Pioneering the{' '}
                        <span class="from-green to-blue inline-block bg-gradient-to-r bg-clip-text text-transparent">
                            Future
                        </span>{' '}
                        of <br></br>Documentation
                    </h2>

                    <p className="mt-8 text-gray-500 sm:text-sm">
                        At Docugen AI, we're pioneers in revolutionizing how
                        businesses handle their documentation needs. Powered by
                        cutting-edge AI technology, our platform streamlines the
                        document generation process, freeing up valuable time
                        and resources. With a relentless commitment to
                        innovation and efficiency, we're transforming tedious
                        tasks into opportunities for growth and success.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="bg-green mx-12 flex flex-col rounded-lg bg-opacity-20 py-10 text-center sm:mx-0 sm:px-4 sm:py-20">
                            <dt className="order-last py-4 text-lg font-bold text-gray-900">
                                Accuracy Rate
                            </dt>

                            <dd className="text-green text-7xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                93%
                            </dd>
                        </div>

                        <div className="bg-green mx-12 flex flex-col rounded-lg bg-opacity-20 py-10 text-center sm:mx-0 sm:px-4 sm:py-20">
                            <dt className="order-last py-4 text-lg font-bold text-gray-900">
                                Faster Documentation
                            </dt>

                            <dd className="text-green text-7xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                3X
                            </dd>
                        </div>

                        <div className="bg-green mx-12 flex flex-col rounded-lg bg-opacity-20 py-10 text-center sm:mx-0 sm:px-4 sm:py-20">
                            <dt className="order-last py-4 text-lg font-bold text-gray-900">
                                Documents Trained On
                            </dt>

                            <dd className=" text-green text-7xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
                                10.3M
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
