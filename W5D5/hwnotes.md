# W5D5

## Generators

- Generate model skeletons with your migrations
- Use command line to do this

```cmd
rails g migration CreateUsers
```

The command above will create the Below code

```rb
# db/migrate/20220518134651_create_users.rb

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|

      t.timestamps
    end
  end
end

```

However there is a much easier where the command line can build out most of your migration from your command line and you can add the columns

```cmd
rails g migration CreateUsers name:string email:string age:integer
```

The command above creates the migration below which will save a lot of time

```ruby
# db/migrate/20220518140141_create_users.rb

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :age

      t.timestamps
    end
  end
end
```

But now a step further is to add uniq to it which will create the whole thing for you
when it comes to uniq values and indexes. Look at the awesome command below

```cmd
rails g migration CreateUsers name:string:index email:string:uniq age:integer
```

The command above will generate the below migration table which will save a heck load of time and avoid making mistakes with commas that can ruin us

```ruby
# db/migrate/20220518140703_create_users.rb
class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :age

      t.timestamps
    end
    add_index :users, :name
    add_index :users, :email, unique: true
  end
end
```

As you see the migration has the uniq to the mail and index

If you want to add a model and migration at the same time you can also use the code below

```cmd
rails g model User name:string:index email:string:uniq age:integer
```

This will produce the models for you in the models folder

## References and Foreign Keys

referenes is a syntathic sugar way of setting up foreign keys

```cmd
rails g model Course name:string instructor:references
```

The command above will create the foreign keys for you which will help a lot. And produce the migration below and also create a model

```ruby
#migration
class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.references :instructor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
```

```ruby
#model
class Course < ApplicationRecord
  belongs_to :instructor
end
```

It will also produce the following schema

```ruby
create_table "courses", force: :cascade do |t|
  t.string "name"
  t.bigint "instructor_id", null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.index ["instructor_id"], name: "index_courses_on_instructor_id"
end

# ...

add_foreign_key "courses", "instructors"
```

**What does this mean**
!!!!!The references columns in the migration have no _id after their names. _id is automatically appended, however, in the schema / database. It is important to get this naming right. NEVER append _id to the name of any column in your migration whose type is references.!!!

Rails assumes that your migration uses conventional naming. It accordingly assumes that instructor_id points to an instructors table. (See, e.g., the add_foreign_key statement.) That is probably not what you want in this case.


# When adding references you neeeed to add where the reference is going

## Ruby assumes you're pointing to an instructor when you do instructor_id but there is no table

To get around this you need to designate the table to use

```ruby
class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.references :instructor, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
```

**NOTE**

In short, if a column's type is not references, then you must use the add_foreign_key method in your migration to set a foreign_key constraint.

Also to avoid extra indexes and creare uniq values you do the below

```ruby
# db/migrate/20220518192247_create_courses.rb

class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.references :instructor, null: false, foreign_key: true, index: false

      t.timestamps
    end
  end
  add_index :courses [:instructor_id, :name], unique: true
end
```
