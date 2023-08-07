import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import styles from "./SolutionsList.module.css";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

const SolutionsList = () => {
  return (
    <div className={clsx("listContainer", styles.listContainer)}>
        <ImageCard 
            title="Electricity"
            description="Electricity, once a significant greenhouse gas contributor, is now crucial to climate change solutions."
            imageUrl={useBaseUrl("/img/electricity.png")}
            linkUrl={useBaseUrl("/sector-electricity")}
        />
        <ImageCard 
            title="Food, Agriculture, and Land Use"
            description="The Food, Agriculture, and Land Use sector is essential in the worldwide effort to combat climate change."
            imageUrl={useBaseUrl("/img/food-agriculture-and-land-use.jpg")}
            linkUrl={useBaseUrl("sector-food-agriculture-and-land-use")}
        />
        <ImageCard 
            title="Industry"
            description="The industry sector can contribute to low-carbon innovation."
            imageUrl={useBaseUrl("/img/industry.jpg")}
            linkUrl={useBaseUrl("sector-industry")}
        />
        <ImageCard 
            title="Transportation"
            description="Transportation emits CO2 from fossil fuels in vehicles."
            imageUrl={useBaseUrl("/img/transportation.jpeg")}
            linkUrl={useBaseUrl("sector-transportation")}
        />
        <ImageCard 
            title="Buildings"
            description="Buildings account for nearly 40% of global energy consumption and around one-third of global greenhouse gas emissions."
            imageUrl={useBaseUrl("/img/buildings.jpg")}
            linkUrl={useBaseUrl("sector-buildings")}
        />
        <ImageCard 
            title="Land Sinks"
            description="Land sinks are a type of carbon sequestration that refers to the capture and storage of carbon dioxide in the soil."
            imageUrl={useBaseUrl("/img/land-sinks.jpg")}
            linkUrl={useBaseUrl("sector-land-sinks")}
        />
        <ImageCard 
            title="Coastal and Ocean Sinks"
            description="Coastal and ocean sinks can absorb and sequester large amounts of carbon dioxide."
            imageUrl={useBaseUrl("/img/coastal-and-ocean-sinks.png")}
            linkUrl={useBaseUrl("sector-coastal-and-ocean-sinks")}
        />
        <ImageCard 
            title="Engineered Sinks"
            description="Engineered sinks can help conserve resources and reduce the carbon footprint associated with water consumption."
            imageUrl={useBaseUrl("/img/biochar-production.jpg")}
            linkUrl={useBaseUrl("sector-engineered-sinks")}
        />
        <ImageCard 
            title="Health and Education"
            description="Health and education can contribute to building resilience, promoting sustainable practices, and fostering informed decision-making."
            imageUrl={useBaseUrl("/img/healthy-lifestyle.jpg")}
            linkUrl={useBaseUrl("sector-health-and-education")}
        />
        <ImageCard 
            title="Climate Adaptation"
            description="Climate adaptation is the process of adjusting and responding to the impacts of climate change."
            imageUrl={useBaseUrl("/img/adaptation.jpg")}
            linkUrl={useBaseUrl("sector-climate-adaptation")}
        />
        <ImageCard 
            title="Media and Journalism"
            description="Media and journalism can drive systemic change, mobilize public support, and hold those in power accountable."
            imageUrl={useBaseUrl("/img/journalism.jpg")}

            linkUrl={useBaseUrl("sector-media-and-journalism")}
        />
        <ImageCard 
            title="Advocacy or Policy"
            description="Advocacy acts as a catalyst for change, mobilizing individuals, communities, and decision-makers to take meaningful action against climate change."
            imageUrl={useBaseUrl("/img/advocacy-and-policy.jpg")}
            linkUrl={useBaseUrl("sector-advocacy-or-policy")}
        />
        {/* hidden for now */}
        {/* <ImageCard 
            title="Other"
            description="Other refers to a wide variety of climate tech solutions that don't fall neatly into any one category."
            imageUrl={useBaseUrl("https://www.silverinstitute.org/wp-content/uploads/2017/05/silverinindustry.jpg")}
            linkUrl={useBaseUrl("sector-other")}
        /> */}
    </div>
  )
}

export default SolutionsList