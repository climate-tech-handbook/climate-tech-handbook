<div  style="width: 100%; height: 666px;">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages':['treemap']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Solution',  'Parent',   'Gt CO2-eq Reduction (2020-2050)',  'Max Gt CO2-eq Reduction (2020-2050)'],

            // Areas of Action
            ['All',    null,   0,  0],
            ['Reduce Sources',    'All',   0,  0],
            ['Support Sinks', 'All',   0,  0],
            ['Improve Society',   'All',   0,  0],

            // Sectors
            ['Electricity', 'Reduce Sources', 308.7,  420.6],
            ['Food, Agriculture, and Land Use',    'Reduce Sources',  269.25, 312],
            ['Industry',    'Reduce Sources',  154.7, 166],
            ['Transportation',    'Reduce Sources',  75.05, 88.4],
            ['Buildings',    'Reduce Sources',  108.15, 144.3],
            ['Land Sinks',    'Support Sinks',  320.45, 392.7],
            ['Coastal and Ocean Sinks',    'Support Sinks',  8.15, 10],
            ['Engineered Sinks',    'Support Sinks',  2.2, 3],
            ['Health and Education',    'Improve Society',  68.9, 68.9],

            // Solutions
            ['Onshore Wind Turbines', 'Electricity', 46.95, 46.95],
            ['Utility-Scale Solar Photovoltaics', 'Electricity', 40.83, 40.83],
            ['Plant-Rich Diets', 'Food, Agriculture, and Land Use', 78.33, 78.33],
            ['Reduced Food Waste', 'Food, Agriculture, and Land Use', 88.5, 88.5],
            ['Tropical Forest Restoration', 'Land Sinks', 54.45, 54.45],
            ['Clean Cooking', 'Buildings', 31.38, 31.38],
            ['Family Planning and Education', 'Health and Education', 68.9, 68.9],
            ['Distributed Solar Photovoltaics', 'Electricity', 26.65, 26.65],
            ['Refrigerant Management', 'Industry', 57.15, 57.15],
            ['Alternative Refrigerants', 'Industry', 42.73, 42.73],
            ['Silvopasture', 'Land Sinks', 26.58, 26.58],
            ['Peatland Protection and Rewetting', 'Food, Agriculture, and Land Use', 25.4, 25.4],
            ['Tree Plantations (on Degraded Land)', 'Land Sinks', 22.04, 22.04],
            ['Perennial Staple Crops', 'Land Sinks', 16.34, 16.34],
            ['Methane Leak Management', 'Industry', 25.83, 25.83],
            ['Temperate Forest Restoration', 'Land Sinks', 19.42, 19.42],
            ['Tree Intercropping', 'Land Sinks', 15.03, 15.03],
            ['Multistrata Agroforestry', 'Land Sinks', 13.26, 13.26],
            ['Regenerative Annual Cropping', 'Food, Agriculture, and Land Use', 15.12, 15.12],
            ['Concentrated Solar Power', 'Electricity', 18, 18],
            ['Managed Grazing', 'Land Sinks', 13.72, 13.72],
            ['Abandoned Farmland Restoration', 'Land Sinks', 12.48, 12.48],
            ['Bamboo Production', 'Land Sinks', 7.7, 7.7],
            ['Insulation', 'Electricity', 15.38, 15.38],
            ['LED Lighting', 'Electricity', 14.45, 14.45],
            ['Alternative Cement', 'Industry', 7.7, 7.7],
            ['Public Transit', 'Transportation', 9.42, 9.42],
            ['Improved Cattle Feed', 'Food, Agriculture, and Land Use', 4.42, 4.42],
            ['Improved Rice Production', 'Food, Agriculture, and Land Use', 9.85, 9.85],
            ['Building Automation Systems', 'Electricity', 9.55, 9.55],
            ['Solar Hot Water', 'Electricity', 3.41, 3.41],
            ['Indigenous Peoples’ Forest Tenure', 'Food, Agriculture, and Land Use', 8.69, 8.69],
            ['Recycled Metals', 'Industry', 4.31, 4.31],
            ['Nutrient Management', 'Food, Agriculture, and Land Use', 2.77, 2.77],
            ['High-Performance Glass', 'Electricity', 8.82, 8.82],
            ['Recycling', 'Industry', 10.36, 10.36],
            ['Carpooling', 'Transportation', 9.06, 9.06],
            ['Efficient Trucks', 'Transportation', 9.15, 9.15],
            ['Offshore Wind Turbines', 'Electricity', 10.22, 10.22],
            ['Efficient Ocean Shipping', 'Transportation', 6.72, 6.72],
            ['Electric Cars', 'Transportation', 7.66, 7.66],
            ['Biogas for Cooking', 'Buildings', 4.65, 4.65],
            ['District Heating', 'Electricity', 6.18, 6.18],
            ['Geothermal Power', 'Electricity', 6.15, 6.15],
            ['High-Efficiency Heat Pumps', 'Electricity', 4.04, 4.04],
            ['Forest Protection', 'Food, Agriculture, and Land Use', 5.55, 5.55],
            ['Conservation Agriculture', 'Food, Agriculture, and Land Use', 12.81, 12.81],
            ['Smart Thermostats', 'Electricity', 6.91, 6.91],
            ['Methane Digesters', 'Electricity', 6.02, 6.02],
            ['Perennial Biomass Production', 'Land Sinks', 4, 4],
            ['Improved Manure Management', 'Food, Agriculture, and Land Use', 3.34, 3.34],
            ['Efficient Aviation', 'Transportation', 5.29, 5.29],
            ['Reduced Plastics', 'Industry', 3.76, 3.76],
            ['Waste to Energy', 'Electricity', 6.27, 6.27],
            ['Seafloor Protection', 'Food, Agriculture, and Land Use', 3.8, 3.8],
            ['Seaweed Farming', 'Coastal and Ocean Sinks', 2.5, 2.5],
            ['Hybrid Cars', 'Transportation', 1.61, 1.61],
            ['Bicycle Infrastructure', 'Transportation', 2.73, 2.73],
            ['System of Rice Intensification', 'Food, Agriculture, and Land Use', 2.9, 2.9],
            ['Telepresence', 'Transportation', 2.64, 2.64],
            ['Grassland Protection', 'Food, Agriculture, and Land Use', 3.35, 3.35],
            ['Macroalgae Protection and Restoration', 'Coastal and Ocean Sinks', 2.61, 2.61],
            ['Nuclear Power', 'Electricity', 3.17, 3.17],
            ['High-Speed Rail', 'Transportation', 1.26, 1.26],
            ['Biomass Power', 'Electricity', 2.62, 2.62],
            ['Walkable Cities', 'Transportation', 2.83, 2.83],
            ['Electric Trains', 'Transportation', 1.91, 1.91],
            ['Small Hydropower', 'Electricity', 1.65, 1.65],
            ['Biochar Production', 'Engineered Sinks', 1.36, 1.36],
            ['Recycled Paper', 'Industry', 2.28, 2.28],
            ['Bioplastics', 'Industry', 1.33, 1.33],
            ['Farm Irrigation Efficiency', 'Food, Agriculture, and Land Use', 1.13, 1.13],
            ['Recycled Plastics', 'Industry', 0.52, 0.52],
            ['Coastal Wetland Protection', 'Food, Agriculture, and Land Use', 1.2, 1.2],
            ['Electric Bicycles', 'Transportation', 1.39, 1.39],
            ['Improved Fisheries', 'Food, Agriculture, and Land Use', 1.01, 1.01],
            ['Low-Flow Fixtures', 'Electricity', 0.93, 0.93],
            ['Composting', 'Industry', 1.13, 1.13],
            ['Coastal Wetland Restoration', 'Coastal and Ocean Sinks', 0.76, 0.76],
            ['Green and Cool Roofs', 'Electricity', 0.53, 0.53],
            ['Water Distribution Efficiency', 'Electricity', 0.61, 0.61],
            ['Ocean Power', 'Electricity', 1.27, 1.27],
            ['Improved Aquaculture', 'Food, Agriculture, and Land Use', 0.5, 0.5],
            ['Sustainable Intensification for Smallholders', 'Food, Agriculture, and Land Use', 1.36, 1.36],
            ['Dynamic Glass', 'Electricity', 0.34, 0.34],
            ['Micro Wind Turbines', 'Electricity', 0.09, 0.09]
            ]);

            tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

            function showFullTooltip(row, size, value) {
                return '<div style="background:#fd9; padding:10px; border-style:solid">' +
                    `<span><b>${data.getValue(row, 0)}</b></span><br/>` +
                    `${size.toFixed(1)} Gt CO<sub>2</sub>-eq reduction</div>`;
                }

                tree.draw(data, {
                    minColor: '#d2e2be',
                    midColor: '#85b158',
                    maxColor: '#669d28',
                    headerHeight: 32,
                    fontColor: 'black',
                    maxDepth: 3,
                    generateTooltip: showFullTooltip
                });

            }
        </script>
        <div id="chart_div" style="width: 100%; height: 100%;"></div>

    </div>

    