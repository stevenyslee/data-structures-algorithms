// Given information about active users on the network, find the shortest route for a message from one user (the sender) 
// to another (the recipient). Return an array of users that make up this route.

// There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.

// Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

//   var network = {
//     'Min'     : ['William', 'Jayden', 'Omar'],
//     'William' : ['Min', 'Noam'],
//     'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
//     'Ren'     : ['Jayden', 'Omar'],
//     'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
//     'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//     'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
//     'Noam'    : ['Nathan', 'Jayden', 'William'],
//     'Omar'    : ['Ren', 'Min', 'Scott'],
//     ...
// };

// For the network above, a message from Jayden to Adam should have this route:

//   ['Jayden', 'Amelia', 'Adam']

function createPath(path, start, end) {
    let route = [];
    let current = end;
    while (current) {
        route.unshift(current);
        current = path[current];
    }
    return route;
}

function shortestRoute(network, start, end) {
    let queue = [start];
    let path = { [start]: null };
    while (queue.length) {
        let node = queue.shift();
        if (node === end) {
            return createPath(path, start, end);
        }
        network[node].forEach((user) => {
            if (!path.hasOwnProperty(user)) {
                path[user] = node;
                queue.push(user);
            }
        });
    }
}

var network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
};

function assertEquals(a, b, desc) {
    if (JSON.stringify(a) === JSON.stringify(b)) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} !== ${b}`);
    }
}

desc = 'Short path';
assertEquals(shortestRoute(network, 'Jayden', 'Adam'), ['Jayden', 'Amelia', 'Adam'], desc);