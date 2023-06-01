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


