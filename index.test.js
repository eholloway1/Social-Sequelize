const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const seed = require("./seed/seed.js");
const {describe, it, expec } = require("@jest/globals");

beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
    await seed();
    
});

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */

    // Write your tests here
    
    test("replace with your test", function() {
        expect(true).toBe(true);
    });

});