# SQL

---

## NoSQL Stores data diffetently than SQL does

SQL stores data in tables. NoSQL stores data in forms other than tables. These other forms can be graphs, key-value pairs, or one of many other options, but most commonly they are documents. Documents are very similar to JSON objects with field-value pairs. For example, our NoSQL database might store a user like this:

```sql
{
  username: "mongoDB4ever",
  email: "alexa@gmail.com",
  password_digest: "Ke&63h1z$mK9jd37n"
}
```

Our user document in NoSQL might look like this, then:

```sql
{
  username: "mongoDB4ever",
  email: "alexa@gmail.com",
  password_digest: "Ke&63h1z$mK9jd37n",
  featured_photo: {
    url: "https://imgur.com/FRK6meX",
    caption: "best pizza ever"
  }
}
```

## In SQL we store data in refenrences

This technique of not storing duplicate information but instead storing a reference to it is known as normalization. NoSQL typically uses denormalization.

in an SQL database, it’s impossible to add data until you define tables and field types in what’s referred to as a schema

SQL queries offer a powerful JOIN clause. We can obtain related data in multiple tables using a single SQL statement. For example:

```sql
SELECT book.title, book.author, publisher.name
FROM book
LEFT JOIN book.publisher_id ON publisher.id;

```

Creating, reading updating and deleting data is the basis of all database systems. In essence —

Projects where SQL is ideal:

logical related discrete data requirements which can be identified up-front
data integrity is essential
standards-based proven technology with good developer experience and support.

Projects where NoSQL is ideal:

unrelated, indeterminate or evolving data requirements
simpler or looser project objectives, able to start coding immediately
speed and scalability is imperative.

PostgreSQL
Known for: being open-source, most standard-compliant, easy set up.

Used by: Instagram, Netflix, Uber, Postmates, Reddit, Spotify, 500px

SQLite
Known for: very easy setup, no separate server process, being lightweight and portable

Used by: Rumble, Empatica, Spire, Initia

MySQL
Known for: being open-source, wide usage, cross-platform support, ease of use

Used by: Twitter, Dropbox, Vine, 9GAG, Pinterest, Tumblr, Github

Oracle
Known for: reliability, enterprise scale

Used by: LinkedIn, Netflix, Ebay, HealthExpense, iFactor

MongoDB
Known for: Document-oriented storage (NoSQL), being open source, high performance, ease of use, flexibility, easy maintenance

Used by: Hootsuite, Uber, Foursquare

Redis
Known for: Performance, advanced key-value cache storage (NoSQL), easy deployment, being open source, speed

Used by: Twitter, Instagram, 9GAG, Vine, Hootsuite, AirBnb, Uber, Medium
Database Schemas
Your database schema is a description of the organization of your database into tables and columns.

Designing your schema is one of the first and most important steps when writing an application. It forces you to ask a basic but essential question: what data does my application need to function?

When implementing a database schema, you must decide on three things:

the tables you will have
the columns each of those tables will have
the data type of each of those columns
Schemas are mutable, so the decisions up front are not at all set in stone. Still, you should spend time thinking about your schema at the outset to avoid making major, avoidable mistakes.

The concept of static typing may be new to you. Ruby is dynamically typed: there is no need to specify the class (also called type) of the data stored in method parameters or variables. Ruby won't stop you even if you store something silly like a Cat object in a variable named favorite_dog or a String in a variable named number.

SQL is not quite so flexible; you must specify the type of data that will go into each column.

Here are a few of the most common data types:

BOOLEAN
INT
FLOAT (stores "floating point" numbers)
VARCHAR(255) (essentialy a string with a length limit of 255 chars)
TEXT (a string of unlimited length)
DATE
DATETIME
TIME
BLOB (non-textual, binary data; e.g., an image)
We'll see how exactly we create tables, include columns, and specify column types in just a bit.
