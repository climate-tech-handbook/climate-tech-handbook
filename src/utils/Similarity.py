import pandas as pd
from sentence_transformers import SentenceTransformer, util
import openpyxl

# Load the trained model
model_path = "output/training_stsbenchmark_distilbert-base-uncased-2024-03-13_00-08-04"
model = SentenceTransformer(model_path)

# Load the Excel file with company descriptions
df = pd.read_excel("/Users/nancyli/Desktop/Climate Tech Handbook/Climate Tech Resources database.xlsx")

# List of drawdown solutions
drawdown_solutions = [
    "Abandoned Farmland Restoration", "Alternative Cement", "Alternative Refrigerants",
    "Bamboo Production", "Bicycle Infrastructure", "Biochar Production",
    "Biogas for Cooking", "Biomass Power", "Bioplastics",
    "Building Automation Systems", "Building Retrofitting", "Carpooling",
    "Clean Cooking", "Coastal Wetland Protection", "Coastal Wetland Restoration",
    "Composting", "Concentrated Solar Power", "Conservation Agriculture",
    "Distributed Energy Storage", "Distributed Solar Photovoltaics", "District Heating",
    "Dynamic Glass", "Efficient Aviation", "Efficient Ocean Shipping",
    "Efficient Trucks", "Electric Bicycles", "Electric Cars",
    "Electric Trains", "Family Planning and Education", "Farm Irrigation Efficiency",
    "Forest Protection", "Geothermal Power", "Grassland Protection",
    "Green and Cool Roofs", "Grid Flexibility", "High-Efficiency Heat Pumps",
    "High-Performance Glass", "High-Speed Rail", "Hybrid Cars",
    "Improved Aquaculture", "Improved Cattle Feed", "Improved Fisheries",
    "Improved Manure Management", "Improved Rice Production", "Indigenous Peoples’ Forest Tenure",
    "Insulation", "Landfill Methane Capture", "LED Lighting",
    "Low-Flow Fixtures", "Macroalgae Protection and Restoration", "Managed Grazing",
    "Methane Digesters", "Methane Leak Management", "Micro Wind Turbines",
    "Microgrids", "Multistrata Agroforestry", "Net Zero Buildings",
    "Nuclear Power", "Nutrient Management", "Ocean Power",
    "Offshore Wind Turbines", "Onshore Wind Turbines", "Peatland Protection and Rewetting",
    "Perennial Biomass Production", "Perennial Staple Crops", "Plant-Rich Diets",
    "Public Transit", "Recycled Metals", "Recycled Paper",
    "Recycled Plastics", "Recycling", "Reduced Food Waste",
    "Reduced Plastics", "Refrigerant Management", "Regenerative Annual Cropping",
    "Seafloor Protection", "Seaweed Farming", "Silvopasture",
    "Small Hydropower", "Smart Thermostats", "Solar Hot Water",
    "Sustainable Intensification for Smallholders", "System of Rice Intensification", "Telepresence",
    "Temperate Forest Restoration", "Tree Intercropping", "Tree Plantations (on Degraded Land)",
    "Tropical Forest Restoration", "Utility-Scale Energy Storage", "Utility-Scale Solar Photovoltaics",
    "Walkable Cities", "Waste to Energy", "Water Distribution Efficiency"
]

# Compute embeddings for drawdown solutions
solution_embeddings = model.encode(drawdown_solutions)

# Predict the drawdown solution for each company
predicted_solutions = []
for description in df['Description']:
    # Convert the description to a string
    description = str(description)

    # Compute the embedding for the company description
    description_embedding = model.encode([description])

    # Compute cosine similarities
    similarities = util.pytorch_cos_sim(description_embedding, solution_embeddings)[0]

    # Find the index of the solution with the highest similarity
    best_solution_idx = similarities.argmax()

    # Add the predicted solution to the list
    predicted_solutions.append(drawdown_solutions[best_solution_idx])


# Add the predicted solutions to the DataFrame
df['Predicted Drawdown Solution'] = predicted_solutions

# Save the updated DataFrame to a new Excel file
df.to_excel("Updated_Climate_Tech_Resources.xlsx", index=False)
