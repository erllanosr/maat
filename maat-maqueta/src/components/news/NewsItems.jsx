import React from "react";
import { Link } from "react-router-dom";

import MeetupsThumb01 from "../../resources/img/meetups-thumb-01.jpg";
import MeetupsThumb02 from "../../resources/img/meetups-thumb-02.jpg";
import MeetupsThumb03 from "../../resources/img/meetups-thumb-03.jpg";
import MeetupsThumb04 from "../../resources/img/meetups-thumb-04.jpg";
import MeetupsThumb05 from "../../resources/img/meetups-thumb-05.jpg";
import MeetupsThumb06 from "../../resources/img/meetups-thumb-06.jpg";
import MeetupsThumb07 from "../../resources/img/meetups-thumb-07.jpg";
import MeetupsThumb08 from "../../resources/img/meetups-thumb-08.jpg";
import UserImage01 from "../../resources/img/avatar-01.jpg";
import UserImage02 from "../../resources/img/avatar-02.jpg";
import UserImage03 from "../../resources/img/avatar-03.jpg";
import UserImage04 from "../../resources/img/avatar-04.jpg";
import UserImage05 from "../../resources/img/avatar-05.jpg";
import UserImage06 from "../../resources/img/avatar-06.jpg";
function NewsItems() {
  return (
    <div className="grid xl:grid-cols-1 gap-6">
      {/* Item 1 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb01}
            width="220"
            height="236"
            alt="Meetup 01"
          />
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Mon 12 Jun, 2023
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                Wildfires: UK to set up new Mediterranean-style specialist units
              </h3>
            </Link>
            <div className="text-sm">
              Firefighters will deploy new techniques learnt in the world's
              worst wildfire hotspots as climate change raises the risk level in
              the UK this summer.
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
                  src={UserImage04}
                  width="42"
                  height="42"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic inline-flex mt-1">
                22
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 2 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb02}
            width="220"
            height="236"
            alt="Meetup 02"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Mon 12 Jun, 2023
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                New York &amp; New Jersey Virtual Retreat 2021
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage02}
                  width="42"
                  height="42"
                  alt="User 02"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                132{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 3 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb03}
            width="220"
            height="236"
            alt="Meetup 03"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Sun 11 Jun, 2023
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                The World of AI and Machine Learning — Open Chat
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage03}
                  width="42"
                  height="42"
                  alt="User 03"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                12{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 4 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb04}
            width="220"
            height="236"
            alt="Meetup 04"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Sun 11 Jun, 2023
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                NYC Code &amp; Coffee 2.0 @ Freehold Brooklyn
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage04}
                  width="42"
                  height="42"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                17{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 5 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb05}
            width="220"
            height="236"
            alt="Meetup 05"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Sat 10 Jun, 2023
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                Acme Inc. London Meetup: Women in Tech Night
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage05}
                  width="42"
                  height="42"
                  alt="User 05"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                117{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 6 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb06}
            width="220"
            height="236"
            alt="Meetup 06"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Thu 6 Jan, 2022
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                Founder Worldwide - First Meetup of 2022!
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage03}
                  width="28"
                  height="28"
                  alt="User 03"
                />
                <img
                  className="rounded-full border-2 border-white box-content"
                  src={UserImage05}
                  width="28"
                  height="28"
                  alt="User 05"
                />
                <img
                  className="rounded-full border-2 border-white box-content"
                  src={UserImage04}
                  width="28"
                  height="28"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                64{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 7 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb07}
            width="220"
            height="236"
            alt="Meetup 07"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Thu 6 Jan, 2022
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                NYC Blockchain Network - Monthly 3rd Thursday Meetup
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage02}
                  width="28"
                  height="28"
                  alt="User 02"
                />
                <img
                  className="rounded-full border-2 border-white box-content"
                  src={UserImage04}
                  width="28"
                  height="28"
                  alt="User 04"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                112{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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

      {/* Item 8 */}
      <article className="flex bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-2">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/noticia"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb08}
            width="220"
            height="236"
            alt="Meetup 08"
          />
          {/* Like button */}
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-emerald-500 uppercase mb-2">
              Fri 7 Jan, 2022
            </div>
            <Link className="inline-flex mb-2" to="/noticia">
              <h3 className="text-lg font-bold text-slate-800">
                Build a Personal Brand and Boost Your Career in AI!
              </h3>
            </Link>
            <div className="text-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
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
                  src={UserImage01}
                  width="28"
                  height="28"
                  alt="User 01"
                />
                <img
                  className="rounded-full border-2 border-white box-content"
                  src={UserImage05}
                  width="28"
                  height="28"
                  alt="User 05"
                />
                <img
                  className="rounded-full border-2 border-white box-content"
                  src={UserImage02}
                  width="28"
                  height="28"
                  alt="User 02"
                />
              </div>
              <div className="text-xs font-medium text-slate-400 italic mt-1 inline-flex">
                32{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ms-1 w-6 h-6"
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
  );
}

export default NewsItems;
