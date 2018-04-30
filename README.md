# bookmarkletCreator


An easy way to test and develop bookmarklets.

---


## Setup
Clone the project and install the dependencies.

1. `git clone https://github.com/contentful/the-example-app.nodejs.git`
2. `cd the-example-app.nodejs`
3. `npm install`

## Run
Initialize the bookmarklet server and edit the `src/bookmarklet.js` file.

### 1. `npm start`
- Starts a local & tunneled server to serve the assets your working on.
- Starts gulp to compile script into bookmarklet

### 2. Drag the development link to your bookmarklet bar
- The dev link is a bookmarklet that inserts an uncompiled version of your script (that's being provided by the tunnel server).

### 3. Edit the `bookmarklet.js` file and re-run the dev bookmarklet.
- Just click the existing dev bookmarklet. The tunnel server will automatically deliver the correct code.

### 4. When you're ready to finalize your project, simply use the Compiled Bookmarklet.
- This has your actual compiled bookmarklet as the link.
