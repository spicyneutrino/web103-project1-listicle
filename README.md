# Network Protocol Explorer

Submitted by: **[Your Name]**

This is a listicle web app for CodePath WEB103 Unit 1 Project 1.

## About this web app

Network Protocol Explorer is a compact, beginner-friendly visual reference for CS students
learning common networking protocols. It shows 6 protocols as clickable cards on a homepage,
and each protocol has its own detail page with full information (layer, transport, ports,
purpose, description, use cases, and an example).

Time spent: 2 hours

## Required Features

The following **required** functionality is completed:

- [x] Vanilla HTML/CSS/JS only
- [x] No frontend framework
- [x] Express backend
- [x] Homepage has a title
- [x] At least 5 unique list items (6 protocols)
- [x] Each homepage item displays at least 3 attributes (name, layer, ports, purpose, image)
- [x] Every item is clickable
- [x] Every item has a detail route/page (`/protocols/:slug`)
- [x] Detail page shows all fields
- [x] Custom 404 page
- [x] PicoCSS is loaded and used
- [x] Cards used for item presentation (stretch credit)

## Stretch Features

- [x] Card-based homepage layout with hover effect and layer/port badges

## Video Walkthrough

TODO: Add GIF walkthrough before submission

## Notes

No database is used; protocol data lives in `data/protocols.js` as a static in-memory array.
SVG illustrations in `public/images/` are simple original graphics.

## Setup / Run

```bash
npm install
npm start
```

Then open **http://localhost:3000** in your browser.
