#!/usr/bin/python3
"""Write a class Square that defines a square"""

class Square:
    """Write a class Square that defines a square"""

    def __init__(self, size=0):
        """initialize square
               Args:
                   size (int): size of the square
                """
        if type(size) is not int:
            raise TypeError("size must be an integer")
        elif size < 0:
            raise TypeError("size must be an integer")
        else:
            self.__size = size
