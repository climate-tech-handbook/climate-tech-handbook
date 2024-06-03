import React, {useState} from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Chip } from "@mui/material";


const SolutionFilter: React.FC<{ solutions: any[] }> = ({ solutions }) => {

    const uniqueTags: string[] = [];
    const selectedTags = new Set<string>();

    const findTags = () => {
        solutions.forEach((solution) => {
            solution.tags.forEach((tag: string) => {
                if (!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag);
                }
            });
        });
    };

    //TODO - update tags function to add or remove tags from the selectedTags set - WORKS
    const updateTags = (tag) => {
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
        } else {
            selectedTags.add(tag);
        }
    };

    const renderFilterChips = () => {
        findTags();

        return uniqueTags.map((tag) => (
            <Chip
                label={tag}
                onClick={() => {
                    updateTags(tag);
                }}
            />
        ));
    };


    //TODO - update grid function to filter solutions based on selected tags
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

    return (
        <div>
            <div>
                {renderFilterChips()}
            </div>
            <div className="solution-grid" style={{display:"flex", flexWrap:"wrap"}}>
            {renderSolutionGrid()}</div>
        </div>

        )
};



export default SolutionFilter;
