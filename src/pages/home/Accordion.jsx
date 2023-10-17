import { useState } from "react";
import { BiPlusMedical } from 'react-icons/bi';

const Accordion = ({ title, content, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full py-2 px-6 text-left text-base font-semibold flex items-center"
                onClick={toggleAccordion}
            >
                <BiPlusMedical />
                {title}
            </button>
            {isOpen && (
                <div className="px-6 bg-white">
                    <p className="text-gray-800 font-bold">{content}</p>
                    <p className="text-gray-800">{description}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;