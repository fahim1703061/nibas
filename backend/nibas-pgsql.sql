CREATE TABLE "Home"(
    "id" INTEGER NOT NULL,
    "title" CHAR(255) NOT NULL,
    "description" CHAR(255) NOT NULL,
    "address" CHAR(255) NOT NULL,
    "no_bedrooms" INTEGER NOT NULL,
    "no_bathrooms" INTEGER NOT NULL,
    "square_footage" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "image" INTEGER NOT NULL,
    "column_10" INTEGER NOT NULL
);
ALTER TABLE
    "Home" ADD PRIMARY KEY("id");
CREATE TABLE "user"(
    "id" INTEGER NOT NULL,
    "first_name" CHAR(255) NOT NULL,
    "last_name" CHAR(255) NOT NULL
);
ALTER TABLE
    "user" ADD PRIMARY KEY("id");
CREATE TABLE "rentHome"(
    "id" INTEGER NOT NULL,
    "priceperDuration" DOUBLE PRECISION NOT NULL,
    "duration" CHAR(255) NOT NULL,
    "home_id" INTEGER NOT NULL
);
ALTER TABLE
    "rentHome" ADD PRIMARY KEY("id");
CREATE TABLE "sellHome"(
    "id" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "home_id" INTEGER NOT NULL
);
ALTER TABLE
    "sellHome" ADD PRIMARY KEY("id");
ALTER TABLE
    "sellHome" ADD CONSTRAINT "sellhome_home_id_foreign" FOREIGN KEY("home_id") REFERENCES "Home"("id");
ALTER TABLE
    "rentHome" ADD CONSTRAINT "renthome_home_id_foreign" FOREIGN KEY("home_id") REFERENCES "Home"("id");
ALTER TABLE
    "Home" ADD CONSTRAINT "home_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");