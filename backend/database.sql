-- CREATE DATABASE petAdoption;

DROP TABLE IF EXISTS pets CASCADE;

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  breed VARCHAR(255),
  age VARCHAR(255),
  size VARCHAR(255),
  color VARCHAR(255),
  description TEXT
);