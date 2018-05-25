# Mattermoster Base
Mattermoster production ready implementation

[Mattermoster](https://github.com/swordf1zh/mattermoster) is a Node.js + Express base API for Mattermost slash command integrations.

[Mattermost](https://about.mattermost.com/) is an Open source, private cloud Slack-alternative.

## Installation

### Clone this project and install dependencies

```sh
$ git clone https://github.com/swordf1zh/mattermoster-base.git
$ cd mattermoster-base
$ npm install
```

### Run your project in production

```sh
$ npm start
```

You can supply a different port number for your server (defaults to 3000). To listen on port 12345, type:

```sh
$ npm start 12345
```

### Test base endpoint

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Plugins

Mattermoster is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | Description |
| ------ | ------ |
| [Todo](https://github.com/swordf1zh/mattermoster-todo-plugin/blob/master/README.md) | ToDo plugin for Mattermoster based on Node.js + Express + MySQL. |

## Development

Want to contribute? Great, we are waiting for your PRs.

```sh
$ npm run dev
```


## License

MIT


**Free Software, Hell Yeah!**