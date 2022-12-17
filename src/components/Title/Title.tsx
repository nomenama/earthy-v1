import React from "react";

const Title = ({ title }: { title: string }) => {
    return (
        <div className="flex justify-start items-center gap-[20px]">
            <div className="w-[72px] h-[2px] bg-[#1d2130]" />
            <p className="text-dark_02 uppercase font-bold">{title}</p>
        </div>
    );
};

export default Title;
