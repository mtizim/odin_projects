# Node for the binary tree
class Node
  attr_accessor :parent, :value, :left_child, :right_child
  def initialize(value)
    @parent = nil
    @value = value
    @left_child = nil
    @right_child = nil
  end

  def make_child(value)
    if value < @value
      if @left_child.nil?
        @left_child = Node.new(value)
      else
        @left_child.make_child(value)
      end
    elsif value > @value
      if @right_child.nil?
        @right_child = Node.new(value)
      else
        @right_child.make_child(value)
      end
    end
  end

  def to_s
    left = nil
    right = nil
    left = @left_child.to_s unless @left_child.nil?
    right = @right_child.to_s unless @right_child.nil?
    "#{@value} (l:#{left} r:#{right})"
  end
end

# The binary tree
class BinaryTree
  attr_accessor :root
  def initialize(array)
    array.shuffle!
    @root = Node.new(array.pop)
    array.length.times do
      @root.make_child(array.pop)
    end
  end

  def append(value)
    @root.make_child(value)
  end

  def breadth_first_search(value)
    layer = [@root]
    until layer.length.zero?
      found = search_layer(layer, value)
      return found if found
      next_layer = []
      layer.each do |node|
        next_layer += [node.left_child] unless node.left_child.nil?
        next_layer += [node.right_child] unless node.right_child.nil?
      end
      layer = next_layer
    end
    nil
  end

  def depth_first_search(value)
    depth_first_rec(@root, value)
  end

  def to_s
    @root.to_s
  end

  private

  def depth_first_rec(node, value)
    return node if node.value == value
    left = node.left_child.nil? ? nil : depth_first_rec(node.left_child, value)
    return left unless left.nil?
    right = node.right_child.nil? ? nil : depth_first_rec(node.right_child, value)
    return right unless right.nil?
    nil
  end

  def search_layer(array, value)
    # takes an array of nodes
    # and searches for a value
    array.each do |node|
      unless node.nil?
        return node if node.value == value
      end
    end
    nil
  end
end
