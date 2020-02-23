## Getting Started

`yarn && yarn start`

## Demo

<a href="https://fanaticys.github.io/users-and-form/">Link</a>

## Description

In this project as state manager the 'redux' and other related libraries were used.
The reason is that redux is scalable and has lot of related libraries.

For application routing the 'react-router-dom' library was used. Because of the same reason it
is scalable and much simple to use existing implementation than write own from scratch.

Modular approach. Module has own state path and every module could be splitted to smaller reducers and so on. It is scalable and flexible approach.

This project requires optimization of unnecessary rendering by using 'memo' function for functional components.

Also instead of expandable list item it is much better to use another routing for specific user.
In real application it is new request to external API by user id.

Form validation can be improved.

'redux-form' may be used or some other libraries for forms.