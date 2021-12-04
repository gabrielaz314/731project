# 731project start

**To run this project:**

1. Download the project folder
2. In the command line, navigate to the project folder and run `npm install`
3. Once the installation is complete, run `npm start` to run the project. It should open to the homepage.


Notes:
UI files are in folder [views](https://github.com/gabrielaz314/731project/tree/master/views)
Files are .hbs (handlebar files, use HTML syntax)

# Testing

**To use testing tool Nightwatch.js:** [(Nightwatch.js Docs)](https://nightwatchjs.org/guide/getting-started/introduction.html)
1. Make sure you have the most recent changes in your local directory, from the master branch.
2. In the command line, navigate to the project folder and run the following:
      -  `npm install nightwatch`
      -  `npm install geckodriver --save-dev`  (for firefox browser)
      -  `npm install chromedriver --save-dev`  (for chrome browser)
3. If you are using a different browser you will need to install a different Browser Driver, see [Nightwatch.js docs](https://nightwatchjs.org/guide/getting-started/installation.html).
4. Once everything is installed, you can check if everything is set up properly by running a sample test provided by Nightwatch.js, to check run:
      - `npx nightwatch node_modules/nightwatch/examples/tests/ecosia.js --env chrome`     (replace 'chrome' with your browser if running a differnt browser; see [Nightwatch.js docs](https://nightwatchjs.org/guide/getting-started/quickstart.html))

5. Tests for this project are located in the [tests](https://github.com/gabrielaz314/731project/tree/master/tests) folder. To run these tests:
      - Run `npm start` to run the project
      - In a seperate terminal, navigate to the project folder and run `npx nightwatch tests --env chrome` (replace 'chrome' with your browser)
      - Note: the above command runs ALL the tests in the 'tests' folder
      - The tests assume that the project is running in `http://localhost:3000/`, to change this the [browser url](https://github.com/gabrielaz314/731project/blob/master/tests/A-mainElements.js#L3) in each testing file needs to be changed.

Notes: 
- Add all new tests to the [tests](https://github.com/gabrielaz314/731project/tree/master/tests) folder.
