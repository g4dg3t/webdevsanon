
# WebDevsAnon

This repository contains a regular website (the "regressive" branch) and a
version of that same website transformed into a progressive web app (the
"progressive" branch). It was created to be used at a talk and workshop
titled "From Regressive to Progressive Web Apps" that I gave at Google's Launchpad Space on December 12,
2016.

To see how the web page looks under "regular" circumstances, check out the
`regressive` branch. This contains the same content, but notably does not
include any of the features a modern progressive web app does (such as service
workers, a web manifest, etc.). Check out the `progressive` branch to see how it changes when PWA features are
included.

# Instructions

Follow these steps during the Launchpad Codelab.

1. __Fork & clone__.
  First fork this repository using the "fork" button on Github. Then clone it to your machine. (If you need help with this, there are a bunch of people around you who probably know what to do! If you can't use Git for some reason, just click Download ZIP instead)
- __Run a web server__.
  Use the Chrome extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en), which is the easiest to set up web server. Just point it to the folder you cloned the app into. Don't forget to check "Accessible on local network" so you'll be able to view the page on your phone.
- __Install Lighthouse__.
  You can get [Lighthouse](goo.gl/AaqeAl) from the Chrome Web Store.

## Check it out

Open Chrome and navigate to `127.0.0.1:8887`. To view it on your Android phone, open Chrome on your phone and navigate to whatever the Chrome web server app tells you is its network IP, eg. `192.168.1.101:8887`.

## Get the Lighthouse report

Lighthouse should have put a badge in your browser toolbar upon installation, so click while looking at the web app and it will open a new tab and generate the report.

## Start coding!

Now that you have the report, try to go through each piece of feedback it's giving you and fix the issue! If you run into any trouble you can reach out to me or any of the deputies, or just begin flailing and yelling and someone will eventually show up to help. __Have fun!__

## Checklist

- [ ] Get a Lighthouse score of 75 or higher.
- [ ] Get a Lighthouse score of 95 or higher. If you get this, reach out to me, I might have a neat gift for you :)
- [ ] Pass all the accessibility tests
- [ ] Pass the UX tests despite them not being implemented yet
- [ ] Get to interactive on your device within 5 seconds
- [ ] Implement the [PRPL pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
- [ ] Implement [AMP](https://ampproject.org) (see FAQ below).

## Resources

- [Your first PWA](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/)
- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
- [Remote Debugging](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Offline Codelab](https://codelabs.developers.google.com/codelabs/offline/index.html#0)

## Examples

- [Ride with Lyft](https://ride.lyft.com/)
- [Washington Post](https://washingtonpost.com/pwa)
- [code.nasa.gov](https://code.nasa.gov/)
- [Google's Santa Tracker](https://santatracker.google.com)
- [Pokedex](https://pokedex.org)
- [pwa.rocks](https://pwa.rocks/)

## FAQ

### How can I get icons?

Use [realfavicongenerator.net](http://realfavicongenerator.net/). This site also handily generates your `manifest.json` for you!

### How do I do remote debugging?

Connect your phone to your computer using a USB cable, turn on USB debugging in settings, and then open DevTools on your computer. Click the little stoplight button in the top right of DevTools, choose "More Tools" and then "Remote debugging". From there you can find your device's Chrome browser and inspect its open tabs.

### I'm done early. Now what?

If this was boring/too easy/you just got done fast, here's another fun thing to check out: make it an [AMP](https://ampproject.org) page! The idea is that this page could be found on Google, so convert it to an AMP and use the `<amp-install-serviceworker />` element to have it upgrade itself to a PWA once the user visits the first time. Spoiler alert: check out the `progressive-with-amp` branch to see the completed version of the app with AMP enabled.
