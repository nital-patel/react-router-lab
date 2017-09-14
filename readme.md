# Lab Time!

For this lab, we'll be putting everything together, so that means we'll be `touch`ing our new files, `npm install`ing our `react-router-dom` and all that good stuff to make our React app a little bit more interesting.


This lab will go over everything we've touched on this afternoon: 

1. Once you've run `create-react-app`, `touch` three component files,` Birds.js`, `Bird.js`, `Nav.js` and also a `router.js` file, all in your `src` folder.
2. run `npm install --save react-router-dom`.
3. Write up your `BrowserRouter` component in your `router.js` file. Don't forget to import `BrowserRouter` and `Route` into your router file!
4. In your router file, have a route for your index route, `/`, that renders your `App` component, a route to `/birds` that will render your `Birds` component, and a route, `/birds/:id` that will render your `Bird` component. Your router file should also have a persisting nav bar.
5. In your `Nav.js` file, import the `{ Link }` component from `react-router-dom` and have links to `/` and `/birds` at the top of your page
6. Your `Birds.js` component should import the data from `bird-data.js`, map over the array of objects, returning a `Link` to each bird's id page (does that mean you have to import `{ Link }` here too?!)
7. Your `Bird.js` component should use `this.props.match.params.find` to specify a bird and render all of the information about that bird.
	
	7a. Each bird has an array of weapons that it can use. This component should map over that array of weapons and render them on the page.
	
	7b. Each bird has an image that should be rendered on the page.
	
	7c. Each bird has a name and description that should be rendered on the page.

8. Don't forget to replace `<App />` inside your `index.js` file with your router file!