# OidcWs

Usage of react-oidc-context with an nx workspace and zitadel.

Tried to use the official react zitadel integration library, but it was a nightmare.

usage:

For better experience install nx globally:

```
npm i -g nx
```

Then

```
git clone https://github.com/hanspoo/oidc-ws
cd oidc-ws
npm install
```

Start zitadel server:

```
cd zitadel-server
docker compose up
```

Create project and web app in:
`localhost:8080`

Configure the .env file with client id of the app created.

Start front end

```
nx serve front
```
