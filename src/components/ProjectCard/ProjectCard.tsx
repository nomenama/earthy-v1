import React from "react";

export interface ProjectCardProps {
    backGroundImg: "bg-forest" | "bg-city" | "bg-wild-life";
    heading: string;
    text: string;
    onClick?: () => void;
}

const ProjectCard = ({ backGroundImg, heading, text, onClick }: ProjectCardProps) => {
    return (
        <div
            className={`flex flex-col justify-start items-start gap-[20px] rounded-md pt-[30px] bg-blend-multiply px-7 pb-7 bg-gray-300 bg-cover bg-no-repeat ${backGroundImg}`}>
            <h3 className="text-heading_03 text-white">{heading}</h3>
            <p className="text-white">{text}</p>

            <button
                onClick={onClick}
                className="button-secondary mt-6 mb-4 backdrop-blur-2xl">
                See more
            </button>
        </div>
    );
};

export default ProjectCard;
