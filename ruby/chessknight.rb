# A single possible move and its successors
# x value starts at 1 instead of 0!!!!
class Move
  attr_accessor :x, :y, :prec, :successors
  def initialize(x, y, prec = nil)
    @x = x
    @y = y
    @prec = prec
  end

  # Generates all possible moves that can be made from parent
  # and links them to the parent
  def generate_successors
    @successors =
      [Move.new(x + 2, y + 1, self)] +
      [Move.new(x + 2, y - 1, self)] +
      [Move.new(x - 2, y + 1, self)] +
      [Move.new(x - 2, y - 1, self)] +
      [Move.new(x + 1, y + 2, self)] +
      [Move.new(x + 1, y - 2, self)] +
      [Move.new(x - 1, y + 2, self)] +
      [Move.new(x - 1, y - 2, self)]
    successors_copy =  []
    @successors.each do |successor|
      successors_copy += [successor] if (0..7) === successor.x && (0..7) === successor.y
    end
    @successors = successors_copy
  end
end

def knight_moves(start, goal)
  start = Move.new(start[0], start[1])
  current = [start]
  # breadth first search over moves
  # declaring it here since scoping
  found = nil
  loop do
    found = current.detect { |move| move.x == goal[0] && move.y == goal[1] }
    break unless found.nil?
    current_copy = []
    current.each do |move|
      current_copy += move.generate_successors
    end
    current = current_copy
  end
  current = found
  path = []
  loop do
    path += [[current.x, current.y]]
    current = current.prec
    break if current.nil?
  end
  path.reverse
end
