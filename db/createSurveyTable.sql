CREATE TABLE IF NOT EXISTS surveys (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    accountId INT NOT NULL
);