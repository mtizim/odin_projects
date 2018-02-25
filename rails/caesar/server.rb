require 'sinatra'
require_relative 'caesar.rb'

# yes this is half assed but i came here tu build servers
# not to play around with html and css
# i mean i can do both but i just didn't want to at the point
# of building this

get '/' do
  "<form action='/' method='POST'>
  <input class='text' type='text' name='text'>
  <input class='number' type='number' name = 'shift'>
  <input class='submit' type='submit' value='Upload'>
  </form>'"
end

post '/' do
  caesar(params[:text], params[:shift].to_i)
end
