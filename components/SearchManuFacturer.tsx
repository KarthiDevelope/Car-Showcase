"use client";
import { SearchManufacturorProps } from '@/types'
import React, { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers } from '@/constants';

const SearchManuFacturer = ({ manufacturor, setManufacturor }: SearchManufacturorProps) => {
    const [query, setQuery] = useState('');

    const filterManufacturer = query === "" ? manufacturers : manufacturers.filter((item) => (
        item?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturor} onChange={setManufacturor}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                            src="/car-logo.svg"
                            className='ml-4'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Volswagen'
                        displayValue={(manufacturor: string) => manufacturor}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filterManufacturer?.map((item, index) => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => `
          relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}
        `}
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >
                                                {item}
                                            </span>
                                            {selected && active && (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 text-white`}
                                                >
                                                    {/* Additional content for selected and active state, if needed */}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>

                </div>
            </Combobox>
        </div>
    )
}

export default SearchManuFacturer