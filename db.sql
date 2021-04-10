CREATE DATABASE oilsite

CREATE TABLE oils (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  companytype VARCHAR(50) NOT NULL,
  price NUMERIC NOT NULL,
  stock INT NOT NULL
);


INSERT INTO oils (name, companytype, price, stock) VALUES ('Good Girl', 'Carolina Herrera', 8, 7), ('Baccarat Rouge', 'Maison Francis Kurkdjian', 8, 5 ), ('Goddess', 'Baby Phat', 8, 2 ), ('Black Opium', 'YSL', 8, 6 ), ('Original', 'Jimmy Choo', 8, 6), ('Pink Friday', 'Nicki Minaj', 8, 3 );

INSERT INTO oils (name, companytype, price, stock) VALUES ('Tobacco Vanille', 'Tom Ford', 8, 0);




