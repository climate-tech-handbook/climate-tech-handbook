import React, {useState} from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Chip } from "@mui/material";
import cslx from "clsx";
import styles from "./SolutionFilter.module.css";
//TODO - use MUI Stack to create container for chips

//TODO - Create solution interface to include in solutions array for type checking?
const SolutionFilter: React.FC<{ solutions: any[] }> = ({ solutions }) => {

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const uniqueTags: string[] = [];

    // Finds all unique tags in the solutions array.
    const findTags = () => {
        solutions.forEach((solution) => {
            solution.tags.forEach((tag: string) => {
                if (!uniqueTags.includes(tag)) {
                    uniqueTags.push(tag);
                }
            });
        });
    };

    // Updates the selected tags based on the tag that was clicked.
    const updateTags = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    // Renders all of the menu options based on the passed in solutions.
    const renderFilterChips = () => {
        findTags();
        return uniqueTags.map((tag) => (
            <Chip
                label={tag[0].toUpperCase() + tag.slice(1)}
                onClick={() => {
                    updateTags(tag);
                }}
                className={cslx(styles.solutionFilterChip)}
                sx={{
                    fontSize: "14px",
                    width: "100%",
                    height: "37px",
                    fontWeight:"500",
                    borderRadius: "10px",
                    color: selectedTags.includes(tag) ? "#FFF4F3" : "#AF1107",
                    backgroundColor: selectedTags.includes(tag) ? "#AF1107" : "#FFF4F3",
                    border: "1px solid #AF1107",
                }}
            />
        ));
    };

    // Renders the grid of solutions based on the selectedTags array.
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

    // Renders all of the solutions in the solutions array.
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
            <div className={cslx(styles.solutionFilterMenu)}>
                {renderFilterChips()}
            </div>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {selectedTags.length ? renderFilteredGrid() : renderAllSolutions()}
            </div>
        </div>
        )
};



export default SolutionFilter;
