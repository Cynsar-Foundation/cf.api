const request = require('supertest');
const { setupStrapi, cleanupStrapi } = require('./helpers/strapi');

let app;
let token;

jest.setTimeout(10000);

const mockUserData = {
    username: "tester",
    email: "tester@strapi.com",
    provider: "local",
    password: "1234abc",
    confirmed: true,
    blocked: null,
  };
  

beforeAll(async () => {
  // Start Strapi server for testing
  app = await setupStrapi()

  // Mock the generateAndSend function in the donation service
  jest.spyOn(app.services['api::donation.donation'], 'generateAndSend').mockImplementation(() => {
    return Promise.resolve([{
      uuid: 'mocked-uuid'
    }]);
  });

  const userCredentials = {
    identifier: 'mockUser@example.com', // replace with your mock user's email or username
    password: 'mockPassword' // replace with your mock user's password
  };

  const authResponse = await request(app.server.httpServer)
    .post('/api/auth/local') // replace with your actual authentication endpoint
    .send(userCredentials);

   token = authResponse.body.jwt;
});

afterAll(async () => {
  // Stop Strapi server after tests
  await cleanupStrapi();
});



describe('Donations API', () => {
  test('should trigger the afterCreate hook and update the donation record', async () => {
    const donationPayload = {
      // ... your donation data here
      donation: {
        id: 0,
        amount: 1000,
        payment: 'Bank',
        donation_date: '2023-09-12'
      },
      member: {
        id: 1
      }
    };

    const response = await request(app.server.httpServer)
      .post('/api/donations') // replace with your actual endpoint
      .set('Authorization', `Bearer ${token}`)
      .send(donationPayload);

    expect(response.status).toBe(201);
    expect(response.body.hasSentRec).toBe(true);
    expect(response.body.docuSentID).toBe('mocked-uuid');
  });
});
