const { response } = require('express');
const request = require('supertest');
const fs = require('fs'); // self-added
const path = require('path'); // self-added
const { doesNotReject } = require('assert');


const server = 'http://localhost:8080';



describe('Route integration', () => {

  // Tests for the route location of '/'
  describe('/', () => {
    // HTTP GET Request at this route location
    describe('GET', () => {
      // Test to see if server responses with 200 and text/html content
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  // Tests for the route location of '/allProduct'
  describe('/api/allProducts', () => {
    // HTTP GET Request at this route location
    describe('GET', () => {
        // Test to see if server responses with 200 and  content
      it('responds with 200 status and application/json content type', () => (
        request(server)
          .get('/api/allProducts')
          .expect('Content-Type', /application\/json/)
          .expect(200)
        )
      );
    });
  });

	// Tests for route location of '/topProducts'
  describe('/api/topProducts', () => {
    // HTTP GET Request at this route location
    describe('GET', () => {
        // Test to see if server responses with 200 and  content
      it('responds with 200 status and application/json content type', () => (
        request(server)
          .get('/api/topProducts')
          .expect('Content-Type', /application\/json/)
          .expect(200)
        )
      );
    });
  });

  // Tests for route location of '/categoryList'
  describe('/api/categoryList', () => {
    // HTTP GET Request at this route location
    describe('GET', () => {
        // Test to see if server responses with 200 and  content
      it('responds with 200 status and application/json content type', () => (
        request(server)
          .get('/api/categoryList')
          .expect('Content-Type', /application\/json/)
          .expect(200)
        )
      );
    });
  });

  // Tests for route location of '/categoryProducts'
  describe('/api/categoryProducts', () => {
    // HTTP GET Request at this route location
    describe('GET', () => {
        // Test to see if server responses with 200 and  content
      it('responds with 200 status and application/json content type', () => (
        request(server)
          .get('/api/categoryProducts')
          .expect('Content-Type', /application\/json/)
          .expect(200)
        )
      );
    });
  });

});

