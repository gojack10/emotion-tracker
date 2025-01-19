# Emotion Tracker

A modern web application for tracking and understanding emotions using a hierarchical tree structure. This app helps users explore, record, and analyze their emotions with an intuitive interface and robust data management.

## Features

- **Interactive Emotion Tree**: Navigate through a hierarchical structure of emotions
- **Emotion Recording**: Document emotions with timestamps and personal reasons
- **History Tracking**: View and analyze your emotional journey over time

## Tech Stack

- **Frontend**: React
- **UI Framework**: Material-UI
- **Storage**: IndexedDB
- **State Management**: React Context API
- **Routing**: React Router
- **Build Tool**: Create React App

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or higher)
- yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gojack10/emotion-tracker.git
   cd emotion-tracker
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.

## Usage

1. **Navigate the Emotion Tree**: Click through the emotion hierarchy to find specific emotions
2. **Record an Emotion**: Select an emotion and add optional notes about why you're feeling that way
3. **View History**: Check your emotion history with timestamps and reasons
4. **Manage Data**: Export your data for backup or import previously saved records

## Project Structure

```
src/
├── components/          # React components
│   ├── EmotionTree.js  # Main emotion navigation component
│   ├── EmotionNode.js  # Individual emotion display
│   └── ...
├── data/               # Data models and constants
│   └── emotions.js     # Emotion hierarchy definition
├── db/                 # Database operations
│   └── database.js     # IndexedDB setup and operations
├── styles/             # Component styles
│   └── components/     # Component-specific styles
├── App.js             # Main application component
└── index.js           # Application entry point
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Emotion hierarchy based on research in psychological studies
- Built with [Create React App](https://github.com/facebook/create-react-app)
- UI components from [Material-UI](https://mui.com/) 