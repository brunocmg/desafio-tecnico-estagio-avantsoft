# Desafio Técnico — Avantsoft (Estagiário)

This repository contains a small Node.js API project created as a technical challenge for an internship application (Avantsoft). The API implements a simple students resource (in-memory storage) with basic validation and an extra computed field for GET responses.

## Objective

Build a simple API with the following routes:

- `POST /students` — register a student with `name` and `grade` (0 to 10)
- `GET /students` — return a list with the registered students (showing `id`, `name` and `grade`)
- `GET /students/:id` — return a specific student's data by id (`id`, `name`, `grade`)

Requirements and rules:

- Storage can be in-memory (array/list) or a database — this project uses in-memory storage.
- Validate that `grade` is between 0 and 10 (inclusive).
- The API must work with at least 3 different records.
- For every `GET` route, include a field that returns the first non-repeated letter of the student's `name` (case-insensitive). If all letters repeat, return `'_'`.
  - Example: For `"Gabriel"` the first non-repeated letter is `g`. For `"Anna"`, all letters repeat, so the returned value should be `'_'`.

## API Specification

POST /students
- Request JSON body:
```json
{
  "name": "Gabriel",
  "grade": 8
}
```
- Responses:
  - 201 Created — student created, returns the created object including `id` and the computed `firstNonRepeatedLetter` field.
  - 400 Bad Request — validation error (e.g. missing fields or grade out of range).

GET /students
- Returns 200 OK with a JSON array of students. Each student object includes `id`, `name`, `grade`, and `firstNonRepeatedLetter`.

GET /students/:id
- Returns 200 OK with the student object (including `firstNonRepeatedLetter`) or 404 Not Found if the id does not exist.

## Example response (GET /students)

```json
[
  {
    "id": 1,
    "name": "Gabriel",
    "grade": 8,
    "firstNonRepeatedLetter": "g"
  },
  {
    "id": 2,
    "name": "Anna",
    "grade": 7,
    "firstNonRepeatedLetter": "_"
  }
]
```

## Implementation notes

- The project currently uses in-memory storage and simple validation. If you switch to a database, update the storage layer accordingly.
- The `firstNonRepeatedLetter` computation is case-insensitive and ignores spaces. For names with accented characters you may want to normalize them depending on requirements.

## Run locally (PowerShell)

1. Install dependencies:

```powershell
npm install
```

2. Start the server:

```powershell
node src/server.js
```

Make sure you are running a Node version that supports the project's module type (check `package.json` for `"type": "module"`).

## Testing with curl (examples)

Create a student:

```powershell
curl -X POST http://localhost:3000/students -H "Content-Type: application/json" -d '{"name":"Gabriel","grade":8}'
```

List students:

```powershell
curl http://localhost:3000/students
```

Get student by id:

```powershell
curl http://localhost:3000/students/1
```

## Notes

- This README is based on the challenge description provided in the application email/screenshots. If you want, I can:
  - add usage examples for Postman, or
  - include a small set of unit tests, or
  - add a `.gitignore` and `LICENSE` file.

---
Project prepared for the Avantsoft internship technical challenge.
