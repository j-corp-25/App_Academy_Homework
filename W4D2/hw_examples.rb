class Dinosaurs
  attr_reader :legs, :scales

  def initialize(legs,scales)
    @legs = legs
    @scales = scales
  end

end

class Chicken < Dinosaurs
  def information
    super(4,"Yes I have scales")
  end
end

class Fish
  attr_reader :species

  def initialize(species)
    @species = species
  end
end

class Salmon < Fish
  attr_reader :name
  def initialize(name)
    super
    @name = name
  end
end


class Worker
  def wage(num)
  @wage = num
  end
end


class Manager < Worker
  def wage
    50_000
  end
end

class CEO < Worker
  def wage
    1_000_000
  end
end

def total_salary(workers)
  total = 0
  workers.each do |worker|
    # Don't know/care what kind of `Employee` (regular, Manager,
    # or CEO) this is. We can treat them all the same.
    total += worker.wage
  end
end
