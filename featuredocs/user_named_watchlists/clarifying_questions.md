# Clarifying Questions — User Named Watchlists

## UX / Interaction

1. **Name input UX**: How should the user provide the watchlist name when clicking "Add Watchlist"? Options: inline input that appears in place, a modal/dialog, or a popover prompt?

- Answer: a modal/dialog

2. **Empty state on first load**: If no watchlists exist yet, should the sidebar show only the "Add Watchlist" button, or is there a placeholder/prompt encouraging the user to create their first watchlist?

- Answer: show only the "Add Watchlist" button

3. **Watchlist panel collapsing**: Should individual watchlist panels be collapsible (expand/collapse)? The current single panel — is it collapsible today?

- Answer: yes watchlist panels should be collapsible and it is collapsible today

4. **Watchlist deletion**: Can the user delete a watchlist? If so, what is the interaction (e.g. a delete/X icon on the panel header)? What happens to the tickers stored in that watchlist?

- Answer: a delete X icon on the panel header should delete the watchlist, if there are tickers stored in that watchlist, another warning message should appear saying 'Watchlist not empty, are you sure want to delete it?' and provide a yes and no button. If the user selects no the dialog closes and the watchlist IS NOT removed, if the user selects yes, the watchlist should be removed from the page and all related watchlist entries should be deleted from the database

5. **Watchlist renaming**: Can the user rename an existing watchlist after creation?

- Answer: yes allow the user to rename the watchlist

6. **Ticker duplicates**: Can the same ticker be added to multiple watchlists, or should a ticker be prevented from appearing in more than one watchlist?

- Answer: A ticker can appear in multiple watchlists

7. **Maximum watchlists**: Is there a limit on how many watchlists a user can create?

- Answer: Yes 50, and a watchlist cannot have more than 1000 entries.

8. **Watchlist ordering**: Is the display order of watchlist panels fixed (creation order), or can the user reorder them (e.g. drag and drop)?

- Answer: the user should be able to reorder them by dragging a watchlist up or down the list of watchlists

9. **Right-click context menu — existing or new?**: Is the right-click "Add to watchlist" context menu on search results already implemented, or does it need to be built as part of this feature?

10. **Watchlist name validation**: Beyond uniqueness, are there any other constraints on watchlist names (e.g. max length, allowed characters, no empty names)?

- Answer: yes, watchlists should only include alphanumeric characters including spaces and should be maximum 30 characters

## Backend / Data

11. **Database technology**: What database and ORM/query library is in use for the watchlist table? Where is the schema/migration defined?

12. **Existing watchlist API**: Is there an existing API endpoint for reading/writing watchlist entries? If so, where is it, and what does the current schema look like?

13. **API changes ownership**: Should the frontend ticket include the backend schema migration and API changes, or are those handled separately?

- Answer: Yes it should include the backend changes

14. **User identity**: Are watchlists scoped to a user (i.e. is there authentication)? If yes, how is the current user identified in API requests?

15. **Persistence on ticker add**: When a ticker is added to a named watchlist, should the frontend call the existing watchlist API with the new `watchlist_name` column, or will a new endpoint be provided?

- update the existing watchlist API and add the `watchlist_name` to it