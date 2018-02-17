require 'sinatra'
require 'sinatra/reloader'
random_number = rand 100

get '/' do
  guess = params['guess'].to_i
  msg = "Can you guess the secret number?"
  if params['guess']
    if random_number < guess
      msg = 'Too high!'
    elsif random_number > guess
      msg = 'Too low!'
    else
      msg = "You got it! The secret number is #{random_number}"
    end
  end
  lastval = params['guess'] ? guess : 0
  erb :guesser, locals: { msg: msg, lastval: lastval }
end
