import pandas as pd
import matplotlib.pyplot as plt

# Sample structure of your dataset
# Replace this with your actual CSV file
df = pd.read_csv('INDIA DATA ALL AROUND.csv')

# Filter only for relevant rows: Female, Age groups 25–29 and 45–49
df_filtered = df[
    (df['Sex'] == 'Female') &
    (df['Age group'].isin(['Age (5-year bands): 25-29', 'Age (5-year bands): 45-49']))
]

# Rename age groups for clarity
df_filtered['Group'] = df_filtered['Age group'].map({
    'Age (5-year bands): 25-29': 'Treated (25–29)',
    'Age (5-year bands): 45-49': 'Control (45–49)'
})

# Create pivot table for plotting
df_plot = df_filtered.pivot(index='Year', columns='Group', values='Value').dropna()

# Plotting
plt.figure(figsize=(12, 6))
plt.plot(df_plot.index, df_plot['Treated (25–29)'], label='Treated (25–29)', color='orange', marker='o')
plt.plot(df_plot.index, df_plot['Control (45–49)'], label='Control (45–49)', color='tomato', marker='o')

# Add vertical line for policy implementation year
plt.axvline(x=2017, color='gray', linestyle='--', label='Policy Implementation (2017)')

# Labels and legend
plt.title('Female Labor Force Participation Rate by Age Group (India)')
plt.xlabel('Year')
plt.ylabel('FLFP (%)')
plt.legend()
plt.grid(True)
plt.tight_layout()

plt.show()
