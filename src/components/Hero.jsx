import React from "react";

const Hero = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-32 lg:py-16 mb-20 lg:mt-20 mt-32">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full lg:inline-block hidden">
            <img
              alt=""
              src="/src/assets/clipboard-3d.png"
              class=" float-right"
            />
          </div>

          <div class="lg:py-16 flex flex-col lg:items-start items-center">
            <span class=" shadow-4xl lg:text-center whitespace-nowrap rounded-full bg-blue px-5 py-2 text-md text-white ">
              Coming Soon
            </span>
            <h2 class=" text-4xl md:text-6xl mt-8 font-bold  xl:text-7xl text-center lg:text-left">
              Revolutionize Documentation with&nbsp;
              <span class="bg-gradient-to-r from-green to-blue text-transparent bg-clip-text inline-block">
                AI-Powered
              </span>{" "}
              Precision
            </h2>

            <p class="mt-4 text-xl text-gray-600 text-center lg:text-left">
              Streamline your workflow and enhance accuracy with our
              cutting-edge AI. Say goodbye to manual document creation and
              embrace efficiency.
            </p>

            <a
              href="#"
              className="mt-8 lg:mt-16 inline-block rounded bg-blue px-12 py-4 text-sm font-medium text-white transition hover:animate-pulse focus:outline-none focus:ring focus:ring-black text-center lg:text-left"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
