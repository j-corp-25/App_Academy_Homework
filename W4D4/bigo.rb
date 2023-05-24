def chop_add(num1,num2)
  num1 = num1 / 5.0
  num2 = num2 / 5.0

  300.times do
    num1 = num1 / 2
    num2 = num2 / 2
  end

  sum = num1 + num2

  300.times {sum = sum * 2}

  sum * 5
end


def iter_add(num1, num2)
  num1.times {num2 = num2 + 1}
  num2
end

p iter_add(1,1) == 2.0
p iter_add(10,1) == 11.0
p iter_add(1,-5) == -4.0
