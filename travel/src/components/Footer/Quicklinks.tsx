import React from 'react';
import { Play } from 'lucide-react';
import Link from 'next/link';

const Quicklinks = () => {
    const listItems = [
        {
            link: "/flight",
            label: "Flight",
        },
        {
            link: "/tour",
            label: "Tour",
        },
        {
            link: "/about",
            label: "About",
        },
        {
            link: "/terms-of-service",
            label: "Terms of Service",
        },
        {
            link: "/privacy-policy",
            label: "Privacy Policy",
        },
        {
            link: "/report-an-issue",
            label: "Report an issue",
        },
    ];


    return (
        <div className="w-full max-w-md p-2 sm:p-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-5 text-amber-500">
                Quick Links
            </h2>
            <ul className="space-y-1 sm:space-y-2">
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-1 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                        <Play
                            className="!w-4 h-4 !sm:w-5 sm:h-5 text-gray-100 group-hover:text-amber-500 transition-colors"
                        />
                        <Link
                            className="text-sm sm:text-base text-gray-100 hover:text-amber-500 transition-colors"
                            href={item?.link}
                        >
                            {item?.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quicklinks;