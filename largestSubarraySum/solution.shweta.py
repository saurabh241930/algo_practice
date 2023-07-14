sum_arr = []
max_sum = 0
a= [-2, 1, -3, 4, -1, 2, 1, -5, 4]
def divide_arr(start,end):
    global sum_arr 
    global max_sum
    if start == len(a)-1:
        end = start
        if a[start] > max_sum:
            max_sum = a[start]
            sum_arr = [a[start]]
            return sub_arr
    else:
        if end == len(a)-1:
            start = start+1
            if start == len(a)-1:
                end = start
            else:
                end = start+1
        else:
            end = end+1
        if sum(a[start:end]) > max_sum:
            max_sum = sum(a[start:end])
            sum_arr = a[start:end]
        divide_arr(start,end)
divide_arr(0,0)
print(sum_arr,max_sum)