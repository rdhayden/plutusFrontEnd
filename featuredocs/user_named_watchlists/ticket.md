# Add eodhd.com as a data provider

## Problem to solve
The UI currently has a single Watchlist panel that the use can add tickers to. However the user may want to add multiple watchlists for different purposes. For example they may want a Watchlist for tickers they currently hold as investments, and a watchlist for tickers they are interested in buying in future.

## What we want to implement

We want to remove the fixed Watchlist panel and allow the use to create multiple watchlists which they will name.

Where the Watchlist panel is today there should be an 'Add Watchlist' button

When the user clicks on this button it should add a Watchlist panel like the existing panel but instead of being labelled Watchlist it should be labeled with the name the user gave it on creation.

If the user clicks the 'Add Watchlist' button again and provides a name, the next Watchlist panel should be displayed under the previous Watchlist unless a Watchlist already exists with that name, in which case the UI should display a message saying, 'Watchlist name must be unique'

When the user searches for tickers and then right clicks on the search result to get 'Add to watchlist', if they then click on 'Add to watchlist' it should present a drop down of available watchlists by name, unless there are no watchlists, in with case the dropdown should only contain the message 'no watchlists'

The database table that persists the watchlist entries will need to be altered to include a column for the watchlist name, and all watchlist entries stored in database should be stored with their watchlist name.

When the page first renders, it should fetch all watchlists stored in the database and render them