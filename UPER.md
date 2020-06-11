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
* I plan to separate all of my JSX into separate "components" and "actions" folders. I think isolating eachpart of the code is a good plan.
*
<h2>
    3. Executing the Plan
</h2>
* I looked up a few examples for inspiration and to learn about state and routers. First, I set up my filestructure with folders for public images, components, actions, and Global States. I then set up imports for css, bootstrap, styled components and began customizing CSS.
I found an online marketplace example that included zooming product images, similar to my wireframe, so I followed the guide to implement the auto-zooming images on mouse-over.

*DIFFICULT TASKS: 

State-less hooks VS API/REDUX:
So, when I was researching ways to create an online store, I found an older tutorial 
that used Global States and classes to build a marketplace. I decided to follow this tutorial because I did like the overall design on the end-result, but I decided to try and refactor it as I learned. So, there aren't any classes in my version, everything is a function (except PayPal function, this is a requirement of the library I was using). The parts about Redux and Context API were very hard for me to follow, so I watched them several times. This was just a lot of information to learn at one time. I think my application can be refactored to not include Global States or Redux and instead using React Hooks everywhere for passing props. But I a glad that at least now I am exposed to these technologies as I'm sure we will be using them later.
 

PayPal Checkout: It seemed like every change I made would cause the paypal server to reject my data on checkout. I also had some trouble correctly calculating the Total price when it was sent to paypal. Those issues seem to be resolved, and the test server is working: Just use the PayPal Development server "USER ID" and "PASSWORD" commented out in the PayPal.js component to purchase items.

*SEARCH BAR: Needed a way to filter and map the product list so I wouldn't have to create multiple page views for different product types. I have written this logic that works manually, now I need to get the drop-down search to work from my nav bar and link it to my logic. UPDATE: I've got the bootstrap dropdown bar working and styled to my specifications. I'm now working on populating the product categories and testing out my array FILTER logic for each type. 

+ADD PRODUCTS: It's taking a very long time to add new products and edited images. I'm moving new products down to the bottom of my priority list until I get everything else sorted out.

*Decrement STOCK when adding to cart

*ADDING ADMIN PAGE: This was a last minute request and I definitely want to accomplish it. I've got a new ADMIN nav bar link that goes to an admin inv. management page. Now I just need the "increment stock" button to work (currently errors out). Once I figure out how to fix that, I can make a corresponding decrement stock button. UPDATE: Figured out the bugs associated with incrementing and decrementing stock. I was trying to pass a temporary stock value with the original stock value and it wasn't cooperating. I've now added the increment/decrement logic into my useState Actions components and fixed other minor bugs I discovered while playing around with ADMIN item quantity and cart actions.

*
<h2>
    4. Reflection / Refactor
</h2>
*
*I'm definitely going to need to refactor this application to use only React Hooks to accomplish all actions. This was definitely a learning process, and I'm excited to continue with more back-end coursework so that I can make more sense of a complex application like this that uses a lot of data. 
*
*
*
*
*
*