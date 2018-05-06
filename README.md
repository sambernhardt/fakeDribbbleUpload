# Bookmarklet Creator

An easy way to test and develop bookmarklets.

<br>

# Setup
Clone the project and install the dependencies.

1. `git clone https://github.com/sambernhardt/bookmarklet-creator.git`
2. `cd bookmarklet-creator`
3. `npm install`

<br>

# Develop

### 1. Start local server
- In the project directory, run `npm start` in the terminal.

<sub>[What's going on here?](#start-local-server) | [Troubleshooting](#start-local-server-1)</sub>

### 2. Use Dev. Bookmarklet
- Drag the development link to your bookmark bar

<sub>[What's going on here?](#use-dev-bookmarklet) |
[Troubleshooting](#use-dev-bookmarklet-1)</sub>


![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarklet-creator/master/assets/dev.gif)

### 3. Develop and Test
- Edit `bookmarklet.js` file and re-run the dev bookmarklet.

<sub>[What's going on here?](#develop-and-test)</sub>

![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarklet-creator/master/assets/edit.gif)

<br>

### 4. Save

- Drag the finalbookmarklet to your bookmark bar

  **or**
- Save compiled version found in `dist/bookmarklet.min.js`


![Development Bookmark](https://raw.githubusercontent.com/sambernhardt/bookmarklet-creator/master/assets/final.gif)

<br>

## What's going on here?

#### Start local server
- Starts a local & tunneled server to serve the assets your working on.
- Starts gulp to compile script into bookmarklet

#### Use Dev. Bookmarklet
- The dev bookmarklet injects `bookmarklet.js` into the desired page by using the tunnel server.

#### Develop and Test
- No description

<br>

## Troubleshooting

#### Start local server
- If you get a firewall error, retry npm start

#### Use Dev. Bookmarklet
- You must use a new bookmarklet if your tunnel server changes.
