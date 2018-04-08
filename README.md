# osu-HeatmapOfActivePlayers

## Overview
This project is focused getting data from https://osu.ppy.sh/rankings/osu/country via JS and representing it via Google Charts API.  We focused our attention on getting the number of active players for each country using JS to read the html files.

## Difficulties
The initial obstacle we had was running the script on a web browser.  By doing so, we are limited to only our current domain because of same-origin policy.  

Instead, we opted to attempt reading the downloaded html files into a string to then parse into a document via DOMParser.

## Possible Improvements
A big improvement would be obtaining live data of the website by either requesting from a non-browser based platform or downloading the html everytime the script runs.

## What is osu! ?
osu! is a free rhytm game where anyone can play songs to the beat!
https://osu.ppy.sh/home
