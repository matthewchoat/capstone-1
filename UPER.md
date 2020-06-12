<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
*I need to create an inventory/online storefront that includes products and a shopping pack.
*I'm going to need to learn several new React concepts to acccomplish this and possibly more if I want to go above and beyond.
*I will need some way to filter and search for specific products.
*I will need to implement some kind of checkout system with payment options.
*I will need a scalable document structure to handle lots of components.
*
*
*
<h2>
    2. Planning the Solution
</h2>
<p>
* I decided to make a longboard shop similar to www.zumiez.com. Researched skateboard stores and began conceptualizing layout.
*I created a wireframe of the products page in the Balsamiq application.
*It includes a navbar with product categories, a shopping pack, and a product gallery with animation.
*I quickly styled the wireframe just to get a general idea/concept of my application.
* I would like to learn about integrating Redux and Context API into my React app. My reasoining is that if I can have some surface level exposure to Redux and context API, If I need to utilize them in a future project, I will already be able to interpret it and potentially refactor it if I need to. We haven't covered using these technologies in this bootcamp so this will be something I'll have to find resources on myself.
*Even though the shopping pack will be a separate page, I plan to use bootstrap modals to open a smaller window for the shopping pack. I do have experience with Bootstrap and Modals from my Ruby on Rails experience, so I will hopefully get those created easily. I will also utilize the "Styled Components" plugin to place most of my CSS at the end of each JSX file.
*Going to use Google Fonts and Font Awesome for custom fonts and navbar icons.
* I plan to separate all of my JSX into separate "components" and "actions" folders. I think isolating each part of the code is a good plan.
*
</p>
<h2>
    3. Executing the Plan
</h2>
* I first began by researching States and Routers in React to set up my general file structure . First, I set up my file structure with folders for public images, components, actions, and Global States. I then set up imports for css, bootstrap, styled components and began customizing CSS.
I also needed to find out how to make auto-zoom images, and found the "Scale" css property. Setting the Scale above 1 and entering a Transition period. Once my initial filestructure and design was set up, I then needed to populate the cart and cart functionality. Once this was all working, I began implementing the bonus views and filters and fixing bugs related to product quantity. My final task, after getting the search page working, was to add additional products from various categories.

*DIFFICULT TASKS: 
<p>
State-less hooks VS API/REDUX:
When looking up information on React and store/shopping cart functionality, I researched some examples that used Context API and Redux. I built a basic file structure by reading some Redux resources, however, I had to do serious refactoring while following along to change the class examples to functions and hooks. The only class in my application is the PayPal button class, which is a requirement of the react-paypal-button library I was using. Truly understanding the differences in state management between Redux and React Hooks is something I would like to learn more about in the future. This was just a lot of information to learn at one time. I think my application can be refactored to not include Global States or Redux and instead using React Hooks for passing props. But I am glad that at least now I am exposed to these technologies as I'm sure we will be using them later.
 </p>
<p>
* PayPal Checkout: It seemed like every change I made would cause the paypal server to reject my data on checkout. I also had some trouble correctly calculating the Total price when it was sent to paypal. Those issues seem to be resolved, and the test server is working: Just use the PayPal Development server "USER ID" and "PASSWORD" commented out in the PayPal.js component to purchase items.
 </p>
 <p>
* SEARCH BAR: Needed a way to filter and map the product list so I wouldn't have to create multiple page views for different product types. I have written this logic that works manually, now I need to get the drop-down search to work from my nav bar and link it to my logic. UPDATE: I've got the bootstrap dropdown bar working and styled to my specifications. I'm now working on populating the product categories and testing out my array FILTER logic for each type. 
I've also added a separate Search page that is able to search products by any major prop type(name, serial, size, manufacturer, etc.) I had a lot of trouble getting this working just right, but I'm very happy with the way it's turned out. When I have more time, I will add this search bar to the Nav bar instead of being on it's own page view.
 </p>

  <p>
+ ADDING PRODUCTS & IMAGES: It's taking a very long time to add new products and edited images to the JSON data file. I'm moving new products down to the bottom of my priority list until I get everything else sorted out. UPDATE, currently about 25 products in different categories. This should be enough for now.
</p>

  <p>
* ADDING ADMIN PAGE: This was a last minute request and I definitely want to accomplish it. I've got a new ADMIN nav bar link that goes to an admin inv. management page. Now I just need the "increment stock" button to work (currently errors out). Once I figure out how to fix that, I can make a corresponding decrement stock button. UPDATE: Figured out the bugs associated with incrementing and decrementing stock. I was trying to pass a temporary stock value with the original stock value and it wasn't cooperating. I've now added the increment/decrement logic into my useState Actions components and fixed other minor bugs I discovered while playing around with ADMIN item quantity and cart actions.
 </p>
*
<h2>
    4. Reflection / Refactor
</h2>
  <p>
*I think my biggest blocker starting this project was conceptualizing my final result as a "front end only" app. When dealing with online marketplaces and admin pages, not having it connect to a back end or being able to create user accounts to grant specific view/edit permissions was frusterating. I'm using to working with Ruby on Rails web applications that utilize PostgreSQL databases for account creation and data storage.
*
 </p>
 <p>
*I'm definitely going to need to refactor this application to cut down the extra files and use only React Hooks + Context API to accomplish all the actions. I would ultimately like to replace the reducer, global state, and action files with React Hooks to accomplish this, but it will take more time than I had before this project was due. This was definitely a learning process, and I'm excited to continue learning more about React and Redux.
 <p>
*I would also like to add toasts for actions like adding to cart and completing payments, just didn't have time due to some QA issues with my search features. I plan to implement styled toasts using the Toastify library.
</p>
*
*
*
*