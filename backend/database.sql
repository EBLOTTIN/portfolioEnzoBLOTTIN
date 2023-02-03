CREATE TABLE IF NOT EXISTS images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(25),
  description VARCHAR(1024),
  chemin VARCHAR(255),
  size VARCHAR(255),
  name VARCHAR(50) NOT NULL
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS project (
  id INT PRIMARY KEY AUTO_INCREMENT,
  projectName VARCHAR(100),
  link VARCHAR(255),
  imageID INT,
  FOREIGN KEY (imageID) REFERENCES images(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS pageProject (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  description VARCHAR(255),
  link VARCHAR(255),
  imageID INT,
  FOREIGN KEY (imageID) REFERENCES images(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS pages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pageZone INT NOT NULL,
  content VARCHAR(255) NOT NULL,
  imageID INT,
  FOREIGN KEY (imageID) REFERENCES images(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  images (name, chemin)
VALUES
  ("projet1.png", "/assets/images/projet1.png");

INSERT INTO
  images (name, chemin)
VALUES
  ("projet2.png", "/assets/images/projet2.png");

INSERT INTO
  images (name, chemin)
VALUES
  ("projet3.png", "/assets/images/projet3.png");

INSERT INTO
  images (name, chemin)
VALUES
  (
    "hackathon4.png",
    "/assets/images/hackathon4.png"
  );