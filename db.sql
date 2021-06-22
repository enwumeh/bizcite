CREATE DATABASE oilsite

CREATE TABLE oils
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  companytype VARCHAR(50) NOT NULL,
  price NUMERIC NOT NULL,
  stock INT NOT NULL
);


INSERT INTO oils
  (name, companytype, price, stock)
VALUES
  ('Good Girl', 'Carolina Herrera', 8, 7),
  ('Baccarat Rouge', 'Maison Francis Kurkdjian', 8, 5 ),
  ('Goddess', 'Baby Phat', 8, 2 ),
  ('Black Opium', 'YSL', 8, 6 ),
  ('Original', 'Jimmy Choo', 8, 6),
  ('Pink Friday', 'Nicki Minaj', 8, 3 );

INSERT INTO oils
  (name, companytype, price, stock)
VALUES
  ('Tobacco Vanille', 'Tom Ford', 8, 0);

ALTER TABLE oils ADD description varchar(300);

INSERT INTO oils
  (description)
VALUES
  ('an alluring, smooth and warm fragrance that exudes femininity. This one will turn heads. Smells like a chocolate milkshake in the best way. Notes include almond, vanilla, coffee, tonka bean, and cocoa with bergamot and jasmine.'),
  ('Sweet and Sophisticated, this one is like luxurious cotton candy with  hint of woody spiciness. Very addictive'),
  ('Clean and girly. Roses on a warm spring day. Smells like a pretty, flowery baby powder.'),
  ('This one is smooth and sweet. It has notes of pink pepper, pear, orange blossom, and jasmine. Refreshingly bold and feminine.
'),
  ('A compliment getter, good signature scent. Notes of mandarin, pear, and green notes.'),
  ('Playful Fruity scent. It has key notes of star fruit, pink floral petals, Italian mandarin, and boysenberry.'),
  ('This fragrance is a gorgeous mix of spice and  vanilla. You will smell deliciously warm yet sophisticated.');

UPDATE oils SET description = 'an alluring, smooth and warm fragrance that exudes femininity. This one will turn heads. Smells like a chocolate milkshake in the best way. Notes include almond, vanilla, coffee, tonka bean, and cocoa with bergamot and jasmine.' WHERE id = 1;
UPDATE oils SET description = 'Sweet and Sophisticated, this one is like luxurious cotton candy with  hint of woody spiciness. Very addictive' WHERE id = 2;
UPDATE oils SET description = 'Clean and girly. Roses on a warm spring day. Smells like a pretty, flowery baby powder' WHERE id = 3;
UPDATE oils SET description = 'This one is smooth and sweet. It has notes of pink pepper, pear, orange blossom, and jasmine. Refreshingly bold and feminine' WHERE id = 4;
UPDATE oils SET description = 'A compliment getter, good signature scent. Notes of mandarin, pear, and green notes' WHERE id = 5;
UPDATE oils SET description = 'Playful Fruity scent. It has key notes of star fruit, pink floral petals, Italian mandarin, and boysenberry' WHERE id = 6;
UPDATE oils SET description = 'This fragrance is a gorgeous mix of spice and  vanilla. Deliciously warm and sophisticated' WHERE id = 7;

ALTER TABLE oils DROP COLUMN type;

ALTER TABLE oils ADD type char(3);
ALTER TABLE oils ADD url varchar(50);


UPDATE oils SET url = 'https://i.imgur.com/cw4TYuI.jpg' WHERE id = 2;
UPDATE oils SET url = 'https://i.imgur.com/Spq1cj3.jpg' WHERE id = 2;
UPDATE oils SET url = 'https://i.imgur.com/z3wfmK0.jpg' WHERE id = 1;
UPDATE oils SET url = 'https://i.imgur.com/z3wfmK0.jpg' WHERE id = 3;
UPDATE oils SET url = 'https://i.imgur.com/z3wfmK0.jpg' WHERE id = 4;
UPDATE oils SET url = 'https://i.imgur.com/z3wfmK0.jpg' WHERE id = 7;
UPDATE oils SET name = 'Jimmy Choo' WHERE id = 5;










