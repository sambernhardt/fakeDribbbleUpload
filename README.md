# Bookmarklet Creator

An easy way to test and develop bookmarklets.

<br>

## Setup
Clone the project and install the dependencies.

1. `git clone https://github.com/sambernhardt/bookmarkletcreator.git`
2. `cd bookmarkletcreator`
3. `npm install`

<br>

## Develop

#### 1. Start local server
- In the project directory, run `npm start` in the terminal.

###### What this does:
- Starts a local & tunneled server to serve the assets your working on.
- Starts gulp to compile script into bookmarklet

###### Troubleshooting:
- If you get a firewall error, retry npm start


#### 2. Use Dev. Bookmarklet
- Drag the development link to your bookmark bar

###### What this does:
- The dev bookmarklet injects `bookmarklet.js` into the desired page by using the tunnel server.

###### Troubleshooting:
- You must use a new bookmarklet if your tunnel server changes.

![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarkletCreator/master/project/dev.gif)

#### 3. Develop and Test
- Edit `bookmarklet.js` file and re-run the dev bookmarklet.

![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarkletCreator/master/project/edit.gif)

<br>

## Save

- Drag the finalbookmarklet to your bookmark bar

  **or**
- You can also find a compiled version in `dist/bookmarklet.min.js`

## Troubleshooting
