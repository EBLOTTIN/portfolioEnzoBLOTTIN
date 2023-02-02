CREATE TABLE IF NOT EXISTS images (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  type VARCHAR(25),
  description VARCHAR(255),
  chemin VARCHAR(255),
  taille VARCHAR(255),
  name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS project (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomDuProjet VARCHAR(100),
  lien VARCHAR(255),
  imageID INT,
  FOREIGN KEY (imageID) REFERENCES images(id)
);

CREATE TABLE IF NOT EXISTS pageProjet (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  description VARCHAR(1024),
  lien VARCHAR(255),
  imageID INT,
  FOREIGN KEY (imageID) REFERENCES images(id)
);

CREATE TABLE IF NOT EXISTS pages (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  zonePage INT NOT NULL,
  contenu VARCHAR(255) NOT NULL,
  imageID INT,
  FOREIGN KEY (imageID) REFERENCES images(id)
);

INSERT INTO
  images (name, chemin)
VALUES
  (
    'projet1.png',
    '/assets/images/projet1.png'
  );

INSERT INTO
  images (name, chemin)
VALUES
  (
    'projet2.png',
    '/assets/images/projet2.png'
  );

INSERT INTO
  images(name, chemin)
VALUES
  (
    'projet3.png',
    '/assets/images/projet3.png'
  );

INSERT INTO
  images (name, chemin)
VALUES
  (
    'hackathon2.png',
    '/public/assets/images/hackathon2.png'
  );