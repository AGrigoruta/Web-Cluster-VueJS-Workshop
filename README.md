
# vuejs-covid-hotseating-manager
## 6-login

 1. Use the input and submit button to login the user -> see https://v3.vuejs.org/guide/forms.html#basic-usage
	- Use **localstorage** to simulate the user login -> see **setItem**
	- Create a new state variable inside the store (e.g. username) (**main.js**)
	- Add a mutation in order to update the username state (**main.js**)
 2. Display the logged in user name:
	- Add a getter to retrieve the username state (**main.js**)
		- *HINT: Also check the **localstorage** -> **getitem**
	- Display the name in the template (**Seating.vue**)
 3. Create the possibility to logout the user:
	 - Add a mutation in order to logout the user (**main.js**)
	 - Change the route towards About after you click logout (**Seating.vue**)
 4.  Check if user is logged in
	 -  Add a getter in which you should store if the user is logged in (**main.js**)
	 - Use the getter to toggle between the form (input + submit button) and the Username display + logout button + Office Map (**Seating.vue**)