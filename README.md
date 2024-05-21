# ticket-management-service

Objective: Create a Service Ticket Management App
User Roles: (i) Customer (ii) Service Moderator (iii) Service Agent (iii) Service Manager
Features: 
[Customer] 
- Create a Service Ticket 
- View Ticker Status
[Moderator]
- Assign Service Ticket
- Close Service Ticket
[Agent]
- Review & Resolve Service Ticket
[Manager]
- Analyse Ticket metrics 
Architecture:
- Multi-page App
- Separation of responsibility
- Modular components
- Feature driven State management

Project Layout:
- ui
 -- home (grid layout)
 -- ticket (input form)
 -- chart
- model
 -- customer
 -- moderator
 -- agent
 -- manager
- service
 -- create ticket
 -- view tickets
 -- update ticket
 -- archive ticket
 -- resolve ticket
 -- escalate ticket

Steps to follow:
- Customer can create a new ticket
- Customer can view tickets reported
- Moderator assigns ticket (to Agent)
- Agent provides solution (in description) and updates ticket
- Customer is notified of ticket (on status change)
- Manager can view a dashboard of open/closed tickets by month and by quarter


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ticket-management-service.git
cd ticket-management-service
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
