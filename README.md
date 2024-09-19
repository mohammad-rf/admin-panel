# Admin Panel

This is a simple admin panel where you can view, add, edit, and delete users. The functionality relies on the `reqres` API, which unfortunately has limitations when it comes to updating, deleting, and creating users.

## Installation

To run this project, you need to ensure you are in the `admin-app` folder.

1. Clone the repository.
2. Navigate to the `admin-app` folder:
   ```bash
   cd admin-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Limitations with the API

Please note that the `reqres` API used for this project does not support actual updating, deleting, or creating of users. While the requests are sent and can be seen in the console logs, they don't perform any real changes. For instance, when trying to edit, add, or delete a user, the API will return a response, but no actual data manipulation occurs.

These operations log the response to the console so you can see what data is being sent and received. In a real-world scenario, with a proper API, all these actions (add, edit, delete) would function as expected.

## Author

- Mohammad Hassan Raoofat
- Email: mohammadhassanraoofat@gmail.com

