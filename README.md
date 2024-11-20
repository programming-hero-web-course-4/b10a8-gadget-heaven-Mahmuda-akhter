
---

## Live Website
Visit the live version of the project:  
https://gadgethaven-ass-8.netlify.app/

---

## Requirement Document
Access the detailed project requirements: 
https://drive.google.com/file/d/1IsDCOUxH3iyXLId-ME825lF2pgxDEE02/view?usp=sharing

---

## React Fundamentals Used
This project is built using core React concepts, including:

1. **Components**: Modular and reusable UI components like `NavBar`, `Categories`, and `Dashboard`.
2. **State Management**: Utilized `useState` for managing dynamic data.
3. **Routing**: Implemented with `react-router-dom` to handle navigation and dynamic routes.
4. **React Hooks**:  
   - `useEffect`: For handling side effects like fetching data and updating states.  
   - `useLoaderData`: To retrieve data from loaders.  
   - `useParams`: For accessing route parameters.
5. **Conditional Rendering**: Used to dynamically display content such as product availability and button states.

---

## Data Handling
- **Local Storage**: Used to persist cart and favorite items across sessions.

---

## Website Features
1. **Dynamic Product Listing**  
   - Displays gadgets by category selection.  
   - Data populated dynamically using JSON files.

2. **Product Details Page**  
   - Displays detailed information including price, specifications, and availability.  
   - Integrated `ReactStars` for rating input.

3. **Cart and Wishlist**  
   - Add and manage products in the cart or wishlist.  
   - Prevent duplicate additions by disabling buttons.

4. **Interactive Statistics**  
   - Visualized product data using the `recharts` library.  
   - Includes charts for product price and categories.

5. **Error Handling**  
   - Custom `ErrorPage` for unmatched routes or other issues.
