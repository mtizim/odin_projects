def caesar(word, shift)
  return word if shift.zero?
  abc = 'abcdefghijklmnopqrstuwxyz'
  abc_ = abc.upcase
  ret = word.split('').map do |letter|
    if abc.index(letter)
      abc[(abc.index(letter) + shift) % abc.length]
    elsif abc_.index(letter)
      abc_[(abc_.index(letter) + shift) % abc_.length]
    else
      letter
    end
  end
  ret.join
end
