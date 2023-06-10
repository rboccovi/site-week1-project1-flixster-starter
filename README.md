

## Week 1 Assignment: Flixster

Submitted by: Roberta Boccovi

Estimated time spent: 19 hours
Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [x ] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [ x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x ] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [ x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [ x] Website accounts for basic HTML/CSS accessibility features
- [ x] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [ x] Allow user to view more details about a movie within a popup.
- [ ] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video


<div style="position: relative; padding-bottom: 70.17543859649122%; height: 0;"><iframe src="https://www.loom.com/embed/4f5725e6474c443ca67a5d4e240a9fc3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> 
### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics discussed in the labs provided a solid foundation for completing most aspects of the assignment. I felt well-prepared to yenerate HTML elements in JavaScript, as we extensively covered DOM manipulation techniques. Additionally, the discussions on making API requests and handling JSON data equipped me to fetch, search, and display data from a public API.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
if I had more time, I would have explored incorporating additional features to enhance the functionality and user experience of the project. One feature I would have liked to add is a search bar that dynamically filters and displays specific data from the API based on user input. This would provide users with a convenient way to find the information they are looking for not just Movie Title.

In terms of project response, I would have improved error handling and implemented better feedback mechanisms for cases when the API request fails or returns empty data. This way, users would receive clear messages or visual indicators informing them of any issues and providing guidance on how to proceed.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

During the project demo, the dynamic generation of HTML elements using JavaScript worked well. The data fetched from the API was successfully displayed on the web page, and the styling applied through CSS selectors enhanced the visual presentation. At the time I was still working on my  search feature with a finally got to work.

However, there were a few hiccups during the demo. Occasionally, the API response time was slower than expected, resulting in a slight delay in data display. In the future, I would consider implementing progress indicators to manage user expectations during such delays.

During my peer's demo, I noticed they implemented a close button which allowed with smooth transitions after user input search It added a visually pleasing touch and improved the overall user experience. Next time, I would like to experiment with similar animations to enhance the interactivity  of my projects.

### Open-source libraries used

n/a 

- Add any links to open-so       urce libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Thank you to my instrucutors and my peers habeebah and  Blessing for working though my errors with me.
