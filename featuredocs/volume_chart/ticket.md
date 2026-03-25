# Add eodhd.com as a data provider

## Problem to solve
The PriceSignal returns volume data and we need to visualise this on a subchart

## What we want to implement

When the main chart is rendered with data from the PriceSignal, a second sub panel should be rendered below the main chart with the volume data returned by the PriceSignal.

The volume data should be rendered as a bar chart. 
If the corresponding close price value is below the open value the bar should be rendered red. 
If the corresponding close price value is above the open value the bar should be rendered green.
If the corresponding close price value is the same as the open value the bar should be rendered black.