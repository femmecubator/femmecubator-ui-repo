import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MentorSearchBar from './MentorSearchBar';

// "describe" accepts 2 arguments a string and a function
// the first string should be the unit/ component you are attempting to test
// the callback function is where the logic for testing officially goes.

// What you need to test as a react component.
// MentorCard should have a Mentors name/ icon/ and bio
// check that each of these properties exist and show up in the card
// check if the button can be clicked and is visible
// afterEach(cleanup);

// 'testing' also accepts a string to denote the specific test, and a call back function
//  each test block: needs its own rendered item/ set up the enviornment so that that section can be tested start with a render
// than you can set up expectations of what you want to see.

// when running test your specific file npm run test <filename>

// I want to check if the search button is there and clickable
// check if the user input can be mimicked and sent
// check if submit function can be called
describe('<MentorSearhBar/>', () => {
  // test("Testing Search..", () => {
  //     render (<MentorSearchBar/>);
  // })
});
