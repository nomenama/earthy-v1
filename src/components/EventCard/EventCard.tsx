import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface EventCardProps {
    date: number;
    month:
        | "Jan"
        | "Feb"
        | "March"
        | "April"
        | "May"
        | "June"
        | "Jul"
        | "Aug"
        | "Sep"
        | "Oct"
        | "Nov"
        | "Dec";
    title: string;
    onClick: () => void;
}

const EventCard = ({ date, month, title, onClick }: EventCardProps) => {
    return (
        <div className="p-5 rounded-md bg-secondary flex items-center gap-8">
            <div className="flex flex-col gap-1">
                <h3 className="text-heading_02 text-dark_02 leading-none">{date}</h3>
                <h4>{month}</h4>
            </div>

            <div className="flex flex-col gap-3">
                <div className="text-sm md:text-[1rem] flex justify-start items-center gap-[20px]">
                    <p className="uppercase text-dark_02 font-medium">Next Events</p>
                    <div className="h-[2px] w-[44px] bg-dark_02" />
                </div>
                <h3 className="max-w-[400px] text-heading_04 lg:text-heading_03 text-dark_02 font-bold">
                    {title}
                </h3>
            </div>

            <div
                className="p-3 rounded-full bg-white cursor-pointer ml-auto"
                onClick={onClick}>
                <FiArrowRight
                    size={30}
                    className="text-dark_02 hover:text-primary"
                />
            </div>
        </div>
    );
};

export default EventCard;
