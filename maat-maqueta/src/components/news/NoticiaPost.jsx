import React from "react";
import { Link } from "react-router-dom";
import MeetupImage from "../../resources/img/meetup-image.jpg";
import MeetupPhoto01 from "../../resources/img/meetup-photo-01.jpg";
import MeetupPhoto02 from "../../resources/img/meetup-photo-02.jpg";
import MeetupPhoto03 from "../../resources/img/meetup-photo-03.jpg";
import MeetupThumb from "../../resources/img/meetups-thumb-02.jpg";
import UserImage01 from "../../resources/img/user-32-01.jpg";
import UserImage02 from "../../resources/img/user-32-02.jpg";
import UserImage03 from "../../resources/img/user-32-03.jpg";
import UserImage04 from "../../resources/img/user-32-04.jpg";
import UserImage05 from "../../resources/img/user-32-05.jpg";
import UserImage06 from "../../resources/img/user-32-06.jpg";
import UserImage07 from "../../resources/img/user-32-07.jpg";
import UserImage08 from "../../resources/img/user-32-08.jpg";
import Avatar02 from "../../resources/img/avatar-02.jpg";
import Avatar03 from "../../resources/img/avatar-03.jpg";
import Avatar04 from "../../resources/img/avatar-04.jpg";

function NoticiaPost() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <Link
                    className="btn-sm px-3 bg-white text-slate-600 inline-flex items-center space-x-2 transition duration-150 ease-in-out hover:text-emerald-600 "
                    to="/noticias"
                  >
                    <svg
                      className="fill-current text-slate-400 mr-2"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                    >
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span className="hover:border-b border-b-emerald-600">
                      News
                    </span>
                  </Link>
                </div>
                <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
                  Mon 12 JUN, 2023
                </div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                    Wildfires: UK to set up new Mediterranean-style specialist
                    units
                  </h1>
                  <p>
                    Firefighters will deploy new techniques learnt in the
                    world's worst wildfire hotspots as climate change raises the
                    risk level in the UK this summer. Last year's heatwaves saw
                    thousands of fires break out, with one destroying homes at
                    Wennington, east London. This year has already seen hundreds
                    of grass fires and one of the UK's largest ever has been
                    burning near Cannich in Scotland for the past two weeks.
                    More fire crews are now training in skills from southern
                    Europe and the US.
                  </p>
                </header>

                {/* Meta */}
                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                  {/* Author */}
                  <div className="flex items-center sm:mr-4">
                    <a className="block mr-2 shrink-0" href="#0">
                      <img
                        className="rounded-full"
                        src={UserImage07}
                        width="32"
                        height="32"
                        alt="User 04"
                      />
                    </a>
                    <div className="text-sm whitespace-nowrap">
                      By{" "}
                      <a className="font-semibold text-slate-800" href="#0">
                        Monica Fishkin
                      </a>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                    {/* Tags */}
                    <div className="flex -space-x-3 -ml-0.5">
                      <img
                        className="rounded-full border-2 border-white box-content"
                        src={Avatar04}
                        width="42"
                        height="42"
                        alt="User 04"
                      />
                    </div>

                    <div className="text-xs inline-flex font-medium items-center  bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1  hover:text-emerald-600 hover:outline outline-1 outline-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                        class="w-4 h-3 fill-slate-400 mr-2 flex-shrink-0 hover:fill-red-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <span>I'm interested</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <figure className="mb-6">
                  <img
                    className="w-full rounded-sm"
                    src={MeetupImage}
                    width="640"
                    height="360"
                    alt="Meetup"
                  />
                </figure>

                {/* Post content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Details
                  </h2>
                  <p className="mb-6">
                    Fire chiefs are particularly looking to expand the number of
                    specialist teams trained in "burn suppression" techniques -
                    the deliberate burning of land to keep a fire contained. At
                    the moment, just five UK units across more than 50 fire and
                    rescue services specialise in the "fighting fire with fire"
                    technique, mostly in moorland areas. With more than 90
                    buildings destroyed by wildfires close to urban areas last
                    July, more units - including those in services that straddle
                    urban and rural areas - would be trained in new ways of
                    wildfire fighting.
                  </p>
                  <p className="mb-6">
                    "All of this learning from international partners, who are
                    probably still some years ahead of us, is a very sensible
                    way of trying to get us ahead of the curve," he said. It is
                    hoped a UK-wide training programme will be set up as part of
                    a national action plan drawn up in response to the lessons
                    learnt from last year's blazes. One of the services leading
                    the way is Surrey Fire and Rescue, which has already dealt
                    with more than 80 wildfires this year. The most recent
                    wildfire was last month at Frensham Common, near Farnham, a
                    popular beauty spot. The cause of the 10-hectare fire is not
                    yet known - but the damage is clear to see.
                  </p>
                  <p className="mb-6">
                    Where once there was rich heathland, home to rare species,
                    including sand lizards, there is now desolation. If the
                    immediate impact is shocking, the long-term effects are
                    equally concerning. "Whilst we can save some of these
                    animals that survived the fire, we lose an awful lot and we
                    lose all that biodiversity. It takes years, if not decades,
                    for that to come back again," explained trustee Howard Inns.
                    For countryside ranger Darren Hill, who supported
                    firefighters tackling the blaze here, seeing the aftermath,
                    and knowing more wildfires could be on their way, is hard to
                    take.
                  </p>
                </div>
                <hr className="my-6 border-t border-slate-200" />

                {/* Photos */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Photos (3)
                  </h2>
                  <div className="grid grid-cols-3 gap-4 my-6">
                    <a className="block" href="#0">
                      <img
                        className="w-full rounded-sm"
                        src={MeetupPhoto01}
                        width="203"
                        height="152"
                        alt="Meetup  01"
                      />
                    </a>
                    <a className="block" href="#0">
                      <img
                        className="w-full rounded-sm"
                        src={MeetupPhoto02}
                        width="203"
                        height="152"
                        alt="Meetup  02"
                      />
                    </a>
                    <a className="block" href="#0">
                      <img
                        className="w-full rounded-sm"
                        src={MeetupPhoto03}
                        width="203"
                        height="152"
                        alt="Meetup  03"
                      />
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-t border-slate-200" />

                {/* Comments */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Comments (3)
                  </h2>
                  <ul className="space-y-5 my-6">
                    {/* Comment */}
                    <li className="flex items-start">
                      <a className="block mr-3 shrink-0" href="#0">
                        <img
                          className="rounded-full"
                          src={UserImage07}
                          width="32"
                          height="32"
                          alt="User 07"
                        />
                      </a>
                      <div className="grow">
                        <div className="text-sm font-semibold text-slate-800 mb-2">
                          Taylor Nieman
                        </div>
                        <div className="italic">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.”
                        </div>
                      </div>
                    </li>
                    {/* Comment */}
                    <li className="flex items-start">
                      <a className="block mr-3 shrink-0" href="#0">
                        <img
                          className="rounded-full"
                          src={UserImage08}
                          width="32"
                          height="32"
                          alt="User 08"
                        />
                      </a>
                      <div className="grow">
                        <div className="text-sm font-semibold text-slate-800 mb-2">
                          Meagan Loyst
                        </div>
                        <div className="italic">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.”
                        </div>
                      </div>
                    </li>
                    {/* Comment */}
                    <li className="flex items-start">
                      <a className="block mr-3 shrink-0" href="#0">
                        <img
                          className="rounded-full"
                          src={UserImage02}
                          width="32"
                          height="32"
                          alt="User 02"
                        />
                      </a>
                      <div className="grow">
                        <div className="text-sm font-semibold text-slate-800 mb-2">
                          Frank Malik
                        </div>
                        <div className="italic">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.”
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <hr className="my-6 border-t border-slate-200" />

                {/* Similar Meetups */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">
                    Similar Meetups
                  </h2>
                  <div className="space-y-8 sm:space-y-5 my-6 lg:mb-0">
                    {/* Related item */}
                    <article className="flex bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
                      {/* Image */}
                      <a
                        className="relative block w-24 sm:w-56 lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-56 shrink-0"
                        href="#0"
                      >
                        <img
                          className="absolute object-cover object-center w-full h-full"
                          src={MeetupThumb}
                          width="220"
                          height="236"
                          alt="Meetup 02"
                        />
                        {/* Like button */}
                      </a>
                      {/* Content */}
                      <div className="grow p-5 flex flex-col">
                        <div className="grow">
                          <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
                            Mon 12 Jun, 2023
                          </div>
                          <a className="inline-flex mb-2" href="#0">
                            <h3 className="text-lg font-bold text-slate-800">
                              Climate change: Is the EU on track to meet its
                              targets?
                            </h3>
                          </a>
                          <div className="text-sm">
                            The EU has pledged to reduce its greenhouse-gas
                            emissions to net zero by 2050. Net zero means a
                            country takes as much of these climate-changing
                            gases - such as carbon dioxide - out of the
                            atmosphere as it puts in.
                          </div>
                        </div>
                        {/* Footer */}
                        <div className="flex justify-between mt-3">
                          {/* Tag */}
                          <div className="text-xs inline-flex font-medium items-center  bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1  hover:text-emerald-600 hover:outline outline-1 outline-emerald-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                              stroke="currentColor"
                              class="w-4 h-3 fill-slate-400 mr-2 flex-shrink-0 hover:fill-red-400"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                            <span>I'm interested</span>
                          </div>
                          {/* Avatars */}
                          <div className="flex items-center space-x-2">
                            <div className="flex -space-x-3 -ml-0.5">
                              <img
                                className="rounded-full border-2 border-white box-content"
                                src={Avatar02}
                                width="28"
                                height="28"
                                alt="User 02"
                              />
                              <img
                                className="rounded-full border-2 border-white box-content"
                                src={Avatar03}
                                width="28"
                                height="28"
                                alt="User 03"
                              />
                              <img
                                className="rounded-full border-2 border-white box-content"
                                src={Avatar04}
                                width="28"
                                height="28"
                                alt="User 04"
                              />
                            </div>
                            <div className="text-xs font-medium text-slate-400 italic inline-flex mt-1.5">
                              +132
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 32 32"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="ms-1 w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NoticiaPost;
