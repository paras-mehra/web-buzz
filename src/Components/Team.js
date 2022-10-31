import React from "react";

function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://flatlogic.github.io/light-blue-vue-admin/img/a5.84f014f0.jpg"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Holden Caulfield
                </h2>
                <p className="text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Jasmine Holland
                </h2>
                <p className="text-gray-500">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://media.baamboozle.com/uploads/images/259748/1631139339_49289_url.jpeg"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Oskar Blinde
                </h2>
                <p className="text-gray-500">Video Editor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
