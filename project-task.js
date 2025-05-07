/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15"
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/
/*Here is my understandin
Error 1-Missing comma after "checkInDate": "2024-05-15". A comma is required to separate it from "checkOutDate".

Error 2-Invalid value undefined in the "age" field of the second guest ("age": undefined). JSON does not allow 
undefined as a value; it should be a number, string, boolean, object, array, or null.

Error 3-Invalid email format in the second guest's "email": "bob.smith@example". The email lacks a valid top-level domain (e.g., .com, .org).

Error 4-Trailing comma in the "amenities" array (["WiFi", "Breakfast", "Parking",]). JSON does not allow trailing commas at the end of arrays or objects.

*/

// ============================================
// 🔍 New JSON with corrected syntax Errors
// ============================================

const ValidBookingJson = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}';


// ============================================
// 🤔 Follow-Up Questions
// ============================================
/*

💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I used jsonlint and VS studio for this 
2️⃣ How did you confirm that your corrected JSON file was valid?
I have tested on format, visually verified the file and tested with tools 
3️⃣ Which errors were the most difficult to spot? Why?
syntax error as this contains all datatypes

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   will suggest visual validation first and lintner.

   */
