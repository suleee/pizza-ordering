#Main Page/Order Page (15)
The order page displays the information about the 
* size of the pizza,
* type of crust and 
* available toppings. 
Use appropriate HTML controls like radio buttons and check box lists to display the information. The form also captures 
* quantity, 
* phone number and 
* address information of the customer.
When the submit button is clicked on this page it posts the data to the order confirmation page. The data for the size, crust type, cost details and available toppings should not be hardcoded but instead read from a JSON data file that you provide in the web site. Perform any data validation required – entering invalid data should not crash the server. Explore NPMJS for a validation module and make use of it rather than hand coding the validation.
(take 3hours)

#Order Confirmation Page (15)
The order confirmation page displays the 
* details of the order along with the total cost of the order. 
The cost of the order is determined using the price calculator module described below. This page displays two buttons – one to cancel the order and the other to confirm the order. Cancelling the order simply returns to the previous page. Confirming the order displays an order 
* confirmation message, 
* approximate time of delivery for the pizza. 
* Save each order’s data as a JSON file to a folder in your website when the order is confirmed. 
Explore the Node API to write the JSON data to a file.


#Price Calculator Module (10)
Create a PriceCalculator module that computes the price (along with tax) of the order based on the size and toppings chosen. Implement the PriceCalculator as an ES6 class and export it from the module.  All the code related to the calculation of the price for the order should be contained in this module.