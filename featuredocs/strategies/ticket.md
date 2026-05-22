
# Strategy feature

## What a strategy is

A strategy is a sequence of rules combined with the Boolean operators AND, OR, NOT

Each rule therefore resolves to TRUE or FALSE

A rule is constructed from the following:
- value terms, which can either be a user specified string, a user specified number, or a signal that is registered in the system with a temporal modifier that is expressed as an integer in square brackets where [0] means the current period, [-1] means the previous period, [-2] means 2 periods prior, [1] means the next period etc. Negative temporal modifiers look back to previous values and positive temporal modifiers look forward to future values
- arithmetic operators: + (addition), - (subtraction), * (multiplication), ** (exponentiation), / (division), // (floor division), % (modulo) and [n]√ (nth root e.g. [2]√ is square root 
- comparators: = (equal), != (not equal), > (greater than), < (less than), >= (greater than or equal), <= (less than or equal)

Rule ordering:
- A rule always starts with a value term or an nth root
- All value terms must be followed by either a comparator or an arithmetic operator excluding an nth root
- All arithmetic operators must be followed by a value term
- Comparators must always be followed by a value term or an nth root

Rules will be applied to the time series output of a price signal for a ticker selected by the user.

If any of the rules in a strategy include temporal modifiers, when they are applied at or near the beginning or end of the time series they may look back or forward to values not available in the series. For example a rule that compares the current close price to the close price 3 periods prior cannot be calculated for the first 3 periods. At those positions in the sequence the rule and any strategy it is part of should return null.

## The user interface for creating a strategy

There is a tab for strategies in the main header of the UI. The strategies page that it routes to should have a side panel with a drop-down which has 2 options, add strategy and add folder. If a user adds a folder it is added immediately below the drop-down, if a user adds a strategy it is listed below all folders and their content.

Immediately beneath each folder is another indented drop-down to add a folder or a strategy. If the user adds the folder it is nested under the current folder indented, if the user adds a strategy it is listed below any folders within the folder, also indented.

Each listed strategy and folder should have a clickable x to delete the strategy or folder similar to the clickable x that deletes existing watchlists. 

If the user clicks x on a strategy a confirmation box should appear saying 'this will delete the strategy, are you sure you want to proceed?' and give the user 2 options yes and no.

If the user clicks the x on a folder a confirmation box should appear saying 'warning this will delete all strategies in the folder and the folder, are you sure you want to proceed?' and give the user 2 options yes and no.

If the user clicks no nothing is deleted and the dialog disappears. If the user clicks yes the related strategy or folder with all its strategies should be deleted.

If the user clicks to add a strategy, an input should appear were the strategy will be listed enabling the user to enter the name of the strategy, upon typing enter the new strategy will be listed, unless the user clicks enter on an empty string or a string containing only spaces, in which case the input should dissapear and no new strategy should be created.

Strategy and folder names must only contain alphanumeric characters and start with a letter. An appropriate error is displayed if the user tries to enter illegal characters. 

When a new strategy name is created, the right hand panel will render with 3 tabs, one called 'rules', one called 'actions' and one called 'strategy' 

All folders are collapsed and only expand to the next level when a user clicks on the parent folder

### The rules tab

The rules tab will display all existing rules and rule folders. Similar to the strategy side panel the top of the rules panel will have a drop-down which has 2 options, add rule and add folder. If a user adds a folder it is added immediately below the drop-down, if a user adds a rule it is listed below all folders and their content.

Immediately beneath each folder, indented is another drop-down to add a folder or a rule. If the user adds the folder it is nested under the current folder indented, if the user adds a rule it is listed below any folders within the folder, also indented.

Each listed rule and folder should have a clickable x to delete the rule or folder that behaves similarly to the delete function for strategies and its folders.

When a user clicks to add a rule an input should appear were the rule name will be listed enabling the user to enter the name of the rule. If the user types enter while the input only contains an empty string or a string containing only spaces, the input should dissapear and no new rule should be created. Rule and folder names must start with a letter and can only contain letters and whole numbers, rule names must be unique at the same level within a folder, and folder names must be unique at a given level. An appropriate error is displayed if the user tries to enter illegal characters or names that are not unique at thier level.

If the user enters a valid string as the rule name and presses enter the rule name remains listed where the input was and on the line immediately below it a dropdown should appear which lists all the signals in the system, along with an option to enter a string, an option to enter a number and an option to enter a root
- If the user selects the option to enter a string or number an input should be presented allowing the user to enter the string or number, where the input for a string only allows alphanumeric characters starting with a letter, and the input for a number only allows integers or floating point numbers 
- If the user selects a root, then an input appears for the n to apply to the nth root which should only allow integers. Once the user has input an integer for n, another dropdown should appear next to that term listing all the legal options after a value term. Once the user has input n for the nth root, another dropdown should appear next to that term listing all signals and an option to add a number
- If the the user has selected a signal, labelled inputs should be presented to enter the configuration associated with that signal excluding the ticker and exchange because this is for a rule that can be applied to many tickers. A labelled input should also be presented to enter the temporal modifier. Once the user has selected a signal the name of the signal should appear with its configuration value in brackets next to it and its temporal modifier in square brackets next to that
- after selecting a dropdown and completing all associated data entry, another dropdown should be presented next to the last term on the same line showing only those options that are valid given the rule ordering rules described previously
- every dropdown after the first value term following a comparator should also include 'finished' as an option. If the user selects finished no more drop downs are presented next to the last term in the rule
- all finished rules are collapsed, that is, they only display when a user clicks on the rule name
- all folders are collapsed and only expand to the next level when a user clicks on the parent folder
- if a user clicks the delete x on the rule name before completing the creation of a rule, the deletion confirmation dialog appears and if the user approves the rule is removed and not saved
- if the user saves a rule the rule is saved to the database

### The actions tab

The actions tab will display all existing actions and action folders. Similar to the strategy side panel the top of the actions panel will have a drop-down which has 2 options, add action and add folder. If a user adds a folder it is added immediately below the drop-down, if a user adds an action it is listed below all folders and their content.

Immediately beneath each folder, indented is another drop-down to add a folder or an action. If the user adds the folder it is nested under the current folder indented, if the user adds an action it is listed below any folders within the folder, also indented.

Each listed action and folder should have a clickable x to delete the action or folder that behaves similarly to the delete function for strategies and its folders.

When a user clicks to add an action an input should appear were the action name will be listed enabling the user to enter the name of the action. If the user types enter while the input only contains an empty string or a string containing only spaces, the input should dissapear and no new action should be created. Action and folder names must start with a letter and can only contain letters and whole numbers, action names must be unique at the same level within a folder, and folder names must be unique at a given level. An appropriate error is displayed if the user tries to enter illegal characters or names that are not unique at thier level.

If the user enters a valid string as the action name and presses enter the action name is listed where the input was.

### The strategy tab
When the user first creates a strategy a dropdown box appears in the strategy tab presenting the available rules. If there are multiple rules folder the dropdown lists the folders and rules at the top level and when a user selects a folder a child drop down displays the folders and rules within that folder.

Once the user selects a rule the rule name appears and another dropdown appears on the line below it with the Boolean operators AND, OR, NOT
When the user selects a Boolean operator a child dropdown appears listing the rules and rule folders as before.
Once the user selects a rule, the Boolean operator and the rule name appear on the line and another dropdown appears on the next line, however after the first rule has been added the dropdown that appears on the next line should include the Boolean operators and 'Action'
If the user selects 'Action' a child dropdown appears listing the actions and action folders
If the user selects an action, the word 'then' followed by a space and the action name is displayed on the line and a dropdown appears on the next line with 'save', actions and action folders
The user can add as many actions to the strategy as they like but cannot add Boolean operators and rules after adding an action
If the user selects 'save' the strategy is saved to the database

Each line with either a rule name or a Boolean operator and rule name should have an x at the end of the line that acts as the delete function, similar to the delete function for folders and rules, when clicked it removes that rule and associated Boolean operator after presenting an appropriate confirmation dialog.
Each line with either a rule name or a Boolean operator and rule name should also have a + at the end of the line before the x which allows the user to add another Boolean operator and rule immediately after the rule on that line. If the rule is being added before another rule, the dropdown should not present the option to add an action.
Each line with an action listed should also have a + at the end of the line before the x which allows the user to add another action

## Applying a strategy

A strategy drop-down should be added to the main chart page next to the existing Drawings drop-down. It should list all available strategies and folders at the top level, if a user selects a folder a child drop down should appear showing the strategies and folders at the next level within the selected folder.
When the user selects a strategy, a true, false or null value should be generated for every data point displayed in the price signal time series. This should be generated on the backend server that generates the signal timeseries and for any data point where the strategy generates a true value, a black dot should be plotted immediately below the low of the candle on the chart on the front end and below that dot the action name associated with the strategy should be displayed. If there are multiple actions they should be stacked horizonally when displayed.

Since strategies take in time series and return a time series of boolean values and actions they can be represented as signals. Extend the signal architecture on the back end to support a signal subtype called strategies. When strategies are saved they should generate a stratgey plugin similar to the signal plugins and stored in a strategies folder, and they should be registered when they are saved and on subsequent restarts of the system.