# inappropriate-content

List of inappropriate, illegal, scam, and plausible, websites and words

We hadn't been able to find a useful open filter anywhere that holds websites and words that are inappropriate for use in most places, so we decided to build our own list out of websites We've seen that we know are bad, and some words too.  

These lists are free to use with no credit required. Feel free to open a PR adding anything you think may be missing, or if you find a website or word that's not actually inappropriate, you can open a PR to remove that too.

## Showcase
A small list of biggest projects using inappropriate-content API:

1 - [Mardatonne](https://mardatonne.tk) (A Discord bot)

## Adding to the list

To add a word to the list, simply create a file inside the words called the name of the word (for example, `words/foo` for the word `foo`). You can also add phrases, to do so just replace the spaces with underscores.  

If you are adding a website, add a file with the full domain name inside the websites folder and mark it as one of the [these categories](#website-categories) by putting the category name inside the file as JSON with the key `category`. You'll also need to add an optional but recommended explanation of the site with the key `description` (if you find a site with no description, feel free to add one).  
Afterwards, you can open a PR to add it and we will review and merge.

## Using the list

Before you use the list, you'll want to build the JSON files:

```bash
node build.js
```

This will result in two files inside `dist/` (`words.json`, `websites.json`). Inside each JSON file is an array containing all entries. You can then scan each entry for inappropriate content, and filter as appropriate.  
There is also [an API](https://github.com/NeotiDev/inappropriate-content/wiki/API-Reference) if you'd like to use that. Websites will be categorized like this:

```json
[
  {
    "domain": "example.com",
    "category": "plausible",
    "explanation": "Example is an example domain. Blah blah blah..."
  }
]
```

Words will be sorted in an array as strings.

## Website Categories

- `pornography`
  - Any website containing some sort of pornographic material.
- `cam`
  - Any website involving inappropriate camera videos
- `dating`
  - Any site that involves dating.
- `chatroom`
  - Any website that involves communication.
- `gambling`
  - Any website that involves gambling.
- `social`
  - Social networks that aren't necessarily inappropriate, but may need to be blocked in certain cases.
- `harmful`
  - Any website that attempts to force users to download content that can be harmful for any device.
- `scam`
  - Any website that attempts to scam the visitor in some way.
- `illegal`
  - Any illegal content that does not match any other categories.
- `inappropriate`
  - Any inappropriate content that does not match any other categories.
- `proxy`
  - Websites that provide online proxies. Mirrors are not counted!
- `plausible`
  - Any website that may not necessarily be inappropriate, but may need to be blocked in some cases.
