# osu-HeatmapOfActivePlayers

## Overview
This project is focused on reading information from downloaded html files and representing the data as a heatmap using Google Charts API.

## Difficulties
The initial obstacle we had was running the script on a web browser.  By doing so, we are limited to only our current domain because of same-origin policy.  

Instead, we opted to attempt reading the downloaded html files into a string to then parse into a document via DOMParser.

## Possible Improvements
A big improvement would be obtaining live data of the website by either requesting from a non-browser based platform or downloading the html everytime the script runs.

## What is osu! ?
osu! is a free rhytm game where anyone can play songs to the beat!
https://osu.ppy.sh/home
