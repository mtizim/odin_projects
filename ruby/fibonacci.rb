def fibs(x)
  arr = [1, 1]
  return arr[0..x - 1] if (1..2) === x
  i = 2
  while i < x
    arr[i] = arr[i - 1] + arr[i - 2]
    i += 1
  end
  arr
end

def fibs_rec(x)
  (1..2) === x || y = fibs_rec(x - 1) 
  (1..2) === x ? [1, 1][0..x - 1] : y + [(y[-1] + y[-2])]
end

# i could easily make fibs rec an one liner
# but it get's O(n^3) that way
