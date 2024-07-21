/*
  If you have not, be sure to cd into the project and run: npm install
  This will install the dependencies needed for the project ie. mocha and chai
  Check package.json for version numbers of dependencies when looking at documentation or examples.
*/

let expect = chai.expect; //imports the expect function from the chai library.

/*NOTE
    This is an example and as such may not work the same for you.
    Use this is a guide to help you understand how to write tests.
    Be sure to refer to the mocha/chai documentation for more information.
    */

//Describes what is being tested.
describe("Deck of Cards Length", () => {
  /*
  (done) is a parameter used to tell Mocha that this test is asynchronous.
  This means other tests can run while this test is running.
  */

  //Describe what the test is checking for.
  it("should see if the length of the card deck is equal to 52.", function (done) {
    let testDeck = new Deck(); //Creates a new deck of cards from the game itself. ie. war.js
    let cards = testDeck.cards; //Creates a variable that holds the card deck.
    let numberOfCards = cards.length; //Creates a variable that outputs the number of cards in the deck.

    console.log("Here is my cards:", cards);
    console.log("How many cards do I have?", numberOfCards); //Prints the cards to the console.

    //Checks if the number of cards is equal to 52.
    expect(numberOfCards).to.eql(52);

    done(); //Tells Mocha that the test is done.
  });
});

/*     lit-html snippet - Begin    Add to the top of your code. Works with html or jsx!    Formats html in a template literal  using the lit-html library     Syntax: html`<div> html or jsx here! variable </div>` */ //lit-html snippet - Begin let html = (strings, ...values) => {   let str = "";   strings.forEach((string, i) => {     str += string + (values[i] || "");   });   return str; }; //lit-html snippet - End
