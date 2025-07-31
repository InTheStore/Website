# Caffenate

> A platform to help users discover unique, independent coffee and drink shops near them

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [MongoDB](#mongodb)

## Features

- Filter drinks based on category such as coffee or boba
- Search for drinks in a particular area
- Easily open on Google Maps to get direction and store hours

## Installation

```bash
# Clone the repository
git clone git@github.com:InTheStore/website.git
cd website

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Install frontend dependencies
cd frontend
npm install react-router-dom jwt-decode axios
```

## Usage
```
# To run backend
python manage.py runserver

# To run frontend
npm run dev
```

## Deployment
### Requirements (Put Into Github Secrets)
- AWS_ACCESS_KEY_ID
- AWS_REGION
- AWS_SECRET_ACCESS_KEY
- EC2_HOST
- EC2_SECURITY_GROUP_ID
- EC2_SSH_KEY
- EC2_USER

### Software Required on EC2 Instance
- Gunicorn
- Caddy

### Fill out .env.example
- Fill in all the required information into the .env file and export .env to your ec2 instance

### Deploy automatically
- Using the provided deploy.yml, deploy the website automatically to the ec2 instance using Github Actions

## MongoDB 
- the expected document type that the backend expects
  
| name      |Location                                                                                              | cafetype       | maps_url                                                                                  |
|-----------|------------------------------------------------------------------------------------------------------|----------------|-------------------------------------------------------------------------------------------|
|About Time |{"address":"3287 Wilshire Blvd B","city":"Los Angeles","state":"CA","zipcode":{"$numberInt":"90010"}} | Coffee and Tea |  https://www.google.com/maps/search/?api=1&query=About%20Time%203287%20Wilshire%20Blvd%20B|


