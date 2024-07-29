# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

To set up follow the steps:

# Step 1: Clone the Repository
git clone <repository_url>
cd <repository_folder_name>

# Step 2: Create a Vite React App
npm create vite@latest my-first-react-app -- --template react

# Step 3: Move the Created App to the Current Directory Using rsync
rsync -av --progress my-first-react-app/ . --exclude my-first-react-app

# Step 4: Remove the Empty Directory
rm -rf my-first-react-app

# Step 5: Install Dependencies
npm install

# Step 6: Start the Development Server
npm run dev

///////// Personal notes:
Test uuidv4 on other projects;
how to improve paragraph logic and text lines in description, make look better