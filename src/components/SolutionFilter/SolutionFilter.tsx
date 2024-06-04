import React, {useState} from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Chip } from "@mui/material";
//TODO - use MUI Stack to create container for chips

//TODO - Create solution interface to include in solutions array for type checking
const SolutionFilter: React.FC<{ solutions: any[] }> = ({ solutions }) => {

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const uniqueTags: string[] = [];

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
    const updateTags = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
        console.log(selectedTags);
    };


    //TODO - conditionally style chips based on dynamic prop (determine which one) (classes?)
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

    const renderFilteredGrid = () => {
        const filteredSolutions = solutions.filter((solution) => {
            return solution.tags.some((tag) => selectedTags.includes(tag));
        });

        return filteredSolutions.map((solution) => (
            <ImageCard
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl}
                linkUrl={solution.linkUrl}
            />
        ));
    };

    const renderAllSolutions = () => {
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
                {selectedTags.length ? renderFilteredGrid() : renderAllSolutions()}
            </div>
        </div>
        )
};



export default SolutionFilter;
