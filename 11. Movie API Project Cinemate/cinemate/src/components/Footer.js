import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer class="bg-white shadow dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030
          <Link
            to="https://flowbite.com/"
            target="_blank"
            className="hover:underline"
          >
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline">
              Youtube
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
