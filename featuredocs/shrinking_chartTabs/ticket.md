# Chart tabs shrink to fit the space

## Problem to solve
Every time a new ticker is selected from the search results or a watchlist, a new chart is rendered and any existing charts become available via a chartTab for thier associated ticker above the main chart. 

As more ticker charts are rendered, the number of chartTabs above the chart grows. When the number of tabs grows large enough to exhaust the available screen width, some chart tabs become hidden off the right of the screen so the user can no longer click them.

## What we want to implement

Once the number of chartTabs grows so that the are rendered beyond the width of the screen, all chart tabs should shrink horizontally, and the visible text should be truncated accordingly. 

When tabs have been shrunk to fit the screen and the user hovers over a shrunken chartTab, that specific chartTab should expand so that its complete text and its associated close button is visible, and the rest of the chart tabs should shrink further so that all tabs remain within the viewport

