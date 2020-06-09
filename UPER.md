<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
*I need to create an inventory/online storefront that includes products and a shopping pack.
*I'm going to need to learn several new React concepts to acccomplish this and possibly more if I want to go above and beyond.
*I will need someway to filter or search for specific products.
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
*I know we haven't covered using APIs yet, but I think it might be an ideal solution for storage. More on that after more research and testing.
*Even though the shopping pack will be a separate page, I plan to use bootstrap modals to open a smaller window for the shopping pack. That way, this will be a true "one page application" for the sake of fluid UX design. I will also utilize "Style Components" to place most of my CSS at the end of each JSX file.
*Going to use Google Fonts and Font Awesome to custom fonts
*Although this will be a one page application. I plan to separate all of my JSX into separate "components" and "actions" folders. I think isolating eachpart of the code is a good plan.
*
<h2>
    3. Executing the Plan
</h2>
* I looked up a few examples for inspiration and to learn about state and routers. First, I set up my filestructure with folders for public images, components, actions, and Global States. I then set up imports for css, bootstrap, styled components and began customizing CSS.
I found an online marketplace example that included zooming product images, similar to my wireframe, so I followed the guide to implement the auto-zooming images on mouse-over.

*DIFFICULT TASKS: 

PayPal Checkout: It seemed like every change I made would cause the paypal server to reject my data on checkout. I also had some trouble correctly calculating the Total price when it was sent to paypal. Those issues seem to be resolved, and the test server is working: Just use the PayPal Development server "USER ID" and "PASSWORD" commented out in the PayPal.js component to purchase items.

*FILTER BAR: Needed a way to filter and map the product list so I wouldn't have to create multiple page views for different product types. I have written this logic that works manually, now I need to get the drop-down search to work from my nav bar and link it to my logic.

+ADD PRODUCTS

*Decrement STOCK when adding to cart

*ADDING ADMIN PAGE: This was a last minute request and I definitely want to accomplish it. I've got a new ADMIN nav bar link that goes to an admin inv. management page. Now I just need the "increment stock" button to work (currently errors out). Once I figure out how to fix that, I can make a corresponding decrement stock button.

*ADMINITEM: Increment and decrement stock

*ADDITIONAL JSON Functionality: Definitely want to manage inventory directly in the JSON file 
*
<h2>
    4. Reflection / Refactor
</h2>
*
*
*
*
*
*
*
*