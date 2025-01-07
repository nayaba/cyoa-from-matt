# Choose Your Own Adventure

Create a "Choose Your Own Adventure" style game.  This is a story where the user is frequently asked what the protagonist should do.  The story progresses based on what the user says should happen.

## Setup

Open your Terminal application and navigate to your ~/code/ga/labs directory:

```zsh
cd ~/code/ga/labs
```

Make a directory for this lab called `choose-your-own-adventure`, `cd` into it, and create an `app.js` file in it:

```zsh
mkdir choose-your-own-adventure
cd choose-your-own-adventure
touch app.js
```

We'll now install a 3rd party javascript package that will allow us to get input from the user:

```zsh
npm install prompt-sync
```

Open your current directory in VSCode:

```zsh
code .
```

In VSCode, add the following to `app.js`:

```javascript
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
```

**TIPS:**

- Use the provided `prompt()` function to retrieve input from the user.
- make the your terminal the width of the screen if you start seeing weird issues happening, especially if it's formatting the text oddly.
- Use variables to keep track of things that have happened in the story (e.g. how much money the user has, has the user accomplished certain tasks)
- Try to turn the app into as much of a game as possible, as opposed to just a simple story
