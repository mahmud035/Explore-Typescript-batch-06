"use strict";
var language = 'Typescript';
var description = {};
var friends = ['John', 'Smith'];
var user = {
    name: 'userName',
    email: 'userEmail',
};
friends.forEach(function (friend) {
    description[friend] = friend + ' on fire';
});
