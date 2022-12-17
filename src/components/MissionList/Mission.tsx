import React from "react";

export interface MissionProps {
    icon?: React.ReactNode; //react-icons
    heading: string;
    text: string;
}

const Mission = ({ icon, heading, text }: MissionProps) => {
    return (
        <div className="flex justify-start items-start gap-y-[20px] gap-x-[40px]">
            <div className="bg-green_02 p-2 rounded-md text-[24px] text-white">{icon}</div>

            <div className="flex flex-col gap-[5px]">
                <h3 className="text-dark_02 text-start font-bold leading-none text-2xl capitalize">
                    {heading}
                </h3>
                <p className="text-dark_03 leading-7">{text}</p>
            </div>
        </div>
    );
};

export default Mission;
