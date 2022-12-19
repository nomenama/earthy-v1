import React from "react";

export interface SecondaryTitleProps {
    heading: string;
}

const SecondaryTitle = ({ heading }: SecondaryTitleProps) => {
    return (
        <div className="w-full flex justify-start items-center gap-[20px]">
            <h2 className="text-[2rem] md:text-[2.5rem] text-dark_02">{heading}</h2>
            <div className="flex-1 h-[1px] bg-dark_05" />
        </div>
    );
};

export default SecondaryTitle;
