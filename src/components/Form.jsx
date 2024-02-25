import React from "react";

const Form = () => {
  return (
    <section id="Form" class="bg-blue">
      <div class="mx-auto max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-32">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12 text-center lg:text-left flex items-center justify-center flex-col">
            <h1 class="text-3xl font-bold text-white sm:text-5xl lg:py-8 py-4">
              Be the First to Know When We Launch!
            </h1>
            <p class="max-w-3xl text-lg text-white">
              Be the forefront of innovation! Sign up for our newsletter to
              receive exclusive updates and be the first to know when Docugen AI
              officially launches, bringing groundbreaking document management
              solutions to your fingertips.
            </p>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" class="space-y-4 ">
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm "
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    for="Option1"
                    class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-blue has-[:checked]:border-blue has-[:checked]:bg-blue has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      class="sr-only"
                      id="Option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span class="text-sm"> Personal Use </span>
                  </label>
                </div>

                <div>
                  <label
                    for="Option2"
                    class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-blue has-[:checked]:border-blue has-[:checked]:bg-blue has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      class="sr-only"
                      id="Option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span class="text-sm"> Start-Up Use</span>
                  </label>
                </div>

                <div>
                  <label
                    for="Option3"
                    class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-blue has-[:checked]:border-blue has-[:checked]:bg-blue has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      class="sr-only"
                      id="Option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span class="text-sm"> Enterprise Use </span>
                  </label>
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>

                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-blue px-14 py-3 font-medium text-white sm:w-auto"
                >
                  SIgn Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
