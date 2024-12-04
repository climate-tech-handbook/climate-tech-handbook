import React from 'react'
import styles from "./ImageCard.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    tags?: any[];
}

const ImageCard: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    linkUrl,
}) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(linkUrl);
    };

    const characterLimit = 65;
    let truncatedDescription = description;
    if (truncatedDescription.length > characterLimit) {
        // Find the last space within the character limit
        const lastSpaceIndex = truncatedDescription.lastIndexOf(' ', characterLimit);
        if (lastSpaceIndex !== -1) {
            truncatedDescription = truncatedDescription.substring(0, lastSpaceIndex) + '...';
        } else {
            truncatedDescription = truncatedDescription.substring(0, characterLimit) + '...';
        }
    }

    return (
        <div className={clsx("cardContainer", styles.cardContainer)} onClick={handleClick}>
            <img className={clsx("img", styles.cardImg)} src={imageUrl} alt={title} />
            <div className={clsx("content", styles.content)}>
                <h2>{title}</h2>
                <p>{truncatedDescription}
                    <Link
                        to={linkUrl}
                        className={clsx(
                            styles.cardButton,
                        )}
                    > <AiOutlineArrowRight />
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default ImageCard
