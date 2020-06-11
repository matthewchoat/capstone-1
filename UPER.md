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
*I created a wireframe of the products page in the Balsamiq application.
*It includes a navbar with product categories, a shopping pack, and a product gallery with animation.
*I quickly styled the wireframe just to get a general idea/concept of my application.
*I know we haven't covered using APIs and Routers yet, but from my research, it seems like I may want to utilize them for this application.
*Even though the shopping pack will be a separate page, I plan to use bootstrap modals to open a smaller window for the shopping pack. That way, this will be a true "one page application" for the sake of fluid UX design. I will also utilize the "Styled Components" plugin to place most of my CSS at the end of each JSX file.
*Going to use Google Fonts and Font Awesome for custom fonts and navbar icons.
* I plan to separate all of my JSX into separate "components" and "actions" folders. I think isolating each part of the code is a good plan.
*
<h2>
    3. Executing the Plan
</h2>
* I looked up a few examples for inspiration and to learn about state and routers. First, I set up my file structure with folders for public images, components, actions, and Global States. I then set up imports for css, bootstrap, styled components and began customizing CSS.
I found an example that included zooming product images, similar to my wireframe, so I studied this example and adjusted my bootstrap/css to enable auto-zooming images on mouse-over using the "scale" command. Once my initial filestructure and design was set up, I then needed to populate the cart and cart functionality. Once this was all working, I began implementing the bonus views and filters and fixing bugs related to product quantity. My final task, after getting the search page working, was to add additional products from various categories.

*DIFFICULT TASKS: 

State-less hooks VS API/REDUX:
When looking up how to create online marketplaces in React, I found a lot of old examples that used Redux and global state configurations to set up everything. I followed one example to get my basic file structure built, however, I had to do serious refactoring while following the tutorial to change states to functions. My final result is drastically different than the example, but borrows certain elements from its sleek design. The only class in my application is the PayPal button class, this is a requirement of the react-paypal-button library I was using. The parts about Redux and Context API were very hard for me to follow, so I watched them several times. This was just a lot of information to learn at one time. I think my application can be refactored to not include Global States or Redux and instead using React Hooks everywhere for passing props. But I am glad that at least now I am exposed to these technologies as I'm sure we will be using them later.
 

PayPal Checkout: It seemed like every change I made would cause the paypal server to reject my data on checkout. I also had some trouble correctly calculating the Total price when it was sent to paypal. Those issues seem to be resolved, and the test server is working: Just use the PayPal Development server "USER ID" and "PASSWORD" commented out in the PayPal.js component to purchase items.

*SEARCH BAR: Needed a way to filter and map the product list so I wouldn't have to create multiple page views for different product types. I have written this logic that works manually, now I need to get the drop-down search to work from my nav bar and link it to my logic. UPDATE: I've got the bootstrap dropdown bar working and styled to my specifications. I'm now working on populating the product categories and testing out my array FILTER logic for each type. 
I've also added a separate Search page that is able to search products by any major prop type(name, serial, size, manufacturer, etc.) I had a lot of trouble getting this working just right, but I'm very happy with the way it's turned out.

+ADD PRODUCTS: It's taking a very long time to add new products and edited images. I'm moving new products down to the bottom of my priority list until I get everything else sorted out.

*ADDING ADMIN PAGE: This was a last minute request and I definitely want to accomplish it. I've got a new ADMIN nav bar link that goes to an admin inv. management page. Now I just need the "increment stock" button to work (currently errors out). Once I figure out how to fix that, I can make a corresponding decrement stock button. UPDATE: Figured out the bugs associated with incrementing and decrementing stock. I was trying to pass a temporary stock value with the original stock value and it wasn't cooperating. I've now added the increment/decrement logic into my useState Actions components and fixed other minor bugs I discovered while playing around with ADMIN item quantity and cart actions.

*
<h2>
    4. Reflection / Refactor
</h2>
*I think my biggest blocker starting this project was conceptualizing my final result as a "front end only" app. When dealing with online marketplaces and admin pages, not having it connect to a back end or being able to create user accounts to grant specific view/edit permissions was frusterating. I'm using to working with Ruby on Rails web applications that utilize PostgreSQL databases for account creation and data storage.
*
*I'm definitely going to need to refactor this application to cut down the extra files and use only React Hooks to accomplish all the actions. I will need to completely rewrite my reducer functions to accomplish this, but it will take more time than I had before this project was due. This was definitely a learning process, and I'm excited to continue with more back-end coursework so that I can make more sense of a complex application like this that uses a lot of data. 
*
*
*
*
*
*