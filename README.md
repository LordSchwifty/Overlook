# OverLook Hotel'

## Abstract:
[//]: <>
I built an application that has allows users to book rooms at the overlook hotel. The user can scroll through these rooms by date, or filter by room type. The users can also view their past and upcoming bookings after login. The website is fully tab-able and accessible with 0 [Wave](https://wave.webaim.org/extension/) errors and a 96% rating using the LightHouse tool in Google Chrome. 

## Installation Instructions:
[//]: <>
1. Fork and clone [this repo](https://github.com/LordSchwifty/Overlook) and [this repo (backend API)](https://github.com/turingschool-examples/overlook-api).
1. Copy the SSH key from the green "Code" button within each repo.
1. In your terminal, use the command `git clone git@github.com:[the link to each repo]`.
1. Run `npm install` in both local repositories.
1. Do NOT run `npm audit fix --force` when prompted.
1. Open the repo in your text editor to make any changes or inspect code.
1. Run `npm start` in your terminal for both repos.
1. Copy and paste the generated `localServer` address that your terminal provides for the front end repo into your browser address bar.


## Context:
[//]: <>
I was assigned part this project on Tuesday, February 28th and had until Tuesday, March 7th to complete the project. I spent 6-7 hours a day (for a total of 49 hours). We were in our 5th week of Mod 2 at Turing.


## Contributors:
[//]: <>
- [Tom Doder](https://github.com/LordSchwifty)

## Learning Goals:
[//]: <>
1. Implement ES6 classes that communicate to each other as needed.
1. Use object and array prototype methods to perform data manipulation.
1. Create a user interface that is easy to use and clearly displays information.
1. Implement a robust testing suite using TDD.
1. Work with a local server and make network requests to API endpoints to retrieve and manipulate data.
1. Ensure our app follows best practices for accessibility.

## Technologies Used:
[//]: <>
- Fetch API
- Webpack
- Mocha & Chai
- LightHouse
- Wave Evaluation
- JavaScript
- CSS
- HTML

## Wins + Challenges:
[//]: <>
- Wins:
  - Using APIs to GET and POST data. 
  - implementing all of the concepts I learned over the past 5 weeks into one project.
- Challenges:
  - While implementing API data on the site was a win, it was also a challenge. Being a new concept I spent a lot of time figuring out how to implement it in the code.
  - I delt with a bug which wasn't updating the bookings section with new bookings and I finally realized that I was showing the bookings view before calling the function to update the bookings. It took a long time of combing through code to figure it out.

