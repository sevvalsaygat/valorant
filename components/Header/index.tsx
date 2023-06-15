import { Icons } from '@components';
import MenuItem from './MenuItem';

type HeaderPropsType = {};

const MENU = [
  {
    name: 'OYUN BİLGİSİ',
    items: [
      {
        name: 'Şampiyonlar',
        href: '/champions',
      },
      {
        name: 'Şampiyonlar savaşı',
        href: '/tft',
      },
    ],
  },
  {
    name: 'MEDYA',
    items: [],
  },
  {
    name: 'HABERLER',
    items: [],
  },
  {
    name: 'LİDERLİK TABLOSU',
    items: [],
  },
  {
    name: 'DESTEK',
    items: [
      {
        name: 'Destek',
        href: '/support',
      },
      {
        name: 'ÖZELLİKLER',
        href: '/features',
      },
      {
        name: 'DESTEK',
        href: '/support',
      },
      {
        name: 'TOPLULUK İLKELERİ',
        href: '/community',
      },
    ],
  },
  {
    name: 'SOSYAL',
    items: [
      {
        name: 'Sosyal Medya',
        href: '/social',
      },
      {
        name: 'YouTube',
        href: '/youtube',
      },
      {
        name: 'Instagram',
        href: '/instagram',
      },
      {
        name: 'Facebook',
        href: '/facebook',
      },
      {
        name: 'Twitter',
        href: '/twitter',
      },
      {
        name: 'Discord',
        href: '/discord',
      },
    ],
  },
  {
    name: 'Daha Fazlası',
    items: [
      {
        name: 'Daha Fazlası',
        href: '/more',
      },
      {
        name: 'ESPOR',
        href: '/espor',
      },
    ],
  },
];

const Header = (props: HeaderPropsType) => {
  return (
    <div className="bg-black px-12 py-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Icons.SvgLogo className="text-white cursor-pointer hover:text-red-300" />
          <Icons.SvgRiotBar className="ml-7" />
        </div>
        <div className="flex flex-row align-center items-center">
          <div className="ml-9 mr-10 text-13">
            {MENU.map((item, index) => (
              <MenuItem key={index} name={item.name} items={item.items} />
            ))}
          </div>
        </div>
        <div className="flex flex-row align-center items-center">
          <div className="bg-gray-150 rounded-2xl py-1 px-3">
            <Icons.SvgSearch className=" text-white w-6 h-9 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            <Icons.SvgWorld className="ml-2" />
          </div>
          <div className="flex ml-3 border-transparent px-4 py-2 rounded-12 text-13 text-black font-bold bg-gradient-to-br cursor-pointer from-red-150 via-red-100 to-red-50 hover:bg-gradient-to-tr">
            HEMEN OYNA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
