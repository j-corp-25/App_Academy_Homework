# # def sqrt(num)
# #   unless num >= 0
# #     raise ArgumentError.new "Cannot take sqrt of negative number"
# #   end
# # end


# def main
#   while true
#     puts "input a number"
#     num = gets.to_i

#     begin
#       sqrt(num)
#     rescue ArgumentError => e
#       puts "Couldnt take the square root of #{num}"
#       puts "Error was: #{e.message}"
#     end
#   end
# end

# begin
#   a_dangerous_operation
# rescue StandardError =>
#   puts "something went wrong: #{e.message}"
# ensure
#   puts "No matter what,make sure to execute this!"
# end

# class Animal
#   def make_n_noises(n=6)
#     n.times { print "Growl " }
#   end
# end

# class Liger < Animal
#   def make_n_noises(num = 4)
# #     num.times { print "Roar " }
# #     # here we'll call super without any arguments. This will pass on `num`
# #     # implicitly to super. You can think of this call to super as:
# #     # `super(num)`
# #     super(5)
# #   end
# # # end

# # Liger.new.make_n_noises(3) # => Roar Roar Roar Growl Growl Growl

# class Animal
#   def make_n_noises(n = 2)
#     n.times { print "Growl " }
#   end
# end

# class Liger < Animal
#   def make_n_noises(num = 4)
#     num.times { print "Roar " }
#     # here we'll call super without any arguments. This will pass on `num`
#     # implicitly to super. You can think of this call to super as:
#     # `super(num)`
#     super
#   end
# end

# Liger.new.make_n_noises(3) # => Roar Roar Roar Growl Growl Growl


class Animal
  attr_reader :species

  def initialize(species)
    @species = species
  end
end



class Human < Animal
  attr_reader :name

  def initialize(name)
    # super calls the original definition of the method
    # If we hadn't passed "Homo Sapiens" to super, then `name` would have
    # been passed by default.
    super("Homo Sapiens")
    @Parent_name = name
  end
end

class Son < Human
  attr_reader :name

  def initialize(name)
    # super calls the original definition of the method
    # If we hadn't passed "Homo Sapiens" to super, then `name` would have
    # been passed by default.
    @Parent_name = name
    super("John")
  end
end
