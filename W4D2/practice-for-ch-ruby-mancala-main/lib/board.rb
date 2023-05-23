class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14)
    place_stones
  end

  def place_stones
    (0..5).each do |cup|
      @cups[cup] = [:stone,:stone,:stone,:stone]
    end

    (7..12).each do |cup|
      @cups[cup] = [:stone,:stone,:stone,:stone]
    end

    (6..13).each do |cup|
      if cup == 6 || cup == 13
        @cups[cup] = []
      end
    end


    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    if start_pos > 12
      raise "Invalid starting cup"
    end
    if start_pos == 6 || start_pos == 13 || start_pos == 0
      raise "Starting cup is empty"
    end
  end



  def make_move(start_pos, current_player_name)
    @cup[start_pos] = []



  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
