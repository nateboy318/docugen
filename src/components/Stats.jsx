import React from "react";

export default function Stats() {
  return (
    <section id="Stats" className="bg-white">
      <div className="mx-auto max-w-screen-3xl px-4 py-12 sm:px-6 md:py-24 lg:px-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-7xl">
            Pioneering the{" "}
            <span class="bg-gradient-to-r from-green to-blue text-transparent bg-clip-text inline-block">
              Future
            </span>{" "}
            of <br></br>Documentation
          </h2>

          <p className="mt-8 text-gray-500 sm:text-sm">
            At Docugen AI, we're pioneers in revolutionizing how businesses
            handle their documentation needs. Powered by cutting-edge AI
            technology, our platform streamlines the document generation
            process, freeing up valuable time and resources. With a relentless
            commitment to innovation and efficiency, we're transforming tedious
            tasks into opportunities for growth and success.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-green bg-opacity-20 sm:px-4 mx-12 sm:mx-0 sm:py-20 py-10 text-center">
              <dt className="order-last text-lg font-bold text-gray-900 py-4">
                Accuracy Rate
              </dt>

              <dd className="text-7xl font-extrabold text-green xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">
                93%
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-green bg-opacity-20 sm:px-4 mx-12 sm:mx-0 sm:py-20 py-10 text-center">
              <dt className="order-last text-lg font-bold text-gray-900 py-4">
                Faster Documentation
              </dt>

              <dd className="text-7xl font-extrabold text-green xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">
                3X
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-green bg-opacity-20 sm:px-4 mx-12 sm:mx-0 sm:py-20 py-10 text-center">
              <dt className="order-last text-lg font-bold text-gray-900 py-4">
                Documents Trained On
              </dt>

              <dd className=" text-7xl font-extrabold text-green xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl ">
                10.3M
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
