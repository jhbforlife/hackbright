# React Native Unit 4 Assessment

## Prompt

Build an interface for searching Star Wars Species via the Star Wars API with React Native.

## Requirements

User should only be shown results where **the species returned has a `"classification"` of `"mammal"`**.

There is not a mechanism for filtering by species classification in the API, so you will need to manipulate the response to achieve an accurate result.

## Endpoint

You will use the general _species endpoint_ from the [Star Wars API detailed here](https://swapi.dev/documentation#species).

## Specifications

### Screens

There should be at least 2 screens used for this application, though you can use more.

##### Screen 1

User should be able to make a choice by clicking a button and/or entering input to query the API on Screen 1.

If you'd like, you can extend functionality so that the user can refine their results by a different species type other than `"mammal"`, though this is not required.

##### Screen 2

User should see the results of their query on Screen 2.

### Navigation

You can navigate between the screens using your own logic, or by using the `react-navigation` library. You may use a different library if you have another preference, though it is not recommended.

### Styling

There are no strict styling requirements; however, you should include styling in this application. The design is up to you.

## Further Development

_There will not be extra credit given for this section, but if you are having fun building, we encourage you to delve deeper._

You can add any additional functionality you'd like using the same API. There are more endpoints that can be explored in [the SWAPI documentation here](https://swapi.dev/documentation).

_Example: You could use the `/api/films/` endpoint and create a screen that shows the opening crawl for a given film._

## Hint

If you need a reminder of how best to work with this API, you can reference the SWAPI demo from Week 3 Live Review.
