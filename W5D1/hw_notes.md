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

Modeling Relationships
Now we have a way to store users and additional bits of related data, but how would we store associated entities like a blog post written by a user?

We probably have the sense that blog posts should be in their own tables since they're not really additional attributes of a user (which would call for additional columns), nor are they users themselves (which would call for additional rows). But if posts were in their own table, how would we know that they were associated with a particular user?

We model these relationships between entries in separate tables through foreign keys. A foreign key is a value in a database table whose responsibility is to point to a row in a different table. Check out the posts table below (and pretend that people were a bit more creative in their titles and bodies).

### We model these relationships between entries in separate tables through foreign keys. A foreign key is a value in a database table whose responsibility is to point to a row in a different table

posts table:

id |   title   |     body    |  user_id

---

1  |  'XXXX'   |   'xyz...'  |    3
2  |  'XXXX'   |   'xyz...'  |    5
3  |  'XXXX'   |   'xyz...'  |    7
4  |  'XXXX'   |   'xyz...'  |    10
5  |  'XXXX'   |   'xyz...'  |    2
6  |  'XXXX'   |   'xyz...'  |    5

The user_id column is a foreign key column. If we wanted to find all the posts for the user with id 5, we'd look in the posts table and retrieve all the posts where the user_id column had a value of 5. If you already know a little SQL:

SELECT
  *
FROM
  posts
WHERE
  posts.user_id = 5
By convention, the foreign key in one table will reference the primary key in another table. We usually call the column that houses the foreign key [other_table_name_singularized]_id.

Foreign keys are how we model relationships between pieces of data across multiple tables. This also allows us to ensure that data is not duplicated across our database. Posts live in a single place, users in another, and the foreign key (user_id) in posts expresses the relation between the one and the other.
Structured Query Language (SQL)
Now that we know what these tables look like and generally how relationships are modeled between them, how do we actually get at the data?

Enter SQL. SQL is a domain-specific language that's designed to query data out of relational databases.

Here's a sample SQL query (we'll break it down in just a second):

-- Find crazy cat people
SELECT
  name, age, has_cats
FROM
  tenants
WHERE
  (has_cats = true AND age > 50)
SQL queries are broken down into clauses. Here, there is the SELECT clause, the FROM clause, and the WHERE clause. SELECT takes a list of comma-separated column names; only these columns of data will be retrieved. FROM takes a table name to query. WHERE takes a list of conditions separated by AND or OR; only rows matching these conditions will be returned.

SQL provides powerful filtering with WHERE. It supports the standard comparison and equality operators (<, >, >=, <=, =, !=) as well as boolean operators (AND, OR, NOT).

There are 4 main data manipulation operations that SQL provides:

SELECT: retrieve values from one or more rows
INSERT: insert a row into a table
UPDATE: update values in one or more existing rows
DELETE: delete one or more rows
Below are brief descriptions of each operator's syntactical signature followed by a few simple examples of its use:

SELECT
Structure:
```sql
SELECT
  one or more columns (or all columns with *)
FROM
  one (or more tables, joined with JOIN)
WHERE
  one (or more conditions, joined with AND/OR);
Examples:

SELECT
  *
FROM
  users
WHERE
  name = 'Ned';

SELECT
  account_number, account_type
FROM
  accounts
WHERE
  (customer_id = 5 AND account_type = 'checking');
INSERT
Structure:

INSERT INTO
  table name (column names)
VALUES
  (values);
Examples:

INSERT INTO
  users (name, age, height_in_inches)
VALUES
  ('Santa Claus', 876, 34);

INSERT INTO
  accounts (account_number, customer_id, account_type)
VALUES
  (12345, 76, 'savings');
UPDATE
Structure:

UPDATE
  table_name
SET
  col_name1 = value1,
  col_name2 = value2
WHERE
  conditions
Examples:

UPDATE
  users
SET
  name = 'Eddard Stark', house = 'Winterfell'
WHERE
  name = 'Ned Stark';

UPDATE
  accounts
SET
  balance = 30
WHERE
  id = 6;
DELETE
Structure:

DELETE FROM
  table_name
WHERE
  conditions
Examples:

DELETE FROM
  users
WHERE
  (name = 'Eddard Stark' AND house = 'Winterfell');

DELETE FROM
  accounts
WHERE
  customer_id = 666;
Schema Definitions
```

Before basic querying can take place, you need to define your database schema. There are three operators that SQL provides to manipulate a database schema:

CREATE TABLE

ALTER TABLE
DROP TABLE
Here's an example of creating a users table (we'll break it down shortly):

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  birth_date DATE,
  house VARCHAR(255),
  favorite_food VARCHAR(20)
);
CREATE TABLE first specifies the name of the table and then, in parentheses, the list of column names along with their data types.

Querying across Multiple Tables (JOIN)
Similarly to the objects in a good Ruby program, a well-designed database will split data into tables that each encapsulate some object. Sometimes we will want to access the data from more than one of these tables at once, but so far we've only seen ways to query a single table. How might we query across tables?

SQL provides a powerful facility: the JOIN. A JOIN will do just what you'd expect it to do: join together two tables, resulting in a temporary combined table that you can query just like any other. JOIN clauses include an ON statement, in which you specify how exactly those two tables relate to one another. This is where foreign keys come into play. Check out the simple join below.

Let's write a query that returns the title of all the blog posts written by each user:

SELECT
  users.name, posts.title
FROM
  posts
JOIN
  users ON posts.user_id = users.id
This will return one row per post, with the user's name appearing next to the title of the post they authored. By storing a user_id column in the posts table, we can associate user data with posts without adding columns that would duplicate data from other tables in the database and other rows in the posts table; we just JOIN the tables as needed.

In this example, we joined two different tables using a foreign key stored in a single column. This is the most common case we will see, but JOIN is a flexible operator that can handle a variety of conditions. Two variations we will use are self joins, in which we join a table to itself (for example, if we have a table of employees, each of whom has a supervisor in the same table) and joins that use multiple columns to specify the ON condition (for example, if we have a bus timetable that identifies routes by a company name and a route number).

We also might have a many-to-many relationship: perhaps--continuing with the example above--users can "like" posts. In this case, including a foreign key in one of the tables doesn't make sense; a user can like any number of posts, and a post can be liked by any number of users. Instead, we could use a join table that contains a foreign key for each table, allowing us to represent each like with a row linking a user to a post. We would then need two joins to associate users and liked posts, like so:

SELECT
  users.name, posts.title
FROM
  posts
JOIN
  likes ON posts.id = likes.post_id
JOIN
  users ON likes.user_id = users.id
This query will give a list of user names and the posts they have liked.

## Formatting SQL Code

### Very Inportant

SQL Conventions
Different programmers use different SQL conventions, but in preparation for ActiveRecord and Rails, which have their own conventions, you should:

Always name SQL tables snake_case and pluralized (e.g., musical_instruments, favorite_cats).
If a musician belongs to a band, your musicians table will need to store a foreign key that refers to the id column in the bands table. The foreign key column should be named band_id.
Always have a column named id, and use it as the primary key for a table.

```sql
SELECT
  table_two.column_one,
  table_two.column_two,
  table_two.column_three
FROM
  table_one
LEFT OUTER JOIN
  table_two ON table_one.column_one = table_two.column_x
WHERE
  (table_one.column_three > table_two.column_y
    AND another_condition IS NULL)
GROUP BY
  table_two.column_four
ORDER BY
  table_two.column_four
```

Subqueries
Life gets complicated when you make subqueries. Here's how I do it:

```sql
SELECT
  bands.*
FROM
  bands
JOIN (
  SELECT
    albums.*
  FROM
    albums
  WHERE
    album.type = "POP"
  GROUP BY
    album.band_id
  HAVING
    COUNT(*) > 3
  ) AS pop_group_albums ON bands.id = pop_group_albums.band_id
WHERE
  band.leader_id IN (
    SELECT
      musicians.id
    FROM
      musicians
    WHERE
      musicians.birth_yr > 1940
  )
```

NULL and Ternary Logic in SQL
SQL uses ternary logic. This means that a conditional statement can evaluate to TRUE, FALSE, or NULL (unknown). Whaaaa? :open_mouth: And somehow NULL is still 'falsy'? Unfortunately, this won't be the only time you run into logic that defies intuition. Stay tuned for Javascript quirks.

Asking if a NULL value = NULL will always produce FALSE. This is because NULL was derived to represent an unknown value. How can we know if two unknowns are the same? We can't. Given that this sort of comparison doesn't yield any useful information, always use IS NULL or IS NOT NULL in place of the traditional (= or != / <>) comparisons.

1. General PostgreSQL CASE expression
The following illustrates the general form of the CASE statement:

```sql
CASE
      WHEN condition_1  THEN result_1
      WHEN condition_2  THEN result_2
      [WHEN ...]
      [ELSE else_result]
END
```

Code language: SQL (Structured Query Language) (sql)
In this syntax, each condition (condition_1, condition_2…) is a boolean expression that returns either true or false.

When a condition evaluates to false, the CASE expression evaluates the next condition from the top to bottom until it finds a condition that evaluates to true.

If a condition evaluates to true, the CASE expression returns the corresponding result that follows the condition. For example, if the condition_2 evaluates to true, the CASE expression returns the result_2. Also, it immediately stops evaluating the next expression.

In case all conditions evaluate to false, the CASE expression returns the result (else_result) that follows the ELSE keyword. If you omit the ELSE clause, the CASE expression returns NULL.
ostgreSQL COALESCE function syntax
The syntax of the COALESCE function is as follows:

```sql
COALESCE (argument_1, argument_2, …);
```

## Useful Operators to reference

![Clauses](/W5D1/Screenshot%202023-05-28%20at%2010.21.06%20AM.png)

## Useful Constraints to reference

![Clauses](/W5D1/Screenshot%202023-05-28%20at%2010.57.53%20AM.png)
