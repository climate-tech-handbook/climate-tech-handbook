---
title: Solutions Explorer
---

The size of each box represents Project Drawdown's estimated potential emissions reduction (2020-2050) for the sector or solution.

<div  style="width: 100%; height: 666px;">

    <style>
        #explorer_treemap_chart {
            width: 100%;
            height: 100%;
            margin: 0.1em;
        }

        .explorer-tooltip {
            background-color: white;
            border: 0.05rem solid #448aff;
            border-radius: 0.2em;
        }

        .explorer-tooltip > h4 {
            background-color: #00bfa5;
            font-weight: bold;
            margin: 0;
            padding: 0.5em;
        }

        .explorer-tooltip > p {
            padding: 0 0.5em;
        }

        .explorer-tooltip .tooltip-instructions {
            font-style: italic;
        }
    </style>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <script type="text/javascript">
        google.charts.load('current', {'packages':['treemap']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            const rootName = 'All'

            let sectorNames = []
            function sectorName(sector){
                sectorNames.push(sector)
                return sector
            }
            const electricitySectorName = sectorName('Electricity')
            const foodAgLandSectorName = sectorName('Food, Agriculture, and Land Use')
            const industrySectorName = sectorName('Industry')
            const transportationSectorName = sectorName('Transportation')
            const buildingsSectorName = sectorName('Buildings')
            const landSinksSectorName = sectorName('Land Sinks')
            const coastalAndOceanSinksSectorName = sectorName('Coastal and Ocean Sinks')
            const engineeredSinksSectorName = sectorName('Engineered Sinks')
            const healthAndEducationSectorName = sectorName('Health and Education')

            var data = google.visualization.arrayToDataTable([
                ['Solution',  'Parent',   'Gt CO2-eq Reduction (2020-2050)',  'Max Gt CO2-eq Reduction (2020-2050)'],

                // Root
                [rootName,    null,   0,  0],

                // Sectors
                [electricitySectorName, rootName, 308.7,  420.6],
                [foodAgLandSectorName,    rootName,  269.25, 312],
                [industrySectorName,    rootName,  154.7, 166],
                [transportationSectorName,    rootName,  75.05, 88.4],
                [buildingsSectorName,    rootName,  108.15, 144.3],
                [landSinksSectorName,    rootName,  320.45, 392.7],
                [coastalAndOceanSinksSectorName,    rootName,  8.15, 10],
                [engineeredSinksSectorName,    rootName,  2.2, 3],
                [healthAndEducationSectorName,    rootName,  68.9, 68.9],

                // Solutions
                ['Onshore Wind Turbines', electricitySectorName, 46.95, 46.95],
                ['Utility-Scale Solar Photovoltaics', electricitySectorName, 40.83, 40.83],
                ['Plant-Rich Diets', foodAgLandSectorName, 78.33, 78.33],
                ['Reduced Food Waste', foodAgLandSectorName, 88.5, 88.5],
                ['Tropical Forest Restoration', landSinksSectorName, 54.45, 54.45],
                ['Clean Cooking', buildingsSectorName, 31.38, 31.38],
                ['Family Planning and Education', healthAndEducationSectorName, 68.9, 68.9],
                ['Distributed Solar Photovoltaics', electricitySectorName, 26.65, 26.65],
                ['Refrigerant Management', industrySectorName, 57.15, 57.15],
                ['Alternative Refrigerants', industrySectorName, 42.73, 42.73],
                ['Silvopasture', landSinksSectorName, 26.58, 26.58],
                ['Peatland Protection and Rewetting', foodAgLandSectorName, 25.4, 25.4],
                ['Tree Plantations (on Degraded Land)', landSinksSectorName, 22.04, 22.04],
                ['Perennial Staple Crops', landSinksSectorName, 16.34, 16.34],
                ['Methane Leak Management', industrySectorName, 25.83, 25.83],
                ['Temperate Forest Restoration', landSinksSectorName, 19.42, 19.42],
                ['Tree Intercropping', landSinksSectorName, 15.03, 15.03],
                ['Multistrata Agroforestry', landSinksSectorName, 13.26, 13.26],
                ['Regenerative Annual Cropping', foodAgLandSectorName, 15.12, 15.12],
                ['Concentrated Solar Power', electricitySectorName, 18, 18],
                ['Managed Grazing', landSinksSectorName, 13.72, 13.72],
                ['Abandoned Farmland Restoration', landSinksSectorName, 12.48, 12.48],
                ['Bamboo Production', landSinksSectorName, 7.7, 7.7],
                ['Insulation', electricitySectorName, 15.38, 15.38],
                ['LED Lighting', electricitySectorName, 14.45, 14.45],
                ['Alternative Cement', industrySectorName, 7.7, 7.7],
                ['Public Transit', transportationSectorName, 9.42, 9.42],
                ['Improved Cattle Feed', foodAgLandSectorName, 4.42, 4.42],
                ['Improved Rice Production', foodAgLandSectorName, 9.85, 9.85],
                ['Building Automation Systems', electricitySectorName, 9.55, 9.55],
                ['Solar Hot Water', electricitySectorName, 3.41, 3.41],
                ['Indigenous Peoples’ Forest Tenure', foodAgLandSectorName, 8.69, 8.69],
                ['Recycled Metals', industrySectorName, 4.31, 4.31],
                ['Nutrient Management', foodAgLandSectorName, 2.77, 2.77],
                ['High-Performance Glass', electricitySectorName, 8.82, 8.82],
                ['Recycling', industrySectorName, 10.36, 10.36],
                ['Carpooling', transportationSectorName, 9.06, 9.06],
                ['Efficient Trucks', transportationSectorName, 9.15, 9.15],
                ['Offshore Wind Turbines', electricitySectorName, 10.22, 10.22],
                ['Efficient Ocean Shipping', transportationSectorName, 6.72, 6.72],
                ['Electric Cars', transportationSectorName, 7.66, 7.66],
                ['Biogas for Cooking', buildingsSectorName, 4.65, 4.65],
                ['District Heating', electricitySectorName, 6.18, 6.18],
                ['Geothermal Power', electricitySectorName, 6.15, 6.15],
                ['High-Efficiency Heat Pumps', electricitySectorName, 4.04, 4.04],
                ['Forest Protection', foodAgLandSectorName, 5.55, 5.55],
                ['Conservation Agriculture', foodAgLandSectorName, 12.81, 12.81],
                ['Smart Thermostats', electricitySectorName, 6.91, 6.91],
                ['Methane Digesters', electricitySectorName, 6.02, 6.02],
                ['Perennial Biomass Production', landSinksSectorName, 4, 4],
                ['Improved Manure Management', foodAgLandSectorName, 3.34, 3.34],
                ['Efficient Aviation', transportationSectorName, 5.29, 5.29],
                ['Reduced Plastics', industrySectorName, 3.76, 3.76],
                ['Waste to Energy', electricitySectorName, 6.27, 6.27],
                ['Seafloor Protection', foodAgLandSectorName, 3.8, 3.8],
                ['Seaweed Farming', coastalAndOceanSinksSectorName, 2.5, 2.5],
                ['Hybrid Cars', transportationSectorName, 1.61, 1.61],
                ['Bicycle Infrastructure', transportationSectorName, 2.73, 2.73],
                ['System of Rice Intensification', foodAgLandSectorName, 2.9, 2.9],
                ['Telepresence', transportationSectorName, 2.64, 2.64],
                ['Grassland Protection', foodAgLandSectorName, 3.35, 3.35],
                ['Macroalgae Protection and Restoration', coastalAndOceanSinksSectorName, 2.61, 2.61],
                ['Nuclear Power', electricitySectorName, 3.17, 3.17],
                ['High-Speed Rail', transportationSectorName, 1.26, 1.26],
                ['Biomass Power', electricitySectorName, 2.62, 2.62],
                ['Walkable Cities', transportationSectorName, 2.83, 2.83],
                ['Electric Trains', transportationSectorName, 1.91, 1.91],
                ['Small Hydropower', electricitySectorName, 1.65, 1.65],
                ['Biochar Production', engineeredSinksSectorName, 1.36, 1.36],
                ['Recycled Paper', industrySectorName, 2.28, 2.28],
                ['Bioplastics', industrySectorName, 1.33, 1.33],
                ['Farm Irrigation Efficiency', foodAgLandSectorName, 1.13, 1.13],
                ['Recycled Plastics', industrySectorName, 0.52, 0.52],
                ['Coastal Wetland Protection', foodAgLandSectorName, 1.2, 1.2],
                ['Electric Bicycles', transportationSectorName, 1.39, 1.39],
                ['Improved Fisheries', foodAgLandSectorName, 1.01, 1.01],
                ['Low-Flow Fixtures', electricitySectorName, 0.93, 0.93],
                ['Composting', industrySectorName, 1.13, 1.13],
                ['Coastal Wetland Restoration', coastalAndOceanSinksSectorName, 0.76, 0.76],
                ['Green and Cool Roofs', electricitySectorName, 0.53, 0.53],
                ['Water Distribution Efficiency', electricitySectorName, 0.61, 0.61],
                ['Ocean Power', electricitySectorName, 1.27, 1.27],
                ['Improved Aquaculture', foodAgLandSectorName, 0.5, 0.5],
                ['Sustainable Intensification for Smallholders', foodAgLandSectorName, 1.36, 1.36],
                ['Dynamic Glass', electricitySectorName, 0.34, 0.34],
                ['Micro Wind Turbines', electricitySectorName, 0.09, 0.09]
            ]);

            let explorer = new google.visualization.TreeMap(document.getElementById('explorer_treemap_chart'));

            function getTypeFromName(name) {
                if(sectorNames.indexOf(name) > -1){
                    return 'sector'
                }

                return 'solution'
            }

            function showTooltip(row, size, value) {
                let name = data.getValue(row, 0)
                let instructions = `<p class='tooltip-instructions'>Double click to go to the ${name} page.</p>`
                if(name === 'All'){
                    instructions = ``
                } else if(getTypeFromName(name) === 'sector'){
                    instructions = `<p class='tooltip-instructions'>Double click to zoom in on the ${name} sector. (Right click to zoom out.)</p>`
                }

                return `<div class="explorer-tooltip">
                            <h4>${name}</h4>
                            <p>
                                ${size.toFixed(1)} Gt CO<sub>2</sub>-eq reduction
                            <p>
                            ${instructions}
                        </div>`;
            }

            explorer.draw(data, {
                    minColor: '#e5f9f6',
                    midColor: '#00bfa5',
                    maxColor: '#526cfe',

                    headerHeight: 32,
                    headerColor: '#4cae4f',
                    fontColor: 'black',

                    maxDepth: 3,
                    generateTooltip: showTooltip,

                    eventsConfig: {
                        highlight: ['click'],
                        unhighlight: ['mouseout'],
                        rollup: ['contextmenu'],
                        drilldown: ['dblclick']
                    }
            });

            function drilldownHandler(e) {
                let drilledDataRow = e.row
                let drilledData = data.getValue(drilledDataRow, 0)

                if(drilledData === rootName){
                    return // Nothing to do
                }

                let type = getTypeFromName(drilledData)

                if(type === 'sector'){
                    return // View sector drilldown instead of going to solution page
                }

                let solutionUrl = `/${type}-${drilledData.toLowerCase().replaceAll(' ', '-').replaceAll(',','')}`
                location.href = solutionUrl
            }

            google.visualization.events.addListener(explorer, 'drilldown', drilldownHandler);

        }
    </script>

    <div id="explorer_treemap_chart"></div>
</div>

    