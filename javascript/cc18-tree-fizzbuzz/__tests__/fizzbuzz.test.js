'use strict';


let { KaryTree, treeFizzBuzz, Node } = require('../index.js');

// Testing treeFizzBuzz function

describe('Testing treeFizzBuzz function', () => {

  it('Should replace values divisible by 3 with "Fizz"', () => {
    let n1 = new Node(10);
    let n2 = new Node(3); // should change to 'Fizz'
    let n3 = new Node(5);
    let n4 = new Node(9); // should change to 'Fizz'
    n1.children = [n2, n3];
    n2.children = [n4];
    // instantiate kary tree
    let tree = new KaryTree();
    // add nodes to tree
    tree.add(n1);
    let fizzBuzzTree = treeFizzBuzz(tree);
    // testing node 2
    expect(fizzBuzzTree.root.children[0].value).toEqual('Fizz');
    // testing node 4
    expect(fizzBuzzTree.root.children[0].children[0].value).toEqual('Fizz');
  });

  it('Should replace values divisible by 5 with "Buzz"', () => {
    let n1 = new Node(10); // should change to 'Buzz'
    let n2 = new Node(3);
    let n3 = new Node(5); // should change to 'Buzz'
    let n4 = new Node(9);
    n1.children = [n2, n3];
    n2.children = [n4];
    // instantiate kary tree
    let tree = new KaryTree();
    // add nodes to tree
    tree.add(n1);
    let fizzBuzzTree = treeFizzBuzz(tree);
    // testing node 2
    expect(fizzBuzzTree.root.value).toEqual('Buzz');
    // testing node 4
    expect(fizzBuzzTree.root.children[1].value).toEqual('Buzz');
  });

  it('Should replace values divisible by 3 and 5 with "FizzBuzz"', () => {
    let n1 = new Node(15); // should change to 'FizzBuzz'
    let n2 = new Node(3);
    let n3 = new Node(5);
    let n4 = new Node(30); // should change to 'FizzBuzz'
    n1.children = [n2, n3];
    n2.children = [n4];
    // instantiate kary tree
    let tree = new KaryTree();
    // add nodes to tree
    tree.add(n1);
    let fizzBuzzTree = treeFizzBuzz(tree);
    // testing node 2
    expect(fizzBuzzTree.root.value).toEqual('FizzBuzz');
    // testing node 4
    expect(fizzBuzzTree.root.children[0].children[0].value).toEqual('FizzBuzz');
  });

  it('Should turn numbers into a String if they are not divisible by 3 or 5', () => {
    let n1 = new Node(15);
    let n2 = new Node(22); // should change to String
    let n3 = new Node(5);
    let n4 = new Node(19); // should change to String
    n1.children = [n2, n3];
    n2.children = [n4];
    // instantiate kary tree
    let tree = new KaryTree();
    // add nodes to tree
    tree.add(n1);
    let fizzBuzzTree = treeFizzBuzz(tree);
    // testing node 2
    expect(fizzBuzzTree.root.children[0].value).toEqual("22");
    // testing node 4
    expect(fizzBuzzTree.root.children[0].children[0].value).toEqual("19");
  });
});
