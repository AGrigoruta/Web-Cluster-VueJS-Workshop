
# vuejs-covid-hotseating-manager
## 7-save-seating

 1. Keep the state of the currently selected seat:
	- Create a new state variable in the store (e.g. activeSeat) (**main.js**)
	- Create a mutation to update the seat state (**main.js**)
	- Update seat data on click (**OfficeMap.vue**):
		- Get the clicked seat object from the seat configuration by using the **getSeatById** getter
		- Update the **person, occupied and dayId** attributes from the retrieved object
		- Call the mutation created to update the seat state in the store
 2. Send the selected seat towards the database:
	- Add two buttons for submitting the selected seat and for clearing the selected seat (**Seating.vue**)
	- Buttons should only appear after a seat has been selected (**Seating.vue**)
	- Create a new action in which you should post the data towards the database (**main.js**)
		- You should add these headers in order for the request to work properly:
			- `{
            'Accept': 'application/json',
           'Content-Type': 'application/json'
        }`
        -  In the body you should send the active seat in the store as a string
     - Add a method for clearing the seats
	     - **BONUS POINTS** if you don’t create a new mutation for this
     - Add a method for submitting the seat
 3. Handle double reservation on the same day:
	 - Verify on seat click if logged in user has another seat on his name (**OfficeMap.vue**)
		 - **Hint**: check the seats from the store and check the usernames available
