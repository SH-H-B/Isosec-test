# Isosec-test
This is a User Management Web-App search page which returns a selection of users from a backend API and displays
them.

```
Frontend:

--On the web-app when user click on the search widget, the placeholder text slowly fade out, completely clearing
the placeholder. If the input is left blank and the search widgets focus is removed, the placeholder
should fade in slowly.

--If user click/tap into the search widget a focus state has been applied (browser default)

--User enter a single alphanumeric character into the search box no search results are displayed.

--User enter a two or more alphanumeric characters into the search box, a list of users returned from the “/users” API endpoint.

--User enter/remove characters from the search box
Then there should be debouncing implemented to remove unnecessary API requests.

--There’s no user data,user should see a message detailing “No users found”

-- User select a row/users in the table
Then the API endpoint “/users/{id}/friends” should be called. This information displayed in a list,
with an “go back” option to return to the table.

```


```
Backend:

Endpoints:
api/user
api/users/:{id}
api/users/:{id}/friends

--User request the API endpoint “/users” to usersThen I should be able to call the API endpoint and be provided with a list of users 
in JSON format
--Query amount,user should be able to call the API endpoint and specify the number of users through the use of
query parameters
And receive a list of users in JSON format.
--Query :serach, User request the API endpoint “/users?query=Jo” to retrieve all users who contain the
“query” string in their forename & surname.
Then, he should be able to call the API endpoint and specify the query string to filter users
And retrieve a list of users in JSON format
--User can request the API endpoint “/users/{id}” to retrieve a specific user
--User canrequest the API endpoint “/users/{id}/friends” to retrieve a specific users
“information”.

```




