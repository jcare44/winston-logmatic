# winston-logmatic

[Winston](https://github.com/winstonjs/winston) transport for [Logmatic](http://logmatic.io/)

```
npm i -S winston-logmatic
```

## Config

You need to pass down a [node-logmatic](https://github.com/jcare44/node-logmatic) config objects to winston-logmatic for him to work.

```javascript
{
  logmatic: {
    token: undefined, // Required : your Logmatic token
    defaultProps: {} // add a default value to your log messages (like appname or hostname)
  }
}
```

## Examples

```javascript
new Winston.Logger({
  transports: [
    new Winston.transports.Console({
      colorize: true,
      timestamp: true
    }),
    new WinstonLogmatic({
      logmatic: {
        token: 'MY_TOKEN',
        defaultProps: {
          appname: require('./package.json').name,
          hostname: 'prod'
        }
      }
    })
  ],
  timestamp: true,
  level: 'debug'
});
```
