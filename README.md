# videojs-constant-timeupdate

Adds a new event `constant-timeupdate` to player - an alternative to `timeupdate` event which will be triggered on a constant interval unlike `timeupdate`

## Installation

```sh
npm install --save videojs-constant-timeupdate
```

## Usage

To include videojs-constant-timeupdate on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-constant-timeupdate.min.js"></script>
<script>
  var player = videojs('my-video');
  player.constantTimeupdate({
      interval: 1000,
      roundFn: Math.round
  });
</script>
```



## License

MIT. Copyright (c) Arjun Ganesan &lt;me@arjun-g.com&gt;


[videojs]: http://videojs.com/
