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

```ruby
class Magazine
  attr_accessor :editor
end

class Book
  attr_accessor :editor
end
```

We see code being duplicated: a bad sign. We can use inheritance to solve this problem like so:

```ruby

class Publication
  attr_accessor :editor
end

class Magazine < Publication
end

class Book < Publication
end
```

### In the example above we see how we saved extra time duplicating by just adding the methods that were in publication to Megazine class and Book class. That means that Magazine have access to setters and getters for editior class instances

Calling a super method
When overriding a method, it is common to call the original implementation. We can call the superclass's implementation of any method using the special super keyword. There are two major ways in which super is called. If super is called without any arguments, the arguments passed to the method will be implicitly passed on to the parent class's implementation.

```ruby
class Animal
  def make_n_noises(n = 2)
    n.times { print "Growl " }
  end
end

class Liger < Animal
  def make_n_noises(num = 4)
    num.times { print "Roar " }
    # here we'll call super without any arguments. This will pass on `num`
    # implicitly to super. You can think of this call to super as:
    # `super(num)`
    super
  end
end

Liger.new.make_n_noises(3) # => Roar Roar Roar Growl Growl Growl
```

```ruby

class Dragons



end
```

### When we are creating Objects we should use the name of the nouns as the class name: Lets say there is prompt saying.. Imagine a simulation of MINNOWS and SHARKS: each "turn", the MINNOWS *swim* away from the SHARK, and the SHARK *swims* after the closest MINNOWS

#### We use the verbs as methods and the nouns as class names

A Minnow and a Shark swim differently. They should both have a #swim method, but they should do different things.

```ruby
class Minnow
  def swim
    # swim away from any sharks
  end
end

class Shark
  def swim
    # swim toward closest fish
  end
end
```

```ruby
class Minnow
  attr_reader :position

  def initialize(initial_position)
    # save the minnow's initial position
    @position = initial_position
  end

  def swim
    # swim away from any sharks; update @position
  end
end
```

### For the classes above you can see that the SHARK CLASS is separated from the MINOW class. Each of them controls their own position which is called *state*. They are both swimming but they will eventually swim differently which is called *behaviour*

### The whole point of this is that we can break down the problem into smaller subproblems. With these two classes we could do a Fisherman class or aquarium class

### There is a tricky balance when creating classes. Each class should do one time. Dont create too many classes when they wont be needed

### Rule of thumb is to keep a class under 100 lines

### Dont duplicate methods when defining class, this is a big no no when creating classes. We have to use DRY

> Bad code

```ruby
class Minnow
  def eat
    puts "eat eat eat"
  end
end

class Shark
  def eat
    puts "eat eat eat"
  end
end

```

> Good Code

```ruby
class Fish
  def eat
    puts "eat eat eat"
  end
end

class Minnow < Fish
end

class Shark < Fish
end

```

### inheritance and Generic Code Because Minnow and Shark are both different types of Fish, we can write generic code that can process any kind of Fish, and it will work with both Minnows and Sharks. Here's an example with many types of employee

```ruby
class Employee
  def wage
    20_000
  end
end

class Manager < Employee
  def wage
    50_000
  end
end

class CEO < Manager
  def wage
    1_000_000
  end
end

# calculate the total salary of many employees
def total_salary(employees)
  total = 0
  employees.each do |employee|
    # Don't know/care what kind of `Employee` (regular, Manager,
    # or CEO) this is. We can treat them all the same.
    total += employee.wage
  end
end
```

> A better example

```ruby
class Worker
    def wage(num)
    @wage = num
    end
end
```
