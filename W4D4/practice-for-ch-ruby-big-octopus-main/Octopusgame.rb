array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh',
  'fiiiissshhhhhh']

# def find(array)
#   array.each do |octo|
#     max_le
#   end
# end
# p find(array)

def find_fast(array)
  array.max_by(length)
end

p find_fast(array)
