# Isosec-test

This is a _responsive mobile/desktop_ User Management Web-App search page which returns a selection of users from a backend API and displays
them.

Language: ​JavaScript

Frontend: React, CSS, Bootstrap,

1. On the web-app when user click on the search widget, the placeholder text slowly fade out, completely clearing
   the placeholder. If the input is left blank and the search widgets focus is removed, the placeholder
   should fade in slowly.

2. If user click/tap into the search widget a focus state has been applied (browser default)

3. User enter a single alphanumeric character into the search box no search results are displayed.

4. User enter a two or more alphanumeric characters into the search box, a list of users returned from the “/users” API endpoint.

5. User enter/remove characters from the search box
   Then there should be debouncing implemented to remove unnecessary API requests.

6. There’s no user data,user should see a message detailing “No users found”

7. User select a row/users in the table
   Then the API endpoint “/users/{id}/friends” should be called. This information displayed in a list,
   with an “go back” option to return to the table.

Backend: Node.js, Express

Endpoints:

```
api/user
api/users/:{id}
api/users/:{id}/friends

```

1. User request the API endpoint “/users” to users,then I should be able to call the API endpoint and be provided with a list of users in JSON format
2. Query amount,user should be able to call the API endpoint and specify the number of users through the use of
   query parameters and receive a list of users in JSON format.
3. Query :serach, User request the API endpoint “/users?query=Jo” to retrieve all users who contain the
   “query” string in their forename & surname.
   Then, he should be able to call the API endpoint and specify the query string to filter usersand retrieve a list of users in JSON format
4. User can request the API endpoint “/users/{id}” to retrieve a specific user
5. User canrequest the API endpoint “/users/{id}/friends” to retrieve a specific users “information”.

## Getting Started

Follow these instructions in order to get a copy of the project up and running on your local machine for development and testing purposes.

## Installing

1. First of all fork this project to your own repo.

2. Clone the repo remotely by executing this command:

```
https://github.com/SH-H-B/Isosec-test.git
```

3. Change directory to the local repo file.

4. Running the following command will install the dependencies:

```
npm install
npm run dev ---> run the server
npm test ---> run the test
cd ../view/user-management  => npm install (for react dependencies)
cd ../view/user-management  => npm start ---> run react
```

5. The dependencies are required for development purposes, for convenience they are also listed below:

```
 "@reach/router": "^1.2.1",
    "axios": "^0.18.1",
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1",
    "resolve-url-loader": "^3.1.0",


```

## Built With

- [Node.js](https://nodejs.org/en/docs/)
- [Reactjs](https://reactjs.org/docs/getting-started.html)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

## Authors

- **[Shiva Heydaribeni](https://github.com/SH-H-B)** - _Author_
