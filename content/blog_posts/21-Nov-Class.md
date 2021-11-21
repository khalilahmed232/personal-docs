---
title: "21 Nov Class"
date: 2021-11-22T01:30:41+05:30
draft: true
---

## Cabinet Partitioning Problem

```
arr = 3 10 2 5 1 2 7 4 1 8 2 5
```

Given an array which has time taken for n tasks. For given k find minimum time needed to complete tasks, provided each employee can take up continuos task

```
3 10 | 2 5 | 1 2 7 | 4 1 | 8 2 5
```
5 people can do in atmost of 

- 1 - 13
- 2 - 7
- 3 - 10
- 4 - 5
- 5 - 15

-----
Answer is 15 in above case as maximum time is taken by 5 and it will take 15 units of time max to complete all tasks

-----


Brute force soultion : 

    Find all the posible partitions and find max of each partition
    
    ind min of all partition will give us answer

    partion 1 - a | b | c | d | e - p1 = max ( a, b, c, d, e)
    partion 2 - x | y | z | v | w - p2 = max ( x, y, z, v, w)

    ans = min ( p1, p2, ...... )

use backtracking to do above

```java {linenos=table}
int ans = Integer.MAX_VALUE;
void fun(int arr[], int n, int k, int idx, int maxSum) {
    if ( k == 1) {
        maxSum = Math.max(maxSum, sum ( arr, idx, n-1) );
    }
    int sum = 0;
    for ( int i = idx; i <= n - k ; i++ ) {
        s = s + arr[i];
        maxSum = Math.max(maxSum, sum);
        fun(arr, n, k-1, i+1, maxSum);
    }
} 

int sum(int arr, int a, int b) {
    int sum = 0;
    for ( int i = a; i <= b ; i++ ) {
        sum += arr[i];
    }
}
```

> Time Complexity -  `n - 1 C k -1`

Efficient soultion is by using `Binary Search`

We can check if 15 is valid answer or not 

if 15 is answer then 16, 17, 18 are also valid

consider 11 is not answer, then 10, 9, 8 are also not valid

we can binary search from `0` to `sum (50)` 

Low | High | Mid | Ans
| :------------- | :----------: | :----------: | -----------: |
10 | 50 | 30 | 30 ✔
10 | 29 | 19 | 19 ✔
10 | 18 | 14 | 14 ✔
10 | 13 | 11 | 14 ❌
12 | 13 | 12 | 14 ❌
13 | 13 | 13 | 13 ✔
13 | 12 | 

> Time Complexity - N * log ( s ) -> 60 N. where s is sum

-----

# Problem

Given 1D plane, n houses are placed. K house parties are to be arranged far away from each other


Brute Force solution - using combinations and back tracking
n - 2 C k - 2

Binary Search -

we can check if 15 is valid answer
    15 is not valid, so is 16, 17, 18

we can check if 6 is valid answer
    6 is valid, so is 5, 4, 3

using same logic we can find using binary search 

`low = 0` and `high = arr[n-1] - arr[0]`

> Time Complexity - N * log ( d ) -> 60 N. where d is diff

-----

Given two sorted arrays find median n+m is odd and there are no duplicates

```
A N = 3 5 10 12 18
B M = 2 9 13 15 20 21 25 29
```

ans = 13 ( 6th element in combined array )

Brute force solution - 
    merge A, B -> C 
    find median in C

> Complexity - N + M, N + M

Slightly better solution

    instead of merging array use variables to find  n+m/2 element

> Complexity - (N + M) /2, 1

Using binary search

    check for elements less than x - lt
    check for elements greater than x - lt

    median = when lt = gt = total length / 2

    in our example it is lt = 6 and gt = 6

    low = min (a[0], b[0])
    high = max (a[n-1], b[m-1])


Low | High | Mid | lt | gt 
| :--- | :---: | :---: | :---: | ---: |
2 | 29 | 15 | 7⬇️ | 5⬆️
2 | 14 | 8 | 3⬆️ | 10⬇️
9 | 14 | 11 | 5⬆️ | 8⬇️
12 | 14 | 13 | 6 ✔ | 6 ✔

2 approaches 
> Time Complexity - ( 2 Log N + 2 Log M ) * log ( b - a + 1 )

-----------------

Given list of phone numbers - 10 digit 
find time for insert / search / delete

Solution | insert | search | delete 
| :--- | :---: | :---:  | ---: |
Unsorted Array | 1 | N | N
Sorted Array | N | log N | N
Sorted signly linked list | 1 | N | N
Binary search tree | H | H | H
Direct Access table | 1 | 1 | 1
Hash Table Seperate Chaining | L | L | L
Hash Table Open Addressing | P | P | P

- H is height in binary search tree 
  - worst case is n - using skewed tree
- Best case is log n
  - using balanced binary search tree
    - AVL
    - RB - Red black

- L is Length of list in hash table
  - worst case is N
- P is probe in hash table

--------
# Hashing

## Collision

## Collision Resolution Techniques

### Seperate Chaining

### Open Addressing

#### Linear Probing

#### Quadratic Probing
--------

Todo 

- Implement hashtable using seperate chaining or open addressing
    - insert
    - delete
    - search