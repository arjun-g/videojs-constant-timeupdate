import videojs from 'video.js';
import { version as VERSION } from '../package.json';

const Plugin = videojs.getPlugin('plugin');

class ConstantTimeupdatePlugin extends Plugin {

	constructor(player, options) {
		super(player, options);
		let interval = (options && options.interval) || 1000;
		let roundFn = (options && options.roundFn) || Math.round;
		player.on('play', () => {
			clearInterval(this.timeHandler);
			let currentTime = roundFn(player.currentTime());
			this.timeHandler = setInterval(() => {
				currentTime = roundFn(player.currentTime());
				if(this.lastTime !== currentTime){
					player.trigger('constant-timeupdate', currentTime);
					this.lastTime = currentTime;
				}
			}, interval);
			if(this.lastTime !== currentTime){
				player.trigger('constant-timeupdate', currentTime);
				this.lastTime = currentTime;
			}
		});
		player.on('pause', () => {
			clearInterval(this.timeHandler);
		});
		player.on('ended', () => {
			clearInterval(this.timeHandler);
		});
	}

}

ConstantTimeupdatePlugin.VERSION = VERSION;

const registerPlugin = videojs.registerPlugin || videojs.plugin

registerPlugin('constantTimeupdate', ConstantTimeupdatePlugin);

export default ConstantTimeupdatePlugin;
