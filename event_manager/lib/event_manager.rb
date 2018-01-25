puts 'Event manager initialized'

event_atendees_lines = File.readlines('event_atendees.csv')
event_atendees_lines = event_atendees_lines.collect do |line|
  line = line.split(',')
  {
    id: line[0],
    RegDate: line[1],
    first_Name: line[2],
    last_Name: line[3],
    Email_Address: line[4],
    HomePhone: line[5],
    Street: line[6],
    City: line[7],
    State: line[8],
    Zipcode: line[9]
  }
end
event_atendees_lines.shift

puts event_atendees_lines[0][:Street]
