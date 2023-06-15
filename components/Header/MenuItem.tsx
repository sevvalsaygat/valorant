import Link from 'next/link';

import { Icons } from '@components';

import { Menu as DropdownMenu } from '@headlessui/react';

type MenuItemType = {
  name: string;
  href: string;
};

type MenuItemPropTypes = {
  name: string;
  items: MenuItemType[];
};

export default function MenuItem({ name, items }: MenuItemPropTypes) {
  const haveAnyItems = items.length > 0;
  return (
    <DropdownMenu as="div" className="relative inline-block text-left">
      <div className="flex flex-row mr-4 items-center">
        <DropdownMenu.Button className="text-gray-50 py-2 px-4 hover:bg-gray-100 rounded-7 font-bold">
          {name}
        </DropdownMenu.Button>

        {haveAnyItems && <Icons.SvgArrowUp className="w-3 h-3 text-white" />}
      </div>
      <DropdownMenu.Items className="absolute ringt-0 mt-2 w-56 origin-top-right divide-y divide-gray-1">
        {items.map((item, index) => (
          <DropdownMenu.Item as="div" key={index}>
            <Link href={item.href}>{item.name}</Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Items>
    </DropdownMenu>
  );
}
