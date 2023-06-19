import React, { useState, useRef } from 'react';
import Link from 'next/link';

import { useOnClickOutside } from 'usehooks-ts';
import { Menu as DropdownMenu } from '@headlessui/react';

import { Icons } from '@components';

type MenuItemType = {
  name: string;
  href: string;
};

type MenuItemPropTypes = {
  name: string;
  items: MenuItemType[];
};

function ArrowIcon({ isOpen }: { isOpen: boolean }): JSX.Element {
  if (isOpen) {
    return <Icons.SvgArrowUp className="w-3 h-3 text-white absolute" />;
  }

  return <Icons.SvgArrowDown className="w-3 h-3 text-white absolute" />;
}

export default function MenuItem({ name, items }: MenuItemPropTypes) {
  const ref = useRef(null);

  const haveAnyItems = items.length > 0;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <DropdownMenu as="div" className="relative inline-block text-left">
      <DropdownMenu.Button
        ref={ref}
        className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 font-bold flex flex-row items-center"
        onClick={toggleDropdown}
      >
        {name}
        {haveAnyItems && (
          <div className="flex relative items-center px-2">
            <ArrowIcon isOpen={isOpen} />
          </div>
        )}
      </DropdownMenu.Button>
      <DropdownMenu.Items className="absolute ringt-0 mt-2 w-56 origin-top-right divide-y divide-gray-1 border-transparent rounded-7 bg-gray-250">
        {items.map((item, index) => (
          <DropdownMenu.Item as="div" key={index} className="py-3 px-4 border-t-4 w-full">
            <Link
              className="flex text-13 text-gray-300 px-3 py-2 hover:bg-gray-200 border-transparent rounded-7"
              href={item.href}
            >
              {item.name}
            </Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Items>
    </DropdownMenu>
  );
}
