// ***********************************************************
// Automated Unit testing scripts for page per route
// ***********************************************************

const index = require("../app");
const request = require("supertest");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
jest.mock("axios");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", index);

const mockRequest = (sessionData, body) => ({
  session: { data: sessionData },
  body,
});

const res = {};

test("Unit testing for page per route - Test for POST call", (done) => {
  const req = mockRequest();

  const res = {};
  request(app)
    .post("/pageperroute", (req, res))
    .expect(200, done);
  done();
});

test("Unit testing for page per route Test for GET call", (done) => {
  axios.post.mockResolvedValue({
    data: {
      status: "success",
      totalSearchResults: 49,
      currentPage: 1,
      totalPages: 1,
      awards: [
        {
          awardNumber: 22,
          beneficiary: {
            beneficiaryName: "Absolem Productions Limited",
          },
          subsidyMeasure: {
            subsidyMeasureTitle:
              "COVID-19 Temporary Framework for UK authorities",
            scNumber: "SC10033",
            adhoc: false,
            legalBasis: {
              legalBasisText: "R&D&I Framework",
            },
          },
          subsidyFullAmountRange: "£NA",
          subsidyFullAmountExact: "597,336",
          subsidyObjective: "Energy efficiency",
          subsidyInstrument: "Direct Grant",
          spendingSector: "Arts, entertainment and recreation",
          legalGrantingDate: "13 October 2020",
          spendingRegion: "Scotland",
        },
      ],
    },
  });

  global.start_page = 1;
  global.end_page = 1;
  global.end_record = 1;
  global.pageCount = 10;
  global.text_beneficiaryname = "";
  global.actual_subsidy_objective_pass1 = "";
  global.actual_subsidy_instrument_pass1 = "";
  global.actual_spending_sector_pass1 = "";
  global.legal_granting_from_date = "";
  global.legal_granting_to_date = "";
  global.sorting_order_pass = "";

  const req = mockRequest();

  const res = {};
  request(app)
    .get("/pageperroute", (req, res))
    .expect(200, done);
  done();
});
