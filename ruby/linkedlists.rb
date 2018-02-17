# A linked list
# Methods:
# append(node)
# prepend(node)
# at(index)
# pop
# contains?
# find(data)
# to_s
# insert_at(index)
# remove_at(index)
class LinkedList
  attr_accessor :head, :tail, :size
  def initialize
    @head = nil
    @tail = nil
    @size = 0
  end

  def append(data)
    if !head.nil?
      @tail.succ = Node.new(data)
      @tail = @tail.succ
    else
      @head = Node.new(data)
      @tail = @head
    end
    @size += 1
  end

  def prepend(data)
    if !head.nil?
      node = Node.new(data)
      node.succ = @head
      @head = node
    else
      @head = Node.new(data)
      @tail = @head
    end
    @size += 1
  end

  def at(index)
    current = @head
    index.times do
      current = current.succ
    end
    current
  end

  def pop
    if size == 1
      @head = nil
      @tail = nil
    else
      before_tail = at(@size - 2)
      before_tail.succ = nil
      @tail = before_tail
    end
    @size -= 1
  end

  def contains?(value)
    current = @head
    @size.times do
      return true if current.value == value
      current = current.succ
    end
    false
  end

  def find(data)
    current = @head
    @size.times do |index|
      return index if current.value == data
      current = current.succ
    end
    nil
  end

  def to_s
    string = ''
    current = @head
    size.times do
      string += "( #{current.value} ) -> "
      current = current.succ
    end
    string += 'nil'
    string
  end

  def insert_at(index, data)
    if index.zero?
      prepend data
    elsif index == size
      append data
    else
      prec = at(index - 1)
      succ = prec.succ
      prec.succ = Node.new(data)
      prec.succ.succ = succ # it ain't wrong if it works
      @size += 1
    end
  end

  def remove_at(index)
    if index.zero?
      @head = @head.succ
    elsif index == @size - 1
      @tail = at(@size - 2) # removing the head and the tail
    else
      prec = at(index - 1)
      prec.succ = prec.succ.succ # so basically skips one
    end
    @size -= 1
  end
end

# Linked list's node
class Node
  attr_accessor :value, :succ

  def initialize(data = nil)
    @value = data
    @succ = nil
  end
end
