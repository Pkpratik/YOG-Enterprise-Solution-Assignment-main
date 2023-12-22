# Creating the Dictionary
people_list = [
    {"name": "Pratik Agrawal", "age": 25, "city": "Indore"},
    {"name": "Dharam Sing", "age": 30, "city": "Bhopal"},
    {"name": "Bablu Goyal", "age": 22, "city": "Pune"}
]

# Filter out persons under the age of 25 and remove them from the list
people_list = [person for person in people_list if person["age"] >= 25]

# Sort the remaining persons based on their city in alphabetical order
sorted_people = sorted(people_list, key=lambda x: x["city"])

# Print the final list of persons
for person in sorted_people:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")

# Output
# Name: Pratik Agrawal, Age: 30, City: Indore
# Name: Dharam Sing, Age: 25, City: Bhopal
