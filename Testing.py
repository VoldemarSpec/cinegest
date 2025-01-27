
def deviation(seq, pred):
    """Returns the difference between the largest and smallest values in seq for which pred is True.
        If pred evaluates to False on all values in seq, this call returns 0.

        Args:
        seq -- a sequence of numbers
        pred -- a one-parameter function

        Returns:
        the difference between the largest and smallest values in seq for which pred is True.
        If pred evaluates to False on all values in seq, this call returns 0.

        Example:
        >>> seq = [-3, 1, 5, -4, 10]
        >>> pred1 = lambda x: x > 0
        >>> pred2 = lambda x: x % 2 == 0
        >>> pred3 = lambda x: True
        >>> pred4 = lambda x: False
        >>> deviation(seq, pred1)
        9
        >>> deviation(seq, pred2)
        14
        >>> deviation(seq, pred3)
        14
        >>> deviation(seq, pred4)
        0
        """

    counter = 0
    for i in seq:
        if pred(i) == True:
            counter+=1
        else:
            break
    if counter == len(seq):
        return max(seq) - min(seq)
    numbers = []
    for i in range(len(seq)):
        if pred(seq[i]) == True:
            numbers.append(seq[i])
            break
    for i in range(-1, -len(seq), -1):
        if pred(seq[i]) == True:
            numbers.append(seq[i])
            break
    if len(numbers) < 2:
        return 0
    elif numbers[0] != numbers[1]:
        return numbers[1] - numbers[0]
    elif numbers[0] == numbers[1]:
        return 0

import doctest
doctest.testmod()