# Movie-Explorer-App


Overview: Create a Movie Explorer Application that allows users to browse and search for
movies using an external API (such as the OMDb API or The Movie Database API). The app
should include multi-page routing, state management, and display movie details based on user
actions. The core functionality will focus on local and global state management, routing, and UI
components, with API integration as a bonus feature.
Project Features:
1. React Components
● Movie List Component: Displays a list of movies.
● Movie Item Component: Shows individual movie details (e.g., title, release date, rating).
● SearchBar Component: Allows users to search for movies by name.
● Header & Footer Components: Provide consistent layout and navigation across pages.
2. State Management & Side Effects
● useState:
○ Manage local state for movie search input, loading states, and selected movie
details.
○ Manage form states (if there's any filtering like genre or rating).
● useEffect:
○ Handle side effects such as updating the movie list when the user submits a
search query.
○ Possibly manage lazy loading or fetching initial data (if not handled by API
integration).
3. Global State Management
● useContext:
○ Manage global application state like theme (light/dark mode) or a favorites list for
movies.
○ Provide shared state (like user preferences) across different components without
prop drilling.
4. React Router DOM
● Implement multi-page navigation:
○ Home Page (/): Displays a list of popular or trending movies.
○ Movie Details Page (/movie/:id): Displays detailed information for a specific
movie.
○ Favorites Page (/favorites): Displays a list of favorite movies by the user.

● Use Link for navigation between pages and useNavigate for programmatic redirects
(e.g., after a search is submitted).
5. Bonus: API Integration with Axios
● GET Request: Use Axios to fetch movie data from an external API (e.g., OMDb API,
TMDB API) when a user searches or selects a movie.
● Display Results: Show search results in the movie list and detailed movie information
on a separate page.
Suggested Bonus Features:
● Pagination: Handle API pagination to load more movies as the user scrolls or clicks
"Load More."
● Error Handling: Manage errors gracefully when API requests fail (e.g., show a friendly
error message or fallback content).
● Favorites: Implement the ability to favorite movies, storing them in global state and
allowing users to view their favorite movies on a separate page.
