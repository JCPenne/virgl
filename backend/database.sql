CREATE DATABASE quiz;

DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE questions(
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  optionone VARCHAR(255),
  optiontwo VARCHAR(255),
  optionthree VARCHAR(255),
  answer VARCHAR(255)
)