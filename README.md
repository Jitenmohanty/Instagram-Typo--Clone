Instagram Clone Readme
-----------------------

Project Overview:
----------------
This is an Instagram clone project created using Appwrite as the backend, Tanstack Query for query fetching and processing, and Tailwind CSS for styling.

Features:
---------
- User registration and authentication.
- Posting photos and captions.
- Liking and commenting on posts.
- Following and unfollowing users.
- Explore and discover new posts and users.
- Notifications for likes and comments.
- User profiles with posts, followers, and following lists.

Getting Started:
----------------
1. Clone the repository:
   git clone https://github.com/Jitenmohanty/Instagram-Typo--Clone.git

2. Install project dependencies:
   cd Instagram-Typo--Clone
   npm install

3. Configure your backend:
   - Set up an instance of Appwrite as your backend service.
   - Update the Appwrite configuration in your project to connect to your Appwrite backend.

4. Start the development server:
   npm run dev

5. Open your web browser and navigate to http://localhost:5173 to view your Instagram clone.

6. Before setup you have to learn about appwrite and create .env file for
   https://appwrite.io/
   1. appwrite-api: "",
   2. DatabseId,
   3. CollectionsId,
   4. StorageId,
   5. ImageID(Save image id).
   * How set up in vite env file demo i put inside parent derectory --> .env.sample

Technologies Used:
------------------
- React and TS: Frontend library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Tanstack Query: A data-fetching and state management library for React.
- Appwrite: An open-source backend server for web and mobile developers.

Directory Structure:
-------------------
- src/ - Contains the source code for the frontend React application.
- src/lib/appWrite -API services and functions for interacting with the backend (Appwrite).
- src/components/shared/ - React components that use any where on other components.
- src/root/pages/ - Individual pages of the application.
- src/auth/ - All authentication Pages are here.
- src/App.css - Custom styling and Tailwind CSS classes.
- src/lib/query/ - Utility functions and helpers.

Contributing:
-------------
We welcome contributions to make this Instagram clone even better! If you want to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Create a pull request with a clear description of your changes.

License:
--------
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments:
----------------
Special thanks to the developers of Appwrite, Tanstack Query, and Tailwind CSS for creating the tools and technologies that make this project possible.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
