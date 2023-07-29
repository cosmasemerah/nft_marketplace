import React from 'react';

const SearchInput = () => {
  return (
    <form>
      <label className="relative block">
        <span className="sr-only">Search</span>

        <input
          className="block w-full rounded-3xl border-2 border-secondary bg-transparent px-5 py-3 shadow-sm placeholder:text-caption"
          placeholder="Search your favorie NFTs"
          type="text"
          name="search"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.913 15.913C16.2059 15.6201 16.6808 15.6201 16.9737 15.913L21.5299 20.4693C21.8228 20.7622 21.8228 21.237 21.5299 21.5299C21.237 21.8228 20.7622 21.8228 20.4693 21.5299L15.913 16.9737C15.6201 16.6808 15.6201 16.2059 15.913 15.913Z"
              fill="white"
            />
          </svg>
        </span>
      </label>
    </form>
  );
};

export default SearchInput;
