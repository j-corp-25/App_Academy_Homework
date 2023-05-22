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
