import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Categories({dropdownName, options}) {
  return (
    <Menu as="div" className="relative inline-block text-left mt-5 ml-2">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:text-blue-500">
          {dropdownName}
          <ArrowDropDownOutlinedIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        // as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
        {options?.length > 0 && options.map((item, index) => (
              <Menu.Item  key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {item.optionName}
                  </a>
                )}
              </Menu.Item>
              ))}
              </div>
          </Menu.Items>
      </Transition>
    </Menu>
  )
}
