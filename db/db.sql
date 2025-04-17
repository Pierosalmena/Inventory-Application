CREATE TABLE products (
  article_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  brand_id INTEGER,
  category_id INTEGER,
  product_name VARCHAR(255),
  price DECIMAL(10, 2),  -- or NUMERIC(10,2) based on your requirements
  FOREIGN KEY (brand_id) REFERENCES brand(brand_id),
  FOREIGN KEY (category_id) REFERENCES category(category_id)
); 

CREATE TABLE brand (brand_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(255) NOT NULL, address VARCHAR(255), country VARCHAR(100));

CREATE TABLE stock (stock_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, article_id INTEGER, amount INTEGER, value INTEGER, FOREIGN KEY (article_id) REFERENCES products(article_id));

CREATE TABLE category (category_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(255) NOT NULL, address VARCHAR(255), country VARCHAR(100));

INSERT INTO category (name) VALUES ('Food'),('Electronics'), ('Books');
INSERT INTO brand (name, address, country) VALUES ('Sony', 'Haupstrasse 2', 'Switzerland'), ('Braun', 'Frenkenstrasse 101', 'Switzerland'), ('Springer', 'Erzenbergstrasse 46', 'Switzerland'), ('Philips', 'Fichterstrasse 4', 'Switzerland');
INSERT INTO products (brand_id, category_id, product_name, price) VALUES (1, 2, 'Sony Headphones', 199.99), (2, 1, 'Food Processor', 149.99), (3, 3, 'Naturwissenschaft 2. Auflage', 19.99);
INSERT INTO stock (article_id, amount) VALUES (1, 12), (2, 23), (3, 55);