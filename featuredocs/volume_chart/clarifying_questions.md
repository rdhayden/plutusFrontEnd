# Clarifying Questions - Volume Sub-Chart

## Layout & Sizing
1. What should the height ratio be between the main candlestick chart and the volume sub-panel? (e.g., 70/30, 80/20)
2. Should there be a visible divider or separator between the two panels?
3. Should the volume panel be resizable by the user?

## Axes & Scale
4. Should the volume Y-axis display numeric labels? If so, should values be abbreviated (e.g., 1.2M, 500K)?
5. Should the X-axis (time axis) be shared between the two panels — i.e., shown only on the volume panel at the bottom?

## Interaction & Synchronisation
6. Should the crosshair/tooltip synchronise between the two panels (hovering over either panel shows the corresponding data point in both)?
7. Should zoom/scroll be synchronised between the main chart and volume panel?
8. Should the volume value be shown in the legend/tooltip on hover?

## Appearance
9. Should the red/green/black colours use existing design tokens (e.g., `--color-red-*`, `--color-green-*`) or are specific hex values required?
10. Should the volume bars have any opacity/transparency applied?
11. Should the panel have a label (e.g., "Volume") displayed somewhere?

## Behaviour & Edge Cases
12. Should the volume panel be togglable/collapsible by the user?
13. What should be rendered if the PriceSignal response contains no volume data (all zeros or missing)?
14. Should the volume panel appear on all tabs (1D, 1W, etc.) or only specific timeframes?
