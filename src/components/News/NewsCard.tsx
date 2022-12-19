import React from "react";

interface NewsCardsProps {
    imgSrc: string;
    title: string;
    text: string;
}

const NewsCard = ({ imgSrc, title, text }: NewsCardsProps) => {
    return (
        <div className="max-w-[302px] flex flex-col justify-start items-start gap-3">
            <img
                src={imgSrc}
                alt="thumbnail"
                className="w-fit object-cover"
            />
            <h4 className="text-[#1c1d28] text-xl font-medium">{title}</h4>
            <p className="text-dark_03">{text}</p>
        </div>
    );
};

export default NewsCard;
