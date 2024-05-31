import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Chip } from "@mui/material";

const SolutionFilter: React.FC<{ solutions: any[] }> = ({ solutions }) => {

    



    const renderSolutionGrid = () => {
        return solutions.map((solution) => (
            <ImageCard
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl}
                linkUrl={solution.linkUrl}
            />
        ));
    };

    return <div className="solution-grid">{renderSolutionGrid()}</div>;
};



export default SolutionFilter;
