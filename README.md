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
git clone
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

Start front end

```
nx serve front
```
