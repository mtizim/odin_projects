def merge(left, right)
  sorted = []
  while !left.empty? && !right.empty?
    if left[0] < right [0]
      sorted += [left[0]]
      left.shift
    else
      sorted += [right[0]]
      right.shift
    end
  end
  sorted += left + right
  sorted
end

def merge_sort(list)
  return list if list.length == 0
  return list if list.length == 1
  middle = (list.length / 2).floor
  left = merge_sort(list[0...middle])
  right = merge_sort(list[middle..list.length - 1])
  merge(left, right)
end
