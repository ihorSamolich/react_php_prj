import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Footer() {
  return (
    <section className="bg-white border-t">
      <div className="max-w-screen-xl px-4 py-5 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <IconBrandFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <IconBrandInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <IconBrandX />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <IconBrandGithub />
          </a>
        </div>

        <div className="mt-4 flex items-center justify-center gap-5">
          <h3 className=" font-semibold text-xl text-orange-500 leading-9 uppercase font-title italic  text-center lg:text-left">
            Join and get special offers first
          </h3>
          <div className="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
            <input
              type="text"
              name="email"
              className="py-3 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
              placeholder="Your email here..."
            />
            <button
              type="submit"
              className="py-3.5 px-7 bg-orange-500 shadow-md rounded-full text-white font-semibold hover:bg-orange-700"
            >
              Subscribe
            </button>
          </div>
        </div>

        <p className="mt-4 leading-6 text-center text-gray-400">
          © 2024 IhorCompany, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
