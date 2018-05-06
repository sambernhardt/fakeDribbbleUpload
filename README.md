# Bookmarklet Creator


An easy way to test and develop bookmarklets.

---


## Setup
Clone the project and install the dependencies.

1. `git clone https://github.com/sambernhardt/bookmarkletCreator.git`
2. `cd the-example-app.nodejs`
3. `npm install`

---

# Development

### 1. Start local server
- Run `npm start`
- Starts a local & tunneled server to serve the assets your working on.
- Starts gulp to compile script into bookmarklet

### 2. Use Dev. Bookmarklet
- Drag the development link to your bookmark bar

![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarkletCreator/master/project/dev.gif)

### 3. Develop and Test
- Edit `bookmarklet.js` file and re-run the dev bookmarklet.

![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarkletCreator/master/project/edit.gif)

### 4. Save
- Save the Final Bookmarklet when you're ready (it's already compiled).

![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarkletCreator/master/project/final.gif)


## What's going on here?

The dev link is a bookmarklet that inserts an uncompiled version of your script (that's being provided by the tunnel server).
