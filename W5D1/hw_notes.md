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
