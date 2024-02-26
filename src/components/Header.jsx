import React from 'react'

const Header = () => {
    return (
        <div class=" fixed inset-x-0 top-4 z-50 mx-auto max-w-fit items-center text-sm text-black sm:text-base">
            <h2 class="mx-auto mb-2 flex w-32 justify-center rounded-full text-lg font-bold">
                DocuGen<span class="text-blue">.</span>
            </h2>
            <div class="shadow-3xl flex items-center justify-center gap-4 rounded-md bg-white px-4 py-2 font-semibold sm:gap-12">
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
    )
}

export default Header
