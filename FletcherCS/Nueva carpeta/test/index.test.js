'use strict';
const core = require('../lib/index');
const fs = require('fs');
const sinon = require('sinon');
const dummy = require('./sinonObjects/writeDirectory.dummy');

/*
test('writeDirectory', (done) => {
    const stub = sinon.stub(fs, 'mkdirSync').callsFake(() => {
        return true;
    });

    const promise = core.WriteDirectory('front_modules', 'petter');

    expect.assertions(1);
    return promise.then(data => {
        expect(data).toBe(true);
        done();
        stub.restore();
    });
});
*/
test('PromiseWriteFile', (done) => {    

    const stub = sinon.stub(Promise, 'all').callsFake(() => {
        return true;
    });

    const promiseOne = [Promise.resolve(), Promise.resolve(), Promise.resolve()];    
    
    const promise = core.PromiseWriteFile(promiseOne);
    expect.assertions(1);
    return promise.then(data =>{
        expect(data).toBe(true);
        done();
        stub.restore();
    }).catch( error => error);

});