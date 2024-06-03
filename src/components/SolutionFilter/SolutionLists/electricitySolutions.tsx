// An array of objects containing electricity solutions image card information.

const electricitySolutions = [
    {
        title: "Utility-Scale Energy Storage",
        description: "Large-scale energy storage for storing excess renewable energy and meeting peak demand.",
        imageUrl: "/img/utility-scale-energy-storage.jpg",
        linkUrl: "solution-utility-scale-energy-storage",
        tag: ['storage']
    },
    {
        title: "Distributed Energy Storage",
        description: "Local energy storage systems that store and supply renewable energy to nearby consumers.",
        imageUrl: "/img/distributed-energy-storage.jpg",
        linkUrl: "solution-distributed-energy-storage",
        tag: ['storage']
    },
    {
        title: "Microgrids",
        description: "Localized power grids that operate independently or in conjunction with the main grid.",
        imageUrl: "/img/microgrids.jpg",
        linkUrl: "solution-microgrids",
        tag: ['building']
    },
    {
        title: "Grid Flexibility",
        description: "Enhancing grid adaptability and stability to integrate diverse renewable energy sources.",
        imageUrl: "/img/grid-flexibility.jpg",
        linkUrl: "../solution-grid-flexibility",
        tag: ['source']
    },
    {
        title: "Net Zero Buildings",
        description: "Buildings designed to produce as much energy as they consume, achieving net-zero emissions.",
        imageUrl: "/img/net-zero-buildings.jpg",
        linkUrl: "../solution-net-zero-buildings",
        tag: ['building']
    },
    {
        title: "Building Retrofitting",
        description: "The process of making improvements to an existing building to make it more energy-efficient and reduce its carbon footprint.",
        imageUrl: "/img/building-retrofitting.jpg",
        linkUrl: "../solution-building-retrofitting",
        tag: ['building']
    },
    {
        title: "Micro Wind Turbines",
        description: "Small-scale wind turbines designed for individual or localized energy generation.",
        imageUrl: "/img/micro-wind-turbines.jpg",
        linkUrl: "../solution-micro-wind-turbines",
        tag: ['source']
    },
    {
        title: "Dynamic Glass",
        description: "Glass with advanced coatings that can adjust its properties to control heat and light transmission.",
        imageUrl: "/img/dynamic-glass.jpg",
        linkUrl: "../solution-dynamic-glass",
        tag: ['building']
    },
    {
        title: "Green and Cool Roofs",
        description: "Roofing systems designed to mitigate the urban heat island effect and reduce energy consumption.",
        imageUrl: "/img/green-roofing.png",
        linkUrl: "../solution-green-and-cool-roofs",
        tag: ['building']
    },
    {
        title: "Water Distribution Efficiency",
        description: "Using advanced technology and processes to reduce water usage while achieving the same results.",
        imageUrl: "/img/water-distribution-efficiency.webp",
        linkUrl: "../solution-water-distribution-efficiency",
        tag: ['efficiency']
    },
    {
        title: "Low-Flow Fixtures",
        description: "Innovative fixtures designed to minimize water flow and conserve water resources.",
        imageUrl: "/img/low-flow-fixtures.png",
        linkUrl: "../solution-low-flow-fixtures",
        tag: ['efficiency']
    },
    {
        title: "Ocean Power",
        description: "Harnessing the energy from ocean waves and tides to generate electricity.",
        imageUrl: "/img/ocean-power.png",
        linkUrl: "../solution-ocean-power",
        tag: ['source']
    },
    {
        title: "Small Hydropower",
        description: "Hydropower systems designed for localized electricity generation using small water streams.",
        imageUrl: "/img/small-hydropower.png",
        linkUrl: "../solution-small-hydropower",
        tag: ['source']
    },
    {
        title: "Biomass Power",
        description: "Electricity generation from organic materials, like plants, agricultural waste, and wood.",
        imageUrl: "/img/biomass-power-plant.jpg",
        linkUrl: "../solution-biomass-power",
        tag: ['source']
    },
    {
        title: "Nuclear Power",
        description: "Electricity generation from nuclear reactions, producing low greenhouse gas emissions.",
        imageUrl: "/img/nuclear-power.webp",
        linkUrl: "../solution-nuclear-power",
        tag: ['source']
    },
    {
        title: "Solar Hot Water",
        description: "Using solar energy to heat water for various applications, such as domestic or industrial use.",
        imageUrl: "/img/solar-hot-water.webp",
        linkUrl: "../solution-solar-hot-water",
        tag: ['source']
    },
    {
        title: "Landfill Methane Capture",
        description: "Extracting methane from landfills to prevent emissions and utilize it for energy production.",
        imageUrl: "/img/landfill-methane-capture.gif",
        linkUrl: "../solution-landfill-methane-capture",
        tag: ['storage']
    },
    {
        title: "High-Efficiency Heat Pumps",
        description: "Heat pumps that efficiently transfer heat between indoors and outdoors for heating and cooling.",
        imageUrl: "/img/high-efficiency-heat-pumps.png",
        linkUrl: "../solution-high-efficiency-heat-pumps",
        tag: ['efficiency']
    },
    {
        title: "Methane Digesters",
        description: "Systems that capture methane from organic waste, converting it into usable biogas.",
        imageUrl: "/img/methane-digesters.jpg",
        linkUrl: "../solution-methane-digesters",
        tag: ['storage']
    },
    {
        title: "Geothermal Power",
        description: "Generating electricity using the Earth's internal heat as a renewable energy source.",
        imageUrl: "/img/geothermal-power.jpg",
        linkUrl: "../solution-geothermal-power",
        tag: ['source']
    },
    {
        title: "District Heating",
        description: "Supplying heat to multiple buildings from a centralized source for energy efficiency.",
        imageUrl: "/img/district-heating.jpg",
        linkUrl: "../solution-district-heating",
        tag: ['efficiency']
    },
    {
        title: "Waste to Energy",
        description: "Converting waste materials into usable energy through various processes.",
        imageUrl: "/img/waste-to-energy.jpg",
        linkUrl: "../solution-waste-to-energy",
        tag: ['storage']
    },
    {
        title: "Smart Thermostats",
        description: "Intelligent devices that optimize heating and cooling for energy efficiency and comfort.",
        imageUrl: "/img/smart-thermostats.webp",
        linkUrl: "../solution-smart-thermostats",
        tag: ['efficiency']
    },
    {
        title: "High-Performance Glass",
        description: "Advanced glass with improved thermal properties for energy-efficient buildings.",
        imageUrl: "/img/high-performance-glass.png",
        linkUrl: "../solution-high-performance-glass",
        tag: ['efficiency']
    },
    {
        title: "Building Automation Systems",
        description: "Integrating technology to manage and control building systems for optimal energy use.",
        imageUrl: "/img/building-automation.png",
        linkUrl: "../solution-building-automation-systems",
        tag: ['efficiency']
    },
    {
        title: "Offshore Wind Turbines",
        description: "Wind turbines installed in bodies of water to harness wind energy for electricity.",
        imageUrl: "/img/offshore-wind-turbines.jpg",
        linkUrl: "../solution-offshore-wind-turbines",
        tag: ['source']
    },
    {
        title: "LED Lighting",
        description: "Light-emitting diode technology for energy-efficient and long-lasting lighting solutions.",
        imageUrl: "/img/led-lighting.jpg",
        linkUrl: "../solution-led-lighting",
        tag: ['efficiency']
    },
    {
        title: "Insulation",
        description: "Materials used to prevent heat loss or gain, improving energy efficiency in buildings.",
        imageUrl: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NDYzODh8MHwxfHNlYXJjaHwxfHxJbnN1bGF0aW9ufGVufDB8fHx8MTY4MzY1OTM5NQ&ixlib=rb-4.0.3&q=80&w=1080",
        linkUrl: "../solution-insulation",
        tag: ['efficiency']
    },
    {
        title: "Concentrated Solar Power",
        description: "Solar power systems using mirrors or lenses to concentrate sunlight for electricity generation.",
        imageUrl: "https://images.unsplash.com/photo-1641959165241-9ba4a661ecb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NDYzODh8MHwxfHNlYXJjaHwxfHxDb25jZW50cmF0ZWQlMjBTb2xhciUyMFBvd2VyfGVufDB8fHx8MTY4MzY1ODMzOQ&ixlib=rb-4.0.3&q=80&w=1080",
        linkUrl: "../solution-concentrated-solar-power",
        tag: ['source']
    },
    {
        title: "Distributed Solar Photovoltaics",
        description: "Solar photovoltaic systems distributed across locations for electricity generation.",
        imageUrl: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NDYzODh8MHwxfHNlYXJjaHwxfHxEaXN0cmlidXRlZCUyMFNvbGFyJTIwUGhvdG92b2x0YWljc3xlbnwwfHx8fDE2ODM2NTg0MzY&ixlib=rb-4.0.3&q=80&w=1080",
        linkUrl: "../solution-distributed-solar-photovoltaics",
        tag: ['source']
    },
    {
        title: "Utility-Scale Solar Photovoltaics",
        description: "Large-scale solar photovoltaic systems for electricity production on a utility level.",
        imageUrl: "/img/utility-scale-solar-photovoltaics.jpg",
        linkUrl: "../solution-utility-scale-solar-photovoltaics",
        tag: ['source']
    },
    {
        title: "Onshore Wind Turbines",
        description: "Wind turbines installed on land to harness wind energy for electricity generation.",
        imageUrl: "/img/onshore-wind-turbines.jpg",
        linkUrl: "../solution-onshore-wind-turbines",
        tag: ['source']
    }
];

export default electricitySolutions;
