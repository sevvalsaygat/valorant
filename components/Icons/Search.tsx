import React from 'react';

type SvgSearchType = {
  className?: string;
};

const SvgSearch = ({ className }: SvgSearchType) => {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 18 18">
      <path
        d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default SvgSearch;
