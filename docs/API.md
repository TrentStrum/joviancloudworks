# API Documentation

## Authentication

### POST /api/auth/login

Authenticates a user and returns a session token.

**Request:**

```json
{
	"email": "string",
	"password": "string"
}
```

**Response:**

```json
{
	"token": "string",
	"user": {
		"id": "string",
		"email": "string",
		"role": "string"
	}
}
```

## Blog Posts

### GET /api/posts

Returns a list of blog posts.

**Query Parameters:**

- `page`: number (default: 1)
- `limit`: number (default: 10)
- `category`: string (optional)

**Response:**

```json
{
	"posts": [
		{
			"id": "string",
			"title": "string",
			"content": "string",
			"image_url": "string",
			"created_at": "string"
		}
	],
	"total": "number",
	"page": "number",
	"limit": "number"
}
```

## Features

### GET /api/features

Returns a list of features.

**Response:**

```json
{
	"features": [
		{
			"id": "string",
			"title": "string",
			"description": "string",
			"image_url": "string",
			"tags": ["string"],
			"demo_url": "string"
		}
	]
}
```
