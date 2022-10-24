# Part 2 Answers

1. Line 12 will print out 3, since the input array has 3 elements. The for loop runs as many times are there elements in the input array prices, so the loop stops when i goes from 2 to 3. 
2. Line 13 will print out 150, since 150 is the last element of the array's discounted price. At the end of the loop, discountedPrice will store the value from the last iteration of the loop.
3. Line 14 will print out 150, which is the last final price from the array, since the loop has stopped running at this point.
4. This function, given a list of prices and a discount price to apply, will loop through the list of prices and apply the discount to each price. It will then add these new, discounted prices to another array and reurn that.
5. This code will cause an error. This is because we switched from ```var``` to  ```let``` in the for loop. Let's scope is only localized to the loop structure itself; when we attempt to log ```i``` to the console, the scope for it is no longer defined.
6. The same issue as above will occur for this piece of code. ```discountedPrice``` is declared with a ```let```, which means it is only valid inside the for loop structure.
7. This piece of code will not error out and produce the same result as question 3 earlier. This is because ```finalPrice``` is declared with ```let```, but in the scope of the body of the function rather than just the loop. Thus, we can edit ```finalPrice``` within the loop (which is a nested part of the overarching function), and we print it out in the outer part of the function.
8. This function will return ```[50, 100, 150]```, which is the same result as the last code block. This is because all variables are correctly scoped.
9. This snippet of code will error out at line 11; ```i``` is once again defined with ```let```, which will only allow it to exist in the scope of the for loop.
10. This code will print out 3; no errors, since the variables are correctly scoped.
11. This code will produce the same result as the last code, snippet, which is an array of discounted prices based on the input array and discount. In this case, the output is ```[50, 100, 150]```.



12. 
    - ```student.name```
    - ```student["Grad year"]```
    - ```student.greeting()```
    - ```student["Favorite Teacher"].name```
    - ```student.courseLoad[0]```

13. 
    - '3' + 2 results in a '32' (as a string). This is because integers map to string representations. We are also conatenating a string with the '+' operator.
    - '3' - 2 results in a 1 (as a number). This is because we are not concatenating text like earlier, but rather performing a math operation.
    - ```null``` is treated as a falsy value, thus a 0. This is basically 3 + 0, which is 3/
    - This is similar to the first question; we are concatenating two strings, so it would be '3null'
    - ```true``` is treated as a truthy value (1), so this is basically 1 + 3, which equals 4.
    - This results in 0, as both values are treated as falsy values, thus a 0 + 0 operation.
    - This is '3undefined', because we are concatening a string.
    - This results in NaN(not a number), because undefined means there is nothing assinged to it, so we are doing 3 - undefined.

14. 
    - This is true, since the '2' becomes a number 2, which is greater than 1.
    - This is false, since we are comparing two strings (ASCII), not the number 2 and 12. So, 2 is greater than 1 as a character.
    - This is comparing 2 to 2, which are both equal. This is true.
    - === is the strict equality operator, and since a number and string are not the same type, this is not equal.
    - 2 is not a truthy value (only 1 is), so this is false
    - This is true, since Boolean(2) will convert this to the truthy version of 2, which is true, which is equal to true. Thus, true.
15. The == operator simply checks for equality; if two things being compared are equal to each other at face glance. The === operator is a strict equality operator; this checks if the type of the two operands are equal, and would return false if not.

16. In File
17. This function will return an array with ```[2,4,6]``` inside it. This is because we are passing in an array, and then looping through each element. At each element, we call the callback function on it (which is another parameter), which essentially multiplies each element by 2.

18. In file
19. The function will first print out a 1. Then it will print out a 4. Then it will enter a 1 second delay to print a 2, which will end up printing last. Then it will print a 3, since it has a 0 second delay. The final order would be 1, 4, 3, 2.
