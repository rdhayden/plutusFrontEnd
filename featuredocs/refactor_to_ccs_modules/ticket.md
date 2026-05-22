# Refactor CSS so that components use CSS modules

## Problem to solve
CSS was originally all in one global CSS file. Over time this will make reuse of components and refactoring more difficult. A CSS module was created for ChartTabBar called ChartTabBar.module.css. Now our CSS implementation is inconsistent across components

## What we want to implement

 Review the CSS for all components and move it to css modules for each component as appropriate