# Clarifying Questions — Chart Tabs Shrink to Fit

## Minimum tab width
1. Is there a minimum width a tab should not shrink below (e.g. enough to show 3–4 characters of the ticker)? Or should tabs shrink uniformly regardless?

## Active/selected tab behaviour
2. Should the currently active (selected) tab be treated differently when shrinking — e.g. always kept slightly wider, or always showing its full text since it's the one being viewed?

## Close button on shrunken tabs
3. When a tab is shrunken, should the close (×) button be hidden entirely, or still visible but smaller? The ticket says close button appears on hover — should it be completely absent in the shrunken state?

## Hover expansion mechanics
4. When a shrunken tab is hovered and expands, should the space be taken equally from all other tabs, or only from adjacent tabs, or only from the tabs to the right?

## Transition / animation
5. Should the shrink/expand on hover be animated (CSS transition), and if so, is there a preferred duration/easing, or should it feel snappy/instant?

## Overflow strategy for extreme cases
6. If there are so many tabs that even the minimum width cannot fit them all within the viewport (e.g. 50+ tabs), is shrinking still the only strategy, or should there be a secondary mechanism (scroll, overflow menu, a "+N more" pill)?

## Trigger threshold
7. Should shrinking kick in only once tabs overflow (i.e. tabs are full-width up until the point they would overflow), or should there be an earlier threshold?

## Ticker label format
8. In the shrunken state, should truncation prefer showing the ticker symbol (e.g. "AAPL") over any subtitle/exchange info, or is the full label a single string?
