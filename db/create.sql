CREATE TABLE IF NOT EXISTS Surveys (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    accountId INT NOT NULL
);

CREATE TABLE IF NOT EXISTS CompletedSurveys (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    surveyId INT NOT NULL,
    isComplete BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS Question (
    id SERIAL PRIMARY KEY,
    surveyId INT NOT NULL,
    question VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS Answer (
    id SERIAL PRIMARY KEY,
    questionId INT NOT NULL,
    type VARCHAR(50) DEFAULT '5-scale'
);