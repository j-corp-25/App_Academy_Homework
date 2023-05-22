# Inheritance

Goals
Know how to extend a class.
Know how to override a method.
Know how to call the original method.

Extending Classes
Inheritance is a way to establish a subtype from an existing class in order to reuse code. Let's look at an example:

```ruby
class User
  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name, @last_name = first_name, last_name
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def upvote_article(article)
    article.upvotes += 1
  end
end

class SuperUser < User
  attr_reader :super_powers

  def initialize(first_name, last_name, super_powers)
    super(first_name, last_name)
    @super_powers = super_powers
  end

  def upvote_article(article)
    # extra votes
    article.upvotes += 3
  end

  def delete_user(user)
    return unless super_powers.include?(:user_deletion)

    # super user is authorized to delete user
    puts "Goodbye, #{user.full_name}!"
  end
end

```

## For class inheritance as shown above the parent is the USER class and the child is the SUPERUSER class which means that the "child"(superuser) will get all the functions inside the parent(USER)

```ruby
[13] pry(main)> load 'test.rb'
=> true
[14] pry(main)> u = User.new("Jamis", "Buck")
=> #<User:0x007f9ba9897d98 @first_name="Jamis", @last_name="Buck">
[15] pry(main)> u.full_name
=> "Jamis Buck"
[16] pry(main)> su = SuperUser.new("David", "Heinemeier Hansson", [:user_deletion])
=> #<SuperUser:0x007f9ba98e66c8
 @first_name="David",
 @last_name="Heinemeier Hansson",
 @super_powers=[:user_deletion]>
[17] pry(main)> su.full_name
=> "David Heinemeier Hansson"
[18] pry(main)> su.delete_user(u)
Goodbye, Jamis Buck!
=> nil
```

## On the pry example above you can see that superuser has access to the instance method 'full_name' which superuser doesnt have but USER does have it

Inheritance and Code Reuse
Inheritance has allowed us to avoid duplicating the methods that are common to User and SuperUser. Here's another example:

class Magazine
  attr_accessor :editor
end

class Book
  attr_accessor :editor
end
We see code being duplicated: a bad sign. We can use inheritance to solve this problem like so:

class Publication
  attr_accessor :editor
end

class Magazine < Publication
end

class Book < Publication
end
