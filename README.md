 # HulkApps E-commerce Website 
live demo:  https://hulkappecoomerce.netlify.app/

Welcome to the HulkApps E-commerce Website repository! This project is a React application built with ReactJs, HTML5, CSS, Redux , showcasing a shopping cart functionality using Redux Toolkit.

## Tech Stack

- **React (v18.2.0):** JavaScript library for building user interfaces.
- **Vite (v5.0.8):** A build tool that aims to provide a faster and more efficient development experience.
- **Redux Toolkit (v2.0.1):** The official, opinionated, batteries-included toolset for efficient Redux development.
- **React-Redux (v9.0.4):** Official React bindings for Redux.
- **React Axios (v2.0.6):** A lightweight wrapper around Axios for making HTTP requests in React applications.
- **React Icons (v4.12.0):** A popular library for including SVG icons in React projects.

## Project Setup

Follow these guidelines to set up and run the project locally on our machine.



### 1. Install Dependencies and adding required data

#### 1.1 Clone the Repository

git clone https://github.com/itsjxi/HulkApps23.git
cd HulkApps23
npm create vite@latest
This command installs the required dependencies specified in the package.json file.

#### 1.2 Install Additional Dependencies
npm install redux axios react-icons

#### 1.3 Add JSON Data and Images
Copy and paste the JSON data from the provided link into the public folder.
Add useful images for the bottom page from the source link in JPG format into the public folder.

### 2  Start the Development Server
npm run dev
This command starts the development server, making the project accessible at http://localhost:5473 in the browser.

### 3 Open in Browser
Open our web browser and navigate to http://localhost:5473 to view the running project.

## 4  Available Scripts
npm run dev: Start the development server.
npm run build: Build the production-ready application.
npm run lint: Run ESLint for code linting.
npm run preview: Preview the production build.

## 5. Deploying to Netlify

### 5.1 Create a Netlify Account

Sign up for a Netlify account if you don't have one.

### 5.2 Connect to our GitHub Repository

On the Netlify dashboard, follow these steps:

1. Click "New site from Git."
2. Select our GitHub repository.
3. Configure the build settings.

### 5.3 Deploy Our Site

Netlify automatically triggers a new build and deploys our site.

### 5.4 Access Our Live Site

Once the build is complete, our site will be live at [https://hulkappecoomerce.netlify.app/](https://hulkappecoomerce.netlify.app/).


## Approach to the Project

### 1. Deep Dive into Data:
In the initial phase of the project, I conducted a comprehensive examination of the provided data. This involved scrutinizing the structure and content of the data to gain insights into the available information.

### 2. Understanding UI Requirements:
To effectively translate the data into a user interface, I carefully considered the UI requirements. This process involved visualizing how to present color and size options to users, especially focusing on products with variants to ensure a comprehensive approach.

### 3. Implementing Variant Selection:
A crucial aspect of the project was the implementation of variant selection. This involved allowing users to choose color and size and dynamically selecting the appropriate variant for adding to the cart. Implementing this functionality required meticulous handling of state changes and ensuring seamless connections between relevant components.

## What I Liked

I thoroughly enjoyed every aspect of this project, with a particular emphasis on the cart functionality. The integration of Redux Toolkit and React-Redux provided a seamless and efficient state management solution, contributing to an organized and scalable structure for the application.

## Challenges Faced

One notable challenge emerged during the implementation of variant selection and adding the selected variant to the cart. Navigating through state changes and establishing the correct component connections demanded careful consideration. Overcoming this obstacle proved to be a valuable learning experience, enhancing my understanding of React's state management and strengthening my overall problem-solving skills.

## Estimated Time
to complete the project it took me approximately 3 days 


##  Tasks need to be done 

### 1. AddToCart Functionality
- [ ] Implement the AddToCart functionality.
- [ ] Ensure that clicking the "Add To Cart" button adds the product to the cart.
- [ ] Follow the behavior and UI specifications outlined in the XD file.

### 2. Cart Drawer Functionality
- [ ] Develop a Cart Drawer that displays items added to the cart.
- [ ] Implement the ability to manage products using the quantity button.
- [ ] Enable the removal of items from the cart drawer using the remove button.
- [ ] Ensure that every action in the cart drawer reflects in the cart subtotal.

### 3. Variant Selection
- [ ] Implement the ability to select variants based on the combination of size and color.
- [ ] Ensure that the selected variant is accurately added to the cart.

## Completion Status

- [ ] AddToCart functionality successfully implemented.
- [ ] Cart Drawer functionality is complete, allowing users to manage and remove items with corresponding updates to the cart subtotal.
- [ ] Variant selection based on size and color is implemented and functioning correctly.

## Project Completion

✅ **I have completed the entire project, including the implementation of AddToCart functionality, Cart Drawer features, and Variant Selection based on size and color. The project aligns with the specified behavior and UI outlined in the XD file. Also in Addition I try to make the site responsive too**
