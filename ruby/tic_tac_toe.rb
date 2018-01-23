# Self-descriptive
class Board
  def initialize
    @board = [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]]
  end

  def play(player)
    win = false
    print_board
    print "Player #{player}, "
    while win == false
      puts "Where do you want to make the move at? (x y)"
      inp = gets.chomp.split(" ")
      x = inp[0].to_i
      y = inp[1].to_i
      if (x > 2 || x < 0 || y < 0 || y > 2)
        puts 'Restarting game'
        restart
        return 0
      end
      win = move(player, x, y)
      puts 'Illegal move! ' unless win
    end
    if win == 3
      puts "It's a draw!"
      print_board
      restart
    end
    if win == 1 || win == 2
      puts "Player #{win} won"
      print_board
      restart
    end
    1
  end

  private

  def restart
    @board = [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]]
  end

  def print_board
    print "\n"
    print @board[0]
    print "\n"
    print @board[1]
    print "\n"
    print @board[2]
    print "\n"
    # ofc i could map 1 and 2 to x and o,but i like it more that way
  end

  def move(player, location_x, location_y)
    # so move has 5 return statuses
    # false if move cannot be made
    # 1 or 2 if player 1 or 2 won
    # 3 for draw
    # 4 if nothing happened,and is just returned to avoid nil comparisons
    if !@board[location_y][location_x].zero?
      false
    else
      change_board(player, location_x, location_y)
      check_win
    end
  end

  def change_board(player, location_x, location_y)
    @board[location_y][location_x] = player
  end

  def check_win_for(player)
    if (
       # vertical
       (@board[0][0] == player && @board[1][0] == player && @board[2][0] == player) ||
       (@board[0][1] == player && @board[1][1] == player && @board[2][1] == player) ||
       (@board[0][2] == player && @board[1][2] == player && @board[2][2] == player) ||
       # horizontal
       (@board[0][0] == player && @board[0][1] == player && @board[0][2] == player) ||
       (@board[1][0] == player && @board[1][1] == player && @board[1][2] == player) ||
       (@board[2][0] == player && @board[2][1] == player && @board[2][2] == player) ||
       # diagonal
       (@board[0][0] == player && @board[1][1] == player && @board[2][2] == player) ||
       (@board[0][2] == player && @board[1][1] == player && @board[2][0] == player))
      true
    else
      false
    end
  end

  def check_win
    return 1 if check_win_for(1)
    return 2 if check_win_for(2)
    return 3 unless (@board[0].include?(0) || @board[1].include?(0) || @board[2].include?(0))
    4
  end
end

board = Board.new

loop do
  redo if board.play(1).zero?
  redo if board.play(2).zero?
end
