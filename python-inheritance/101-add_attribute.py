#!/usr/bin/python3
"""Defines a function thatadds attributes to objects."""


def add_attributes(obj, att, value):
    """Add a new attribute to an object if possible.
    Args:
        obj (any): The object to add an attribute to.
        att(str): The name of the attribute to addd to obj.
        value (any): The value of att.
    Raises:
            TypeError: If the attribute cannot be added.
        """
        if nor hasattr(obj, "__dict__"):
            raise TypeError("can't add new attribute")
        setattr(obj, value)
